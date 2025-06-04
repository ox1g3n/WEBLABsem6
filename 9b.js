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
    db = client.db('student_management');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Add student
app.post('/students', async (req, res) => {
  try {
    const { user_name, branch, semester } = req.body;
    const result = await db.collection('students').insertOne({
      user_name, branch, semester
    });
    res.send('Student added successfully!');
  } catch (err) {
    res.status(500).send('Error adding student: ' + err.message);
  }
});

// Get all students
app.get('/students', async (req, res) => {
  try {
    const students = await db.collection('students').find().toArray();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get students from 6th semester CSE branch
app.get('/students/6th-cse', async (req, res) => {
  try {
    const students = await db.collection('students')
      .find({ semester: 6, branch: 'CSE' })
      .toArray();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
