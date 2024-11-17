const fs = require('fs');
const https = require('https');
const express = require('express');
const uuid = require('uuid');
const app = express();



// The users and reward points are saved in memory and disappear whenever the service is restarted.
let users = {};
let rewardPoints = {};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;
    rewardPoints[user.email] = 0; // Initialize reward points

    res.send({ token: user.token });
  }
});

apiRouter.get('/rewardpoints', (req, res) => {
  res.send(rewardPoints);
});

apiRouter.get('/users', (req, res) => {
  res.send(Object.values(users));
});

// Get user details by token
apiRouter.get('/auth/user', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.headers.authorization);
  if (user) {
    res.send({ email: user.email });
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
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
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
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
apiRouter.post('/reward-points', (req, res) => {
  const { email, points } = req.body;
  if (rewardPoints[email] !== undefined) {
    rewardPoints[email] += points;
    res.send({ points: rewardPoints[email] });
  } else {
    res.status(404).send({ msg: 'User not found' });
  }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

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