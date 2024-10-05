// Importing the express framework to build the web server
const express = require("express");

// Initializing the express application
const app = express();

// Loading environment variables from the .env file using the dotenv package
require("dotenv").config();

// Importing the CORS package to allow Cross-Origin Resource Sharing
const cors = require("cors");

// Retrieving the port number from environment variables
const port = process.env.PORT;

// Starting the server on the specified port and logging a message when it's running
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`);
});

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Middleware to parse URL-encoded data with extended option set to true for rich data parsing
app.use(express.urlencoded({ extended: true }));

// Enabling CORS to allow requests from different origins
app.use(cors());

// A GET route to respond with a simple HTML message when visiting the root URL
app.get("/", (req, res) => {
    res.send("<h1>MPesa Daraja Integration</h1>");
});
