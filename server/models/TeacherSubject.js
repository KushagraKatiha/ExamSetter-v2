const mongoose = require('mongoose');

const teacherSubjectSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Compound index to ensure unique teacher-subject mapping
teacherSubjectSchema.index({ teacherId: 1, subjectId: 1 }, { unique: true });

const TeacherSubject = mongoose.model('TeacherSubject', teacherSubjectSchema);

module.exports = TeacherSubject; 