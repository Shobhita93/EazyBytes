require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log("MongoDB connected");
    
    const hashedPassword = bcrypt.hashSync('admin123', 10);
    
    const admin = new Admin({
        username: 'admin',
        password: hashedPassword
    });

    try {
        await admin.save();
        console.log('Admin user created successfully!');
        console.log('Username: admin');
        console.log('Password: admin123');
    } catch (err) {
        console.error('Error creating admin:', err);
    }
    
    mongoose.connection.close();
})
.catch(err => console.log("MongoDB error:", err));
