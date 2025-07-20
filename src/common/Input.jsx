import React from 'react';

const Input = ({ value, onChange, placeholder, className = '', error }) => (
  <div className="w-full">
    <input
      type="text"
      value={value || ''}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500 ${
        error ? 'border-red-300' : 'border-gray-300'
      } ${className}`}
    />
    {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
  </div>
);

export default Input;