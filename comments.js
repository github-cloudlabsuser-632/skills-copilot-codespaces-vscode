// Create web server
// Create a new Express web server
const express = require('express');
const app = express();

// Allow the server to parse JSON from the request body
app.use(express.json());

// Array of comments
const comments = [];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);

    res.status(201).json(comment);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server with node comments.js
// Test the server with curl or Postman
// curl -X POST -H "Content-Type: application/json" -d '{"username": "alice", "content": "first post"}' http://localhost:3000/comments