import React from 'react';

// Define the props for our component
interface CustomButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

export default function CustomButton({
  className = '',
  text = 'Click Me',
  onClick,
  variant = 'primary'
}: CustomButtonProps) {
  
  // Define styles based on variant
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'secondary':
        return 'bg-gray-200 hover:bg-gray-300 text-gray-800';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded font-medium transition-colors ${getStyles()} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
} 