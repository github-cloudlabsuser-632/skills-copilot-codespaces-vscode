//Create a Web Server
const express = require('express');
const app = express();
const port = 3000;

//Create a route
app.get('/', (req, res) => {
  res.send('Welcome to the Jungle!');
});

app.get('/comments', (req, res) => {
  res.send('Comments will be here!');
});

//Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});