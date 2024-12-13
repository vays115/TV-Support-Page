import React from 'react';
import './ButtonGroup.css';

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className = '' }) => {
  return (
    <div className={`button-group ${className}`}>
      {children}
    </div>
  );
};

export default ButtonGroup;