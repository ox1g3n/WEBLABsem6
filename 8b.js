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
    db = client.db('FinalYears');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Add student placement record
app.post('/students', async (req, res) => {
  try {
    const { USN, Name, Company_name } = req.body;
    const result = await db.collection('students').insertOne({
      USN, Name, Company_name
    });
    res.send('Student placement record added successfully!');
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

// Get students selected for Infosys
app.get('/students/infosys', async (req, res) => {
  try {
    const students = await db.collection('students')
      .find({ Company_name: 'Infosys' })
      .toArray();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
