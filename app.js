
// Import the Express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a port number
const PORT = 5000;

// Define a simple API route to respond with "Connection Established"
app.get('/api/connection', (req, res) => {
    res.send('Connection Established');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
