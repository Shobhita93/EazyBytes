const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/authMiddleware');

// GET All Projects (public)
router.get('/', async (req, res) => {
  try{
  const projects = await Project.find();
  res.json(projects);
  } catch(err){
  res.status(500).json({ error: 'Server error' });
  }
});

// POST New Project (admin only)
router.post('/', auth, async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
});

// DELETE a Project (admin only)
router.delete('/:id', auth, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Project deleted' });
});

module.exports = router;
