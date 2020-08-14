const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // This allows the request to continue to the next middleware
});
app.use((req, res, next) => {
    console.log('In another middleware!');
   res.send('<h1> Hello from Express</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);

//Using express.js above two lines of code can be condensed into just
app.listen(3000);