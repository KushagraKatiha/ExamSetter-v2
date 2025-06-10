const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');
const auth = require('../middleware/auth');
const Teacher = require('../models/Teacher');

// Teacher routes
router.get('/teachers', auth, async (req, res) => {
  try {
    const teachers = await Teacher.find({}, '-password');
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
});

router.get('/teachers/:id', auth, async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id, '-password');
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teacher', error: error.message });
  }
});

router.post('/teachers', auth, async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    res.status(400).json({ message: 'Error creating teacher', error: error.message });
  }
});

router.put('/teachers/:id', auth, async (req, res) => {
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

router.delete('/teachers/:id', auth, async (req, res) => {
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

// Subject routes
router.post('/subjects', auth, adminController.addSubject);
router.get('/subjects', auth, adminController.getSubjects);

// Teacher-Subject mapping routes
router.post('/mappings', auth, adminController.mapTeacherToSubject);
router.get('/mappings', auth, adminController.getTeacherSubjects);
router.delete('/mappings/:mappingId', auth, adminController.removeTeacherSubjectMapping);

module.exports = router; 