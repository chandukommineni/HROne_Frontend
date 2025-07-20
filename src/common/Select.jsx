import React from 'react';

const Select = ({ value, onChange, children, className = '', error }) => (
  <div className="w-full">
    <select
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500 bg-white ${
        error ? 'border-red-300' : 'border-gray-300'
      } ${className}`}
    >
      <option value="">Select type</option>
      {children}
    </select>
    {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
  </div>
);

export default Select;