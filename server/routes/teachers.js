const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Teacher = require('../models/Teacher');

// Get all teachers
router.get('/', auth, async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ name: 1 });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
});

// Get teacher by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teacher', error: error.message });
  }
});

// Create new teacher
router.post('/', auth, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher with this email already exists' });
    }

    const teacher = new Teacher({
      name,
      email,
      password,
      role: role || 'teacher'
    });

    await teacher.save();
    res.status(201).json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    res.status(400).json({ message: 'Error creating teacher', error: error.message });
  }
});

// Update teacher
router.put('/:id', auth, async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json({ message: 'Teacher updated successfully', teacher });
  } catch (error) {
    res.status(400).json({ message: 'Error updating teacher', error: error.message });
  }
});

// Delete teacher
router.delete('/:id', auth, async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting teacher', error: error.message });
  }
});

module.exports = router; 