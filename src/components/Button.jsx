import React from 'react';

function Button({ label, className, ...props }) {
  return (
    <button
      className={`px-6 py-2 font-bold bg-gray-800 border-2 border-gray-600 text-white rounded-full focus:outline-none hover:bg-gray-700 transition transform duration-300 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
