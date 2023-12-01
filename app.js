// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const booksRouter = require('./routes/books');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/books', booksRouter);

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
