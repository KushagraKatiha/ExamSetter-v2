import React, { forwardRef } from 'react';

function Select({ options, labelStyle, optionStyle, label, onChange, value, disabled }, ref) {
  return (
    <div className="mb-4">
      <label className={`font-bold text-sm text-gray-300 ${labelStyle}`}>{label}</label>
      <select
        ref={ref}
        className={`w-full border-2 border-gray-600 h-10 focus:outline-none px-2 bg-gray-800 text-white rounded-lg transition duration-300 ease-in-out`}
        onChange={onChange}
        value={value}
        disabled={disabled}
      >
        {options.map(option => (
          <option key={option.value} className={`bg-gray-800 text-white ${optionStyle}`} value={option.value}>
            {option.fullName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
