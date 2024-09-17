import React from 'react';

function Button({ label, className, ...props }) {
  return (
    <button
      className={`px-6 py-2 font-bold bg-black border-2 border-[#000000] text-white rounded-full focus:outline-none transition transform ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
