const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const https = require('https');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The users and reward points are saved in memory and disappear whenever the service is restarted.
let users = {};
let rewardPoints = {};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.get('/rewardpoints', async (req, res) => {
  const points = await DB.getRewardPoints();
  res.send(points);
});

apiRouter.get('/users', (req, res) => {
  res.send(Object.values(users));
});

// Get user details by token
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});



secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetRewardPoints
apiRouter.get('/reward-points/:email', (req, res) => {
  const email = req.params.email;
  const points = rewardPoints[email];
  if (points !== undefined) {
    res.send({ points });
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
});

// AddRewardPoints
secureApiRouter.post('/reward-points', async (req, res) => {
  const point = { ...req.body, ip: req.ip };
  await DB.addPoints(point);
  const points = await DB.getRewardPoints();
  res.send(points);
});

// Return the application's default page if the path is unknown
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Create HTTPS server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// Endpoint to handle form submission
app.post('/submit-review', (req, res) => {
  const { name, review } = req.body;
  // Process the review (e.g., save to database)
  console.log(`Received review from ${name}: ${review}`);
  res.send('Review submitted successfully');
});