const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Verify route
router.get('/verify', async (req, res) => {
  try {
    // Get token from cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    // Find user in database
    const user = await Teacher.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Return user data
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    
    // Find teacher by email
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log(teacher);

    // Check password
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: teacher._id, role: teacher.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    // Set cookie with token
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    });

    // Set user data cookie
    const userResponse = {
      id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      role: teacher.role
    };

    res.cookie('user', JSON.stringify(userResponse), {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    });

    res.json({
      message: 'Login successful',
      user: userResponse
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Register route (only for admin)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new teacher
    const teacher = new Teacher({
      name,
      email,
      password: hashedPassword,
      role: role || 'teacher'
    });

    await teacher.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: teacher._id, role: teacher.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    // Set cookie with token
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    });

    // Set user data cookie
    const userResponse = {
      id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      role: teacher.role
    };

    res.cookie('user', JSON.stringify(userResponse), {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    });

    res.status(201).json({
      message: 'Registration successful',
      user: userResponse
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('user');
  res.json({ message: 'Logged out successfully' });
});

module.exports = router; 