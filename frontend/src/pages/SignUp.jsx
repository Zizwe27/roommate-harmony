import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Illustration from '../components/Illustration';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import TextLink from '../components/TextLink';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const isValid = fullName.trim() !== '' && email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '';

  const handleSignUp = async () => {
    // clear old messages
    setSuccessMessage('');
    setErrors({});

    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    if (!confirmPassword.trim()) newErrors.confirmPassword = 'Please confirm your password';
    if (password.trim() && confirmPassword.trim() && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSuccessMessage('Account created successfully! (placeholder)');
    } 
    catch (err) {
    setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <Illustration variant="login" />
          <h1 className="signup-brand-title">Roommate Harmony</h1>
          <p className="signup-brand-tagline">Living together, better.</p>
        </div>
        <div className="signup-right">
          <Card>
            <h2 className="signup-form-title">Create Account</h2>
            {errors.form && <p className="signup-error">{errors.form}</p>}
            {successMessage && <p className="signup-success">{successMessage}</p>}
            <form className="signup-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
            >
              <Input
                label="Full Name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="signup-error">{errors.fullName}</p>}
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <p className="signup-error">{errors.email}</p>}
              <Input
                label="Create Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
              />
              <Input
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
              {errors.password && <p className="signup-error">{errors.password}</p>}
              <Button
                variant="secondary"
                onClick={handleSignUp}
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? 'Loading…' : 'Sign Up'}
              </Button>
              <p className="signup-login-text">
                Already have an account?{' '}
                <TextLink to="/login">Log In</TextLink>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

