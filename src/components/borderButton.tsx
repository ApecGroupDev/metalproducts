'use client';

import React from 'react';

interface BorderButtonProps {
  label: string;
  subLabel?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const BorderButton: React.FC<BorderButtonProps> = ({
  label,
  subLabel = '',
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative font-semibold rounded-lg w-60 h-16 border-4 border-white bg-[#ec1c24] text-black flex items-center justify-center ${className}`}
    >
      <span className="absolute inset-0 border-2 border-[#ec1c24] rounded-md -m-1"></span>
      <span className="relative z-10 px-8 text-white">
        {subLabel || label}
      </span>
    </button>
  );
};

export default BorderButton;
