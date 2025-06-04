const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db;

client.connect()
  .then(() => {
    db = client.db('faculty_management');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Add faculty
app.post('/faculty', async (req, res) => {
  try {
    const { ID, Title, Name, branch } = req.body;
    const result = await db.collection('faculty').insertOne({
      ID, Title, Name, branch
    });
    res.send('Faculty added successfully!');
  } catch (err) {
    res.status(500).send('Error adding faculty: ' + err.message);
  }
});

// Get all faculty
app.get('/faculty', async (req, res) => {
  try {
    const faculty = await db.collection('faculty').find().toArray();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get CSE professors
app.get('/faculty/cse-professors', async (req, res) => {
  try {
    const faculty = await db.collection('faculty')
      .find({ branch: 'CSE', Title: 'PROFESSOR' })
      .toArray();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
