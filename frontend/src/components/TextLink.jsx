import React from 'react';
import { Link } from 'react-router-dom';
import './TextLink.css';

const TextLink = ({ to, children, onClick, ...props }) => {
  if (onClick) {
    return (
      <a href="#" className="text-link" onClick={(e) => { e.preventDefault(); onClick(); }} {...props}>
        {children}
      </a>
    );
  }
  
  if (!to) {
    return <span className="text-link">{children}</span>;
  }
  
  return (
    <Link to={to} className="text-link" {...props}>
      {children}
    </Link>
  );
};

export default TextLink;

