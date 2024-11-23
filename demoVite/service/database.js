const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('brothershotpotorem');
const userCollection = db.collection('user');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addPoints(email, points) {
  await userCollection.updateOne(
    { email },
    { $inc: { points } },
    { upsert: true } // This option creates a new document if no matching document is found
  );
}

async function updateUserToken(email, token) {
  await userCollection.updateOne(
    { email },
    { $set: { token } }
  );
}

async function getRewardPoints(email) {
  const user = await getUser(email);
  return user ? user.points : null;
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addPoints,
  getRewardPoints,
  updateUserToken,
};
