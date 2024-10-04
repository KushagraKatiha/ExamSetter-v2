import React, { forwardRef } from 'react';

function Input({ label, labelStyle, type, className, placeholder, value, onChange, disabled, ...props }, ref) {
  return (
    <div className="mb-4">
      {label && <label className={`${labelStyle} font-bold text-sm text-gray-300`}>{label}</label>}
      <input
        ref={ref}
        className={`border-2 w-full h-10 focus:outline-none px-3 bg-gray-800 text-white rounded-lg border-gray-600 placeholder-gray-500 transition duration-300 ease-in-out ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

export default forwardRef(Input);
