const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
// const Paper = require('../models/Paper');

// Get all papers
router.get('/', auth, async (req, res) => {
  try {
    const papers = await Paper.find()
      .populate('subjectId', 'name code')
      .sort({ createdAt: -1 });
    res.json(papers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching papers', error: error.message });
  }
});

// Get paper by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id)
      .populate('subjectId', 'name code')
      .populate('questions.questionId');
    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' });
    }
    res.json(paper);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching paper', error: error.message });
  }
});

// Create new paper
router.post('/', auth, async (req, res) => {
  try {
    const paper = new Paper(req.body);
    await paper.save();
    res.status(201).json({ message: 'Paper created successfully', paper });
  } catch (error) {
    res.status(400).json({ message: 'Error creating paper', error: error.message });
  }
});

// Update paper
router.put('/:id', auth, async (req, res) => {
  try {
    const paper = await Paper.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' });
    }
    res.json({ message: 'Paper updated successfully', paper });
  } catch (error) {
    res.status(400).json({ message: 'Error updating paper', error: error.message });
  }
});

// Delete paper
router.delete('/:id', auth, async (req, res) => {
  try {
    const paper = await Paper.findByIdAndDelete(req.params.id);
    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' });
    }
    res.json({ message: 'Paper deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting paper', error: error.message });
  }
});

module.exports = router; 