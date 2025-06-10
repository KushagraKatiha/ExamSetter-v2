import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { courses, semesterList } from '../constants';

function SubjectManagement() {
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    semester: '',
    programName: '',
    otherProgram: '',
    description: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/admin/subjects');
      setSubjects(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch subjects');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.code.trim() || !formData.semester || !formData.programName) {
        throw new Error('Name, code, semester, and program are required');
      }

      if (formData.code.length < 3) {
        throw new Error('Subject code must be at least 3 characters long');
      }

      if (formData.programName === 'Other' && !formData.otherProgram.trim()) {
        throw new Error('Please specify the other program name');
      }

      await axios.post('http://localhost:5000/api/admin/subjects', formData);
      setSuccess('Subject added successfully');
      setFormData({
        name: '',
        code: '',
        semester: '',
        programName: '',
        otherProgram: '',
        description: ''
      });
      fetchSubjects();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to add subject');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-900/50 border-l-4 border-red-500 text-red-200 p-4 rounded-lg shadow-lg">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}
      
      {success && (
        <div className="bg-green-900/50 border-l-4 border-green-500 text-green-200 p-4 rounded-lg shadow-lg">
          <p className="font-bold">Success</p>
          <p>{success}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Add New Subject</h2>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Subject Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter subject name"
          />
        </div>

        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-1">
            Subject Code
          </label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter subject code"
          />
        </div>

        <div>
          <label htmlFor="semester" className="block text-sm font-medium text-gray-300 mb-1">
            Semester
          </label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select semester</option>
            {semesterList.map(sem => (
              <option key={sem.value} value={sem.value}>
                {sem.fullName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="programName" className="block text-sm font-medium text-gray-300 mb-1">
            Program
          </label>
          <select
            id="programName"
            name="programName"
            value={formData.programName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select program</option>
            {courses.map(course => (
              <option key={course.value} value={course.value}>
                {course.fullName}
              </option>
            ))}
          </select>
        </div>

        {formData.programName === 'Other' && (
          <div>
            <label htmlFor="otherProgram" className="block text-sm font-medium text-gray-300 mb-1">
              Other Program Name
            </label>
            <input
              type="text"
              id="otherProgram"
              name="otherProgram"
              value={formData.otherProgram}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter program name"
            />
          </div>
        )}

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter subject description"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
            loading 
              ? 'bg-blue-700 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors duration-200`}
        >
          {loading ? 'Adding...' : 'Add Subject'}
        </button>
      </form>

      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Subjects List</h2>
        {loading ? (
          <p className="text-gray-300">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-600">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Code</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Program</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Semester</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {subjects.map((subject) => (
                  <tr key={subject._id} className="hover:bg-gray-600">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{subject.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{subject.code}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {subject.programName === 'Other' ? subject.otherProgram : 
                        courses.find(c => c.value === subject.programName)?.fullName || subject.programName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {semesterList.find(s => s.value === subject.semester)?.fullName || subject.semester}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{subject.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubjectManagement; 