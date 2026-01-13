import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Illustration from '../components/Illustration';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import TextLink from '../components/TextLink';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const isValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = async () => {
    // clear old messages
    setSuccessMessage('');
    setErrors({});
  
    // validate
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    // fake submit (Supabase will replace this later)
    try {
      setIsSubmitting(true);
  
      await new Promise((resolve) => setTimeout(resolve, 900));
  
      setSuccessMessage('Login successful! (placeholder)');
      // OPTIONAL: navigate somewhere later, like dashboard
      // navigate('/dashboard');
    } catch (err) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <Illustration variant="login" />
          <h1 className="login-brand-title">Roommate Harmony</h1>
          <p className="login-brand-tagline">Living together, better.</p>
        </div>
        <div className="login-right">
          <Card>
            {errors.form && <p className="login-error">{errors.form}</p>}
            {successMessage && <p className="login-success">{successMessage}</p>}
            <h2 className="login-form-title">Welcome Back!</h2>
            <form
              className="login-form"
              onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
              }}
            >
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <p className="login-error">{errors.email}</p>}
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              {errors.password && <p className="login-error">{errors.password}</p>}
              <div className="login-forgot-password">
                <TextLink to="/forgot-password">Forgot Password?</TextLink>
              </div>
              <Button onClick={handleLogin} disabled={!isValid || isSubmitting}>
                {isSubmitting ? 'Logging in…' : 'Log In'}
              </Button>
              <p className="login-signup-text">
                Don't have an account?{' '}
                <TextLink to="/signup">Create Account</TextLink>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;

