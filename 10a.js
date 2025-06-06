const express = require('express');
const app = express();
const port = 3000;
let visitCount = 0;
const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} ${req.url}`);
    next();
};
const visitCounterMiddleware = (req, res, next) => {
    visitCount++;
    console.log(`Visitor count: ${visitCount}`);
    next();
};
app.use(loggerMiddleware);
app.use(visitCounterMiddleware);
app.get('/', (req, res) => {
    res.send(`<h1>Welcome!</h1><p>You are visitor number <strong>${visitCount}</strong></p>`);
});
app.get('/about', (req, res) => {
    res.send(`<h1>About Page</h1><p>Total visitors: <strong>${visitCount}</strong></p>`);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
