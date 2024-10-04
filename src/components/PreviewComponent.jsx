import React, { useState } from 'react';
import TestPaper from './TestPaper'; // Assuming this is your TestPaper component
import { FaExpand, FaCompress } from 'react-icons/fa'; // Icons for maximize and minimize

function PreviewComponent() {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div className="m-4 rounded-lg shadow-lg border border-gray-700 bg-gray-800">
      {/* Title and Toggle Button */}
      <div className="flex justify-between items-center bg-black text-white p-4 rounded-t-lg">
        <h1 className="text-lg font-semibold text-center">Preview</h1>
       
      </div>

      {/* Preview Content */}
      <div className="p-4 bg-gray-900 text-white">
        <TestPaper />
      </div>
    </div>
  );
}

export default PreviewComponent;
