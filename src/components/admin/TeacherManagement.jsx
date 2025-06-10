import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeacherManagement() {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'teacher'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/admin/teachers');
      setTeachers(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch teachers');
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
      if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
        throw new Error('All fields are required');
      }

      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      if (formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      await axios.post('http://localhost:5000/api/admin/teachers', formData);
      setSuccess('Teacher added successfully');
      setFormData({ name: '', email: '', password: '', role: 'teacher' });
      fetchTeachers();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to add teacher');
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
        <h2 className="text-xl font-semibold text-white mb-4">Add New Teacher</h2>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter teacher's name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter teacher's email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter password"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
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
          {loading ? 'Adding...' : 'Add Teacher'}
        </button>
      </form>

      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Teachers List</h2>
        {loading ? (
          <p className="text-gray-300">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-600">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {teachers.map((teacher) => (
                  <tr key={teacher._id} className="hover:bg-gray-600">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{teacher.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{teacher.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{teacher.role}</td>
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

export default TeacherManagement; 