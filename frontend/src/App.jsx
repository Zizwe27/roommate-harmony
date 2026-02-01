import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Chores from './pages/Chores';
import './styles/globals.css';
import Chat from './pages/Chat';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />}/>
        <Route path="/chores" element={<Chores />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/events" element={<Events/>} />
      </Routes>
    </Router>
  );
}

export default App;

