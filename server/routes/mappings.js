const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
// const Mapping = require('../models/Mapping');

// Get all mappings
router.get('/', auth, async (req, res) => {
  try {
    const mappings = await Mapping.find()
      .populate('teacherId', 'name email')
      .populate('subjectId', 'name code')
      .sort({ createdAt: -1 });
    res.json(mappings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mappings', error: error.message });
  }
});

// Get mapping by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const mapping = await Mapping.findById(req.params.id)
      .populate('teacherId', 'name email')
      .populate('subjectId', 'name code');
    if (!mapping) {
      return res.status(404).json({ message: 'Mapping not found' });
    }
    res.json(mapping);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mapping', error: error.message });
  }
});

// Create new mapping
router.post('/', auth, async (req, res) => {
  try {
    const { teacherId, subjectId } = req.body;
    
    // Check if mapping already exists
    const existingMapping = await Mapping.findOne({ teacherId, subjectId });
    if (existingMapping) {
      return res.status(400).json({ message: 'This teacher is already mapped to this subject' });
    }

    const mapping = new Mapping({
      teacherId,
      subjectId
    });

    await mapping.save();
    res.status(201).json({ message: 'Mapping created successfully', mapping });
  } catch (error) {
    res.status(400).json({ message: 'Error creating mapping', error: error.message });
  }
});

// Delete mapping
router.delete('/:id', auth, async (req, res) => {
  try {
    const mapping = await Mapping.findByIdAndDelete(req.params.id);
    if (!mapping) {
      return res.status(404).json({ message: 'Mapping not found' });
    }
    res.json({ message: 'Mapping deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting mapping', error: error.message });
  }
});

module.exports = router; 