const express = require('express');
const app = express();
const port = 3000;

// Route for Computer Science branch
app.get('/cs', (req, res) => {
  res.send(`
    <html>
      <head><title>Computer Science</title></head>
      <body style="background-color:#e3f2fd; font-family:Arial, sans-serif; padding:20px;">
        <h1 style="color:#1976d2;">Computer Science Engineering</h1>
        <p>Welcome to the Computer Science branch. We offer courses in programming, algorithms, data structures, and software development.</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

// Route for Mechanical branch
app.get('/mech', (req, res) => {
  res.send(`
    <html>
      <head><title>Mechanical Engineering</title></head>
      <body style="background-color:#ffebee; font-family:Georgia, serif; padding:20px;">
        <h1 style="color:#d32f2f;">Mechanical Engineering</h1>
        <p>Welcome to the Mechanical branch. We focus on thermodynamics, fluid mechanics, manufacturing, and design engineering.</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

// Route for Electrical branch
app.get('/ee', (req, res) => {
  res.send(`
    <html>
      <head><title>Electrical Engineering</title></head>
      <body style="background-color:#e8f5e8; font-family:'Courier New', monospace; padding:20px;">
        <h1 style="color:#388e3c;">Electrical Engineering</h1>
        <p>Welcome to the Electrical branch. We cover power systems, electronics, control systems, and electrical machines.</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

// Route for Civil branch
app.get('/civil', (req, res) => {
  res.send(`
    <html>
      <head><title>Civil Engineering</title></head>
      <body style="background-color:#fff3e0; font-family:Verdana, sans-serif; padding:20px;">
        <h1 style="color:#f57c00;">Civil Engineering</h1>
        <p>Welcome to the Civil branch. We specialize in structural engineering, construction management, and infrastructure development.</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

// Home route with links to branches
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Engineering College Branches</title></head>
      <body style="background-color:#f5f5f5; font-family:Arial, sans-serif; padding:20px;">
        <h1 style="text-align:center; color:#333;">Engineering College Branches</h1>
        <div style="text-align:center;">
          <ul style="list-style:none; padding:0;">
            <li style="margin:10px;"><a href="/cs" style="text-decoration:none; color:#1976d2; font-size:18px;">Computer Science Engineering</a></li>
            <li style="margin:10px;"><a href="/mech" style="text-decoration:none; color:#d32f2f; font-size:18px;">Mechanical Engineering</a></li>
            <li style="margin:10px;"><a href="/ee" style="text-decoration:none; color:#388e3c; font-size:18px;">Electrical Engineering</a></li>
            <li style="margin:10px;"><a href="/civil" style="text-decoration:none; color:#f57c00; font-size:18px;">Civil Engineering</a></li>
          </ul>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
