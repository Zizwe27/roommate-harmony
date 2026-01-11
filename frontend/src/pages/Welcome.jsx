import React from 'react';
import { useNavigate } from 'react-router-dom';
import Illustration from '../components/Illustration';
import Button from '../components/Button';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <Illustration variant="welcome" />
        <h1 className="welcome-title">Roommate Harmony</h1>
        <p className="welcome-tagline">Find peace in shared living.</p>
        <div className="welcome-button-container">
          <Button onClick={() => navigate('/get-started')}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

