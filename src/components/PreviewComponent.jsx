import React, { useState } from 'react';
import TestPaper from './TestPaper'; // Assuming this is your TestPaper component
import { FaExpand, FaCompress } from 'react-icons/fa'; // Icons for maximize and minimize
import { adminAPI, subjectAPI, mappingAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';


function PreviewComponent() {
  const navigate = useNavigate();
  const [isMaximized, setIsMaximized] = useState(false);
  const [error, setError] = useState('');

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };


  const handleLogout = async () => {
    try {
      console.log("Api clicked !!")
      await adminAPI.logout();
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Failed to logout');
    }
  };
  return (
    <div className="m-4 rounded-lg shadow-lg border border-gray-700 bg-gray-800">
      {/* Title and Toggle Button */}
      <div className="flex justify-between items-center bg-black text-white p-4 rounded-t-lg">
        <h1 className="text-lg font-semibold text-center">Preview</h1>
        <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
      </div>

      {/* Preview Content */}
      <div className="p-4 bg-gray-900 text-white">
        <TestPaper />
      </div>
    </div>
  );
}

export default PreviewComponent;
