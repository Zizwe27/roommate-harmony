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
            <h2 className="login-form-title">Welcome Back!</h2>
            <div className="login-form">
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <div className="login-forgot-password">
                <TextLink to="/forgot-password">Forgot Password?</TextLink>
              </div>
              <Button onClick={() => {}}>Log In</Button>
              <p className="login-signup-text">
                Don't have an account?{' '}
                <TextLink to="/signup">Create Account</TextLink>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;

