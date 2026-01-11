import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', placeholder, value, onChange, ...props }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;

