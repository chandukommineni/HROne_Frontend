import React from 'react';

const Button = ({ onClick, children, variant = 'primary', className = '', type = 'button' }) => {
  const baseClasses = 'px-4 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;