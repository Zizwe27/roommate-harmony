import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './GetStarted.css';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started-page">
      <div className="get-started-content">
        <h1 className="get-started-title">Join Harmony</h1>
        <div className="get-started-form">
          <input
            type="text"
            className="get-started-input"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="get-started-input"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="get-started-input"
            placeholder="Password"
          />
          <Button variant="secondary" onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
          <p className="get-started-terms">
            By joining, you agree to our{' '}
            <a href="#" className="get-started-link">Terms of Service</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

