const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Teacher = require('../models/Teacher');
const Subject = require('../models/Subject');
const TeacherSubject = require('../models/TeacherSubject');

const loginFaculty = async (req, res) => {
  try {
    const {employeeCode, password } = req.body;

    if (!employeeCode || !password) {
      return res.status(400).json({ message: "Both employee code and password are required" });
    }

    const faculty = await Teacher.findOne({ employeeCode });
    if (!faculty) {
      return res.status(400).json({ message: "Invalid employee code" });
    }
    console.log(faculty);
    
    
    if (!faculty.password) {
       console.log(faculty.password);
      return res.status(500).json({ message: "This faculty account has no password set" });
    }

      const isMatch = await bcrypt.compare(password, faculty.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ facultyId: faculty._id }, "exam", { expiresIn: "1d" });

    res.json({ message: "Login successful",token, faculty });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addFaculty = async (req, res) => {
  try {
    const { name, employeeCode, password } = req.body;

     if (!name || !employeeCode || !password) {
      return res.status(400).json({ message: "Name, employee code, and password are required" });
    }

    const existing = await Teacher.findOne({ employeeCode });
    if (existing) {
      return res.status(400).json({ message: "Faculty already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const faculty = new Teacher({
      name,
      employeeCode,
      password: hashedPassword,
    });
    // const faculty = new Faculty({ name, employeeCode, password });
    await faculty.save();
    res.status(201).json({ message: "Faculty added successfully", faculty });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    await Teacher.findByIdAndDelete(id);
    res.json({ message: "Faculty deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllFaculties = async (req, res) => {
  try {
    const faculties = await Teacher.find();
    res.json(faculties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json({ message: 'Subject created successfully', subject });
  } catch (error) {
    res.status(400).json({ message: 'Error creating subject', error: error.message });
  }
};

const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if subject is mapped to any teachers
    const hasMappings = await TeacherSubject.exists({ subject: id });
    if (hasMappings) {
      return res.status(400).json({ 
        message: 'Cannot delete subject as it is mapped to one or more teachers' 
      });
    }

    await Subject.findByIdAndDelete(id);
    res.json({ message: "Subject deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subjects', error: error.message });
  }
};

const assignFacultyToSubject = async (req, res) => {
  try {
    const { subjectId, teacherId } = req.body;

    const teacher = await Teacher.findById(teacherId);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });

    await Subject.findByIdAndUpdate(subjectId, { teacherId });
    res.json({ message: "Teacher assigned to subject successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Teacher Management
const addTeacher = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const teacher = new Teacher({
      name,
      email,
      password: hashedPassword,
      role: role || 'teacher'
    });

    await teacher.save();
    res.status(201).json({ message: 'Teacher added successfully', teacher });
  } catch (error) {
    res.status(500).json({ message: 'Error adding teacher', error: error.message });
  }
};

const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({}, '-password');
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
};

// Teacher-Subject Mapping
const mapTeacherToSubject = async (req, res) => {
  try {
    const { teacherId, subjectId } = req.body;
    
    // Check if mapping already exists
    const existingMapping = await TeacherSubject.findOne({ teacherId, subjectId });
    if (existingMapping) {
      return res.status(400).json({ message: 'Mapping already exists' });
    }

    const mapping = new TeacherSubject({ teacherId, subjectId });
    await mapping.save();
    res.status(201).json({ message: 'Mapping created successfully', mapping });
  } catch (error) {
    res.status(400).json({ message: 'Error creating mapping', error: error.message });
  }
};

const getTeacherSubjects = async (req, res) => {
  try {
    const { teacherId } = req.query;
    const query = teacherId ? { teacherId } : {};
    
    const mappings = await TeacherSubject.find(query)
      .populate('teacherId', 'name email')
      .populate('subjectId', 'name code');
    
    res.json(mappings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mappings', error: error.message });
  }
};

const removeTeacherSubjectMapping = async (req, res) => {
  try {
    const mapping = await TeacherSubject.findByIdAndDelete(req.params.mappingId);
    if (!mapping) {
      return res.status(404).json({ message: 'Mapping not found' });
    }
    res.json({ message: 'Mapping removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing mapping', error: error.message });
  }
};

module.exports = {
  loginFaculty,
  addFaculty,
  deleteFaculty,
  getAllFaculties,
  addSubject,
  deleteSubject,
  getSubjects,
  assignFacultyToSubject,
  addTeacher,
  getTeachers,
  mapTeacherToSubject,
  getTeacherSubjects,
  removeTeacherSubjectMapping
};
