// Require in express from its Node Module
// express is a funciton, but you wouldn't
// know that by looking at it


const express = require('express');

// This gives us back an express app - it's an object
const app = express();

// Tell express where to look for files when getting a
// request from someone's browser
app.use(express.static('server/public'));


// Start listening for requests
const port = 5000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
