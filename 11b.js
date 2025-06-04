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
    db = client.db('attendance_management');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Add student attendance record
app.post('/students', async (req, res) => {
  try {
    const { student_name, usn, department, subject, classes_attended, total_classes, attendance_percentage } = req.body;
    const result = await db.collection('students').insertOne({
      student_name, usn, department, subject, classes_attended, total_classes, attendance_percentage: parseFloat(attendance_percentage)
    });
    res.send('Student attendance record added successfully!');
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

// Get students with attendance below 75%
app.get('/students/low-attendance', async (req, res) => {
  try {
    const students = await db.collection('students')
      .find({ attendance_percentage: { $lt: 75 } })
      .toArray();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
