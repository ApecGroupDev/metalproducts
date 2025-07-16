'use client';

import React from 'react';

interface BorderButtonProps {
  label: string;
  subLabel?: string;
  description?: string; // New prop for the description
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const BorderButtonWithDesc: React.FC<BorderButtonProps> = ({
  label,
  subLabel = '',
  description = '', // Default empty string
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <div className={`flex flex-col items-center space-y-2 mt-4 ${className}`}>
      <button
        type={type}
        onClick={onClick}
        className="relative font-semibold rounded-lg w-60 h-16 border-4 border-white bg-[#ec1c24] text-black flex items-center justify-center"
      >
        <span className="absolute inset-0 border-2 border-[#ec1c24] rounded-md -m-1"></span>
        <span className="relative z-10 px-8 text-white">
          {subLabel || label}
        </span>
      </button>

      {description && (
        <p className="text-base text-gray-800 text-center max-w-60 max-h-12 overflow-auto thin-scrollbar">{description}</p>
      )}

      <hr className="w-60 border-t border-gray-800" />
    </div>
  );
};

export default BorderButtonWithDesc;
