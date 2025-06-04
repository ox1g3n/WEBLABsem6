const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(express.json());

// MongoDB connection URI for localhost
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db;

client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    db = client.db('student_records');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Add a new student
app.post('/students', async (req, res) => {
  try {
    const { USN, Name, Subject_code, CIE } = req.body;
    const result = await db.collection('students').insertOne({ USN, Name, Subject_code, CIE });
    res.status(201).json({ message: 'Student record added', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get students with CIE < 20
app.get('/students/low-cie', async (req, res) => {
  try {
    const students = await db.collection('students').find({ CIE: { $lt: 20 } }).toArray();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
