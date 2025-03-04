// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Create a route with a parameter
app.get('/comments/:id', (req, res) => {
    res.send(`Comment ID: ${req.params.id}`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Test the server
// Open a web browser and go to http://localhost:3000/comments/123
// You should see "Comment ID: 123" on the page

// Test the server using curl
// Open a terminal and run the following command
// curl http://localhost:3000/comments/123
// You should see "Comment ID: 123" in the terminal

// Test the server using Postman
// Open Postman
// Create a