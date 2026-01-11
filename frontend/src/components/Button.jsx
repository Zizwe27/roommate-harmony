import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', type = 'button', onClick, ...props }) => {
  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

