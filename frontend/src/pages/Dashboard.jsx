import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Footer from '../components/Footer';
import harmonyImage from '../assets/harmony.png';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [pendingChores] = useState(2);
  const [overdueChores] = useState(0);
  const [pendingExpenses] = useState(1);
  const [upcomingEvents] = useState(1);

  const houseStatus = useMemo(() => {
    if (overdueChores > 0 || pendingExpenses > 3) {
      return { text: 'Needs Attention', bgColor: '#D4A574', textColor: '#3B4953' };
    }
    if (pendingChores > 3 || pendingExpenses > 1) {
      return { text: 'Busy', bgColor: '#C5D89D', textColor: '#3B4953' };
    }
    return { text: 'Peaceful', bgColor: '#9CAB84', textColor: '#3B4953' };
  }, [pendingChores, overdueChores, pendingExpenses]);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor"/>
            </svg>
            <span>Roommate Harmony</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor"/>
            </svg>
            <span>Dashboard</span>
          </a>
          <a href="/chores" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.36 2.64C20.618 2.64 21.64 3.662 21.64 4.92V19.08C21.64 20.338 20.618 21.36 19.36 21.36H4.64C3.382 21.36 2.36 20.338 2.36 19.08V4.92C2.36 3.662 3.382 2.64 4.64 2.64H19.36ZM19.36 4H4.64C4.286 4 4 4.286 4 4.64V19.36C4 19.714 4.286 20 4.64 20H19.36C19.714 20 20 19.714 20 19.36V4.64C20 4.286 19.714 4 19.36 4ZM10 6V8H18V6H10ZM10 11V13H18V11H10ZM10 16V18H15V16H10Z" fill="currentColor"/>
            </svg>
            <span>Chores</span>
          </a>
          <a href="/expenses" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 10.65 8 11.68 10.5 12.34C12.8 12.93 13.5 13.54 13.5 14.5C13.5 15.5 12.5 16.35 10.5 16.35C8.64 16.35 7.86 15.54 7.76 14.25H5.5C5.59 16.4 7.18 17.89 10 18.31V21H13V18.84C14.95 18.5 16.5 17.35 16.5 15.5C16.5 13.28 14.69 12.15 11.8 11.5V10.9Z" fill="currentColor"/>
            </svg>
            <span>Expenses</span>
          </a>
          <a href="/chat" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
            </svg>
            <span>Chat</span>
          </a>
          <a href="/events" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM19 7H5V6H19V7ZM17 12H12V17H17V12Z" fill="currentColor"/>
            </svg>
            <span>Events</span>
          </a>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="profile-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="profile-info">
              <span className="profile-name">Roommate Harmony</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10H7Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </aside>
      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-banner">
            <div className="welcome-text">
              <h1>Welcome Home!</h1>
              <div className="status-tag" style={{ backgroundColor: houseStatus.bgColor, color: houseStatus.textColor }}>
                <span>House Status: {houseStatus.text}</span>
              </div>
            </div>
            <div className="welcome-illustration">
              <img src={harmonyImage} alt="Roommate Harmony" className="harmony-image" />
            </div>
          </div>
          <div className="action-buttons">
            <Button variant="secondary" className="action-btn" onClick={() => navigate('/chores')}>Add Chore</Button>
            <Button variant="secondary" className="action-btn">Add Expense</Button>
            <Button variant="secondary" className="action-btn">Send Message</Button>
          </div>
          <div className="summary-cards">
            <Card className="summary-card">
              <div className="card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                </svg>
                <h3>Pending Chores</h3>
              </div>
              <ul className="chore-list">
                <li>Dishes (Due Today)</li>
                <li>Satchet (Due Today)</li>
                <li>...</li>
              </ul>
            </Card>
            <Card className="summary-card">
              <div className="card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 10.65 8 11.68 10.5 12.34C12.8 12.93 13.5 13.54 13.5 14.5C13.5 15.5 12.5 16.35 10.5 16.35C8.64 16.35 7.86 15.54 7.76 14.25H5.5C5.59 16.4 7.18 17.89 10 18.31V21H13V18.84C14.95 18.5 16.5 17.35 16.5 15.5C16.5 13.28 14.69 12.15 11.8 11.5V10.9Z" fill="currentColor"/>
                </svg>
                <h3>You Owe</h3>
              </div>
              <div className="owe-amount">$45.00</div>
              <p className="owe-subtitle">Total pending</p>
            </Card>
            <Card className="summary-card events-card">
              <div className="card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM19 7H5V6H19V7ZM17 12H12V17H17V12Z" fill="currentColor"/>
                </svg>
                <h3>Upcoming Events</h3>
              </div>
              <div className="event-item">Movie Night (Tomorrow)</div>
            </Card>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Dashboard;

