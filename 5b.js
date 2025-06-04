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
    const { name, usn, dept, grade } = req.body;
    const result = await db.collection('students').insertOne({
      name, usn, dept, grade
    });
    res.send('Student added successfully!');
  } catch (err) {
    res.status(500).send('Error adding student: ' + err.message);
  }
});

// Update student grade by name
app.post('/students/update', async (req, res) => {
  try {
    const { name, grade } = req.body;
    const result = await db.collection('students').updateOne(
      { name },
      { $set: { grade } }
    );
    if (result.modifiedCount === 0) {
      res.send('No student found with that name.');
    } else {
      res.send('Student grade updated successfully!');
    }
  } catch (err) {
    res.status(500).send('Error updating grade: ' + err.message);
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

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
