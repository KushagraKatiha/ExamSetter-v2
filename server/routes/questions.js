const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
// const Question = require('../models/Question');

// Get all questions
router.get('/', auth, async (req, res) => {
  try {
    const questions = await Question.find()
      .populate('subjectId', 'name code')
      .sort({ createdAt: -1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error: error.message });
  }
});

// Get question by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
      .populate('subjectId', 'name code');
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching question', error: error.message });
  }
});

// Create new question
router.post('/', auth, async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ message: 'Question created successfully', question });
  } catch (error) {
    res.status(400).json({ message: 'Error creating question', error: error.message });
  }
});

// Update question
router.put('/:id', auth, async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json({ message: 'Question updated successfully', question });
  } catch (error) {
    res.status(400).json({ message: 'Error updating question', error: error.message });
  }
});

// Delete question
router.delete('/:id', auth, async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question', error: error.message });
  }
});

module.exports = router; 