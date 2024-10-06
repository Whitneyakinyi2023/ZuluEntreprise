const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import the auth route

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To handle JSON payloads

// MongoDB connection
const mongoURI = 'YOUR_MONGODB_URI'; // Replace with your MongoDB URI (from Atlas or local)
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use the routes
app.use('/api', authRoutes);

// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
