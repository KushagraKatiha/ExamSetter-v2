const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Subject = require('../models/Subject');

// Get all subjects
router.get('/', auth, async (req, res) => {
  try {
    const subjects = await Subject.find().sort({ programName: 1, semester: 1, code: 1 });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subjects', error: error.message });
  }
});

// Get subject by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.json(subject);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subject', error: error.message });
  }
});

// Create new subject
router.post('/', auth, async (req, res) => {
  try {
    const { name, code, semester, programName, otherProgram, description } = req.body;
    
    // Check if subject already exists
    const existingSubject = await Subject.findOne({ 
      programName, 
      semester, 
      code 
    });
    
    if (existingSubject) {
      return res.status(400).json({ 
        message: 'Subject with this code already exists in the selected program and semester' 
      });
    }

    const subject = new Subject({
      name,
      code,
      semester,
      programName,
      otherProgram: programName === 'Other' ? otherProgram : undefined,
      description
    });

    await subject.save();
    res.status(201).json({ message: 'Subject created successfully', subject });
  } catch (error) {
    res.status(400).json({ message: 'Error creating subject', error: error.message });
  }
});

// Update subject
router.put('/:id', auth, async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.json({ message: 'Subject updated successfully', subject });
  } catch (error) {
    res.status(400).json({ message: 'Error updating subject', error: error.message });
  }
});

// Delete subject
router.delete('/:id', auth, async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.json({ message: 'Subject deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting subject', error: error.message });
  }
});

module.exports = router; 