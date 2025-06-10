import React, { useState, useEffect } from 'react';
import { adminAPI, subjectAPI, mappingAPI } from '../services/api';
import { semesterList, courses } from '../components/constants';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  // State for subjects
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState({
    name: '',
    code: '',
    semester: '-',
    programName: '-',
    otherProgram: ''
  });

  // State for teachers
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    password: '',
    role: 'teacher'
  });

  // State for mappings
  const [mappings, setMappings] = useState([]);
  const [newMapping, setNewMapping] = useState({
    teacherId: '',
    subjectId: ''
  });

  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch initial data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [subjectsData, teachersData, mappingsData] = await Promise.all([
        subjectAPI.getSubjects(),
        adminAPI.getTeachers(),
        mappingAPI.getMappings()
      ]);
      setSubjects(subjectsData);
      setTeachers(teachersData);
      setMappings(mappingsData);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  // Subject handlers
  const handleAddSubject = async (e) => {
    e.preventDefault();
    try {
      const response = await subjectAPI.createSubject(newSubject);
      setSubjects([...subjects, response]);
      setNewSubject({
        name: '',
        code: '',
        semester: '-',
        programName: '-',
        otherProgram: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to add subject');
    }
  };

  const handleDeleteSubject = async (subjectId) => {
    try {
      await subjectAPI.deleteSubject(subjectId);
      setSubjects(subjects.filter(s => s._id !== subjectId));
    } catch (err) {
      setError(err.message || 'Failed to delete subject');
    }
  };

  // Teacher handlers
  const handleAddTeacher = async (e) => {
    e.preventDefault();
    try {
      const response = await adminAPI.createTeacher(newTeacher);
      setTeachers([...teachers, response]);
      setNewTeacher({
        name: '',
        email: '',
        password: '',
        role: 'teacher'
      });
    } catch (err) {
      setError(err.message || 'Failed to add teacher');
    }
  };

  const handleDeleteTeacher = async (teacherId) => {
    try {
      await adminAPI.deleteTeacher(teacherId);
      setTeachers(teachers.filter(t => t._id !== teacherId));
    } catch (err) {
      setError(err.message || 'Failed to delete teacher');
    }
  };

  // Mapping handlers
  const handleAddMapping = async (e) => {
    e.preventDefault();
    try {
      const response = await mappingAPI.createMapping(newMapping);
      setMappings([...mappings, response]);
      setNewMapping({
        teacherId: '',
        subjectId: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to add mapping');
    }
  };

  const handleDeleteMapping = async (mappingId) => {
    try {
      await mappingAPI.deleteMapping(mappingId);
      setMappings(mappings.filter(m => m._id !== mappingId));
    } catch (err) {
      setError(err.message || 'Failed to delete mapping');
    }
  };

  // const handleDone = () => {
  //   navigate('/');
  // };

  const handleLogout = async () => {
    try {
      console.log("Api clicked !!")
      await adminAPI.logout();
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Failed to logout');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4">
          {/* <button
            onClick={handleDone}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Done
          </button> */}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-900 border border-red-400 text-red-200 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Subjects Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Subjects</h2>
        <form onSubmit={handleAddSubject} className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Subject Name"
            value={newSubject.name}
            onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Subject Code"
            value={newSubject.code}
            onChange={(e) => setNewSubject({ ...newSubject, code: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <select
            value={newSubject.semester}
            onChange={(e) => setNewSubject({ ...newSubject, semester: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          >
            {semesterList.map((sem) => (
              <option key={sem.value} value={sem.value}>
                {sem.fullName}
              </option>
            ))}
          </select>
          <select
            value={newSubject.programName}
            onChange={(e) => setNewSubject({ ...newSubject, programName: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          >
            {courses.map((course) => (
              <option key={course.value} value={course.value}>
                {course.fullName}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Other Program (optional)"
            value={newSubject.otherProgram}
            onChange={(e) => setNewSubject({ ...newSubject, otherProgram: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
            Add Subject
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <div key={subject._id} className="border border-gray-600 bg-gray-800 p-4 rounded">
              <h3 className="font-semibold">{subject.name}</h3>
              <p>Code: {subject.code}</p>
              <p>Semester: {subject.semester}</p>
              <p>Program: {subject.programName}</p>
              {subject.otherProgram && <p>Other Program: {subject.otherProgram}</p>}
              <button
                onClick={() => handleDeleteSubject(subject._id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
        <form onSubmit={handleAddTeacher} className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Teacher Name"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={newTeacher.password}
            onChange={(e) => setNewTeacher({ ...newTeacher, password: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <select
            value={newTeacher.role}
            onChange={(e) => setNewTeacher({ ...newTeacher, role: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
            Add Teacher
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teachers.map((teacher) => (
            <div key={teacher._id} className="border border-gray-600 bg-gray-800 p-4 rounded">
              <h3 className="font-semibold">{teacher.name}</h3>
              <p>Email: {teacher.email}</p>
              <p>Role: {teacher?.role?.charAt(0).toUpperCase() + teacher?.role?.slice(1)}</p>
              <button
                onClick={() => handleDeleteTeacher(teacher._id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Mappings Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Teacher-Subject Mappings</h2>
        <form onSubmit={handleAddMapping} className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <select
            value={newMapping.teacherId}
            onChange={(e) => setNewMapping({ ...newMapping, teacherId: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.name}
              </option>
            ))}
          </select>
          <select
            value={newMapping.subjectId}
            onChange={(e) => setNewMapping({ ...newMapping, subjectId: e.target.value })}
            className="border border-gray-600 bg-gray-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject._id} value={subject._id}>
                {subject.name} ({subject.code})
              </option>
            ))}
          </select>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
            Add Mapping
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mappings.map((mapping) => {
            const teacher = teachers.find(t => t._id === mapping.teacherId?._id);
            const subject = subjects.find(s => s._id === mapping.subjectId?._id);
            return (
              <div key={mapping._id} className="border border-gray-600 bg-gray-800 p-4 rounded">
                <h3 className="font-semibold">{teacher?.name || 'Unknown Teacher'}</h3>
                <p>Subject: {subject?.name || 'Unknown Subject'} ({subject?.code || 'N/A'})</p>
                <p className="text-sm text-gray-400">Created: {new Date(mapping.createdAt).toLocaleDateString()}</p>
                <button
                  onClick={() => handleDeleteMapping(mapping._id)}
                  className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                >
                  Remove Mapping
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;