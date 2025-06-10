const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    const teacher = await Teacher.findOne({
      _id:decoded.id});

    if (!teacher) {
      return res.status(401).json({ message: 'User not found or inactive' });
    }

    req.teacher = teacher;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate the user', error: error.message });
  }
};

module.exports = auth; 