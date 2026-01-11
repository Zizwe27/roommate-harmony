import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Illustration from '../components/Illustration';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import TextLink from '../components/TextLink';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <div className="forgot-password-left">
          <Illustration variant="login" />
          <h1 className="forgot-password-brand-title">Roommate Harmony</h1>
          <p className="forgot-password-brand-tagline">Living together, better.</p>
        </div>
        <div className="forgot-password-right">
          <Card>
            <h2 className="forgot-password-form-title">Reset Password</h2>
            <p className="forgot-password-description">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <div className="forgot-password-form">
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <Button onClick={() => {}}>Send Reset Link</Button>
              <div className="forgot-password-back">
                <TextLink to="/login">Back to Log In</TextLink>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

