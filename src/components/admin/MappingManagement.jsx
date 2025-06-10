import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MappingManagement() {
  const [mappings, setMappings] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    teacherId: '',
    subjectId: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [mappingsRes, teachersRes, subjectsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/admin/mappings'),
        axios.get('http://localhost:5000/api/admin/teachers'),
        axios.get('http://localhost:5000/api/admin/subjects')
      ]);
      setMappings(mappingsRes.data);
      setTeachers(teachersRes.data);
      setSubjects(subjectsRes.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch data');
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
      if (!formData.teacherId || !formData.subjectId) {
        throw new Error('Please select both teacher and subject');
      }

      await axios.post('http://localhost:5000/api/admin/mappings', formData);
      setSuccess('Mapping created successfully');
      setFormData({ teacherId: '', subjectId: '' });
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to create mapping');
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

  const handleDelete = async (mappingId) => {
    if (!window.confirm('Are you sure you want to remove this mapping?')) {
      return;
    }

    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/api/admin/mappings/${mappingId}`);
      setSuccess('Mapping removed successfully');
      fetchData();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to remove mapping');
    } finally {
      setLoading(false);
    }
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
        <h2 className="text-xl font-semibold text-white mb-4">Create New Mapping</h2>
        
        <div>
          <label htmlFor="teacherId" className="block text-sm font-medium text-gray-300 mb-1">
            Teacher
          </label>
          <select
            id="teacherId"
            name="teacherId"
            value={formData.teacherId}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a teacher</option>
            {teachers.map(teacher => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.name} ({teacher.email})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="subjectId" className="block text-sm font-medium text-gray-300 mb-1">
            Subject
          </label>
          <select
            id="subjectId"
            name="subjectId"
            value={formData.subjectId}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a subject</option>
            {subjects.map(subject => (
              <option key={subject._id} value={subject._id}>
                {subject.name} ({subject.code})
              </option>
            ))}
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
          {loading ? 'Creating...' : 'Create Mapping'}
        </button>
      </form>

      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Current Mappings</h2>
        {loading ? (
          <p className="text-gray-300">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-600">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Teacher</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {mappings.map((mapping) => (
                  <tr key={mapping._id} className="hover:bg-gray-600">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {mapping.teacher.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {mapping.subject.name} ({mapping.subject.code})
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <button
                        onClick={() => handleDelete(mapping._id)}
                        className="text-red-400 hover:text-red-300 transition-colors duration-200"
                      >
                        Remove
                      </button>
                    </td>
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

export default MappingManagement; 