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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const isValid = email.trim() !== '';

  const handleReset = async () => {
    // clear old messages
    setSuccessMessage('');
    setErrors({});

    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMessage('Reset link sent! (placeholder)');
    } catch (err) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            {errors.form && <p className="forgot-password-error">{errors.form}</p>}
            {successMessage && <p className="forgot-password-success">{successMessage}</p>}
            <p className="forgot-password-description">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <form
              className="forgot-password-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleReset();
              }}
            >
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <p className="forgot-password-error">{errors.email}</p>}
              <Button onClick={handleReset} disabled={!isValid || isSubmitting}>
                {isSubmitting ? 'Loading…' : 'Send Reset Link'}
              </Button>
              <div className="forgot-password-back">
                <TextLink to="/login">Back to Log In</TextLink>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

