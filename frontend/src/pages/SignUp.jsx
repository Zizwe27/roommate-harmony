import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
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

  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSignUp = async(e) => {
    e.preventDefault()

    setErrorMessage('')
    setSuccessMessage('')

    const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

    if (error){
      setErrorMessage(error.message)
    }else{
      setSuccessMessage("Success! Redirecting you...")
    }

    setTimeout( () => {
      navigate('/login')
    }, 1000)
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
            <div className="signup-form">
              <Input
                label="Full Name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Confirm password"
              />
              <Button variant="secondary" onClick={handleSignUp}>Sign Up</Button>
              <p className="signup-login-text">
                Already have an account?{' '}
                <TextLink to="/login">Log In</TextLink>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

