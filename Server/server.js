const authRoutes = require('./routes/auth');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
console.log(process.env.MONGO_URI)
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
