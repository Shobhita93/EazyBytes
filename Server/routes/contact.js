const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to send message.' });
  }
});

module.exports = router;
