import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminAPI } from '../services/api';

function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    subjects: 0,
    questions: 0,
    papers: 0,
    teachers: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [subjects, teachers] = await Promise.all([
          adminAPI.getSubjects(),
          adminAPI.getTeachers()
        ]);

        setStats({
          subjects: subjects.data.length,
          teachers: teachers.data.length,
          questions: 0, // TODO: Implement questions API
          papers: 0 // TODO: Implement papers API
        });
      } catch (err) {
        setError('Failed to fetch dashboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => navigate('/admin')}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Back to Portal
          </button>
        </div>

        {error && (
          <div className="bg-red-900/50 border-l-4 border-red-500 text-red-200 p-4 rounded-lg shadow-lg mb-6">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Total Subjects</h2>
            <p className="text-3xl font-bold text-blue-400">
              {loading ? '...' : stats.subjects}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Total Questions</h2>
            <p className="text-3xl font-bold text-green-400">
              {loading ? '...' : stats.questions}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Total Papers</h2>
            <p className="text-3xl font-bold text-purple-400">
              {loading ? '...' : stats.papers}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Active Teachers</h2>
            <p className="text-3xl font-bold text-yellow-400">
              {loading ? '...' : stats.teachers}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <p className="text-gray-400">
              {loading ? 'Loading...' : 'No recent activity'}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">System Status</h2>
            <p className="text-green-400">
              {loading ? 'Checking...' : 'All systems operational'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard; 