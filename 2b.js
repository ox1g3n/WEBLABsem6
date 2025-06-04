const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db;

client.connect()
  .then(() => {
    db = client.db('student_management');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add student
app.post('/students', async (req, res) => {
  try {
    const { Student_name, USN, semester, exam_fee } = req.body;
    const result = await db.collection('students').insertOne({
      Student_name,
      USN,
      semester: parseInt(semester),
      exam_fee: exam_fee === 'true'
    });
    res.send('Student added successfully!');
  } catch (err) {
    res.status(500).send('Error adding student: ' + err.message);
  }
});

// Delete students who have not paid exam fees
app.post('/students/delete-unpaid', async (req, res) => {
  try {
    const result = await db.collection('students').deleteMany({ exam_fee: false });
    res.send(`Deleted ${result.deletedCount} students who have not paid exam fees.`);
  } catch (err) {
    res.status(500).send('Error deleting students: ' + err.message);
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
