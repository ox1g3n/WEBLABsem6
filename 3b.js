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
    db = client.db('HR');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Add employee
app.post('/employees', async (req, res) => {
  try {
    const { emp_name, email, phone, hire_date, job_title, salary } = req.body;
    const result = await db.collection('employees').insertOne({
      emp_name, email, phone, hire_date, job_title, salary
    });
    res.send('Employee added successfully!');
  } catch (err) {
    res.status(500).send('Error adding employee: ' + err.message);
  }
});

// Get employees with salary > 50000
app.get('/employees/high-salary', async (req, res) => {
  try {
    const employees = await db.collection('employees')
      .find({ salary: { $gt: 50000 } })
      .toArray();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
