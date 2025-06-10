const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    trim: true
  },
  semester: {
    type: String,
    required: true
  },
  programName: {
    type: String,
    required: true
  },
  otherProgram: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Compound index to ensure unique subject code per program and semester
subjectSchema.index({ programName: 1, semester: 1, code: 1 }, { unique: true });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject; 