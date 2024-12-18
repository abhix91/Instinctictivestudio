const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require('./routes/studentRoute');


require("dotenv").config(); // Load .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.get('/test', (req, res) => {
    res.send('Test route is working');
  });
  

// Routes
app.use('/students', studentRoutes);

// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
