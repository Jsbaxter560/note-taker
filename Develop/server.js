const express = require("express"); //establish dependency on express
const http = require('http'); // establishing dependency on http
const PORT = 8080; // define port for listening to requests
const app = express(); // call on espress to function
const fs = require('fs');

const handleRequest = (req, res) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
    });
};

// Utilize Node http package to create server
// Give the handleRequest function to make it go...
const serer = http.createServer(handleRequest);

// Start server to begin listening to client requests
server.listen(PORT, () => {
    // Log (server-side) once server starts
    console.log(`Server Listening on: http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })