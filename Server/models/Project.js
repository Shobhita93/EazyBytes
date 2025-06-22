const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const Admin = require("../models/Admin");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin || !bcrypt.compareSync(password, admin.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;