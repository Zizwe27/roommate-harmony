import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Footer from '../components/Footer';
import chores1Image from '../assets/chores_1.png';
import chores2Image from '../assets/chores_2.png';
import './Chores.css';

const Chores = () => {
  const [activeTab, setActiveTab] = useState('my-chores');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choreTitle, setChoreTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  const chores = [
    { id: 1, title: 'Clean Kitchen', dueDate: 'Due Today', icon: 'sponge', completed: false },
    { id: 2, title: 'Take Out Trash', dueDate: 'Due Tomorrow', icon: 'trash', completed: false },
    { id: 3, title: 'Vacuum Living Room', dueDate: 'Due Friday', icon: 'vacuum', completed: false },
    { id: 4, title: 'Wash Dishes', dueDate: 'Due Today', icon: 'sponge', completed: false },
    { id: 5, title: 'Mop Floors', dueDate: 'Due Saturday', icon: 'mop', completed: false },
  ];

  const nextChore = chores.find(chore => !chore.completed);

  return (
    <div className="chores-container">
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
          <Link to="/dashboard" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor"/>
            </svg>
            <span>Home</span>
          </Link>
          <Link to="/generals" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
            </svg>
            <span>Generals</span>
          </Link>
          <Link to="/expenses" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor"/>
            </svg>
            <span>Expenses</span>
          </Link>
          <Link to="/chores" className="nav-item active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.36 2.64C20.618 2.64 21.64 3.662 21.64 4.92V19.08C21.64 20.338 20.618 21.36 19.36 21.36H4.64C3.382 21.36 2.36 20.338 2.36 19.08V4.92C2.36 3.662 3.382 2.64 4.64 2.64H19.36ZM19.36 4H4.64C4.286 4 4 4.286 4 4.64V19.36C4 19.714 4.286 20 4.64 20H19.36C19.714 20 20 19.714 20 19.36V4.64C20 4.286 19.714 4 19.36 4ZM10 6V8H18V6H10ZM10 11V13H18V11H10ZM10 16V18H15V16H10Z" fill="currentColor"/>
            </svg>
            <span>Chores</span>
          </Link>
          <Link to="/settings" className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.67 19.18 11.36 19.14 11.06L21.16 9.48C21.34 9.33 21.38 9.07 21.25 8.87L19.33 5.97C19.2 5.77 18.95 5.7 18.75 5.8L16.42 6.88C16.01 6.6 15.56 6.37 15.08 6.2L14.78 3.68C14.73 3.45 14.54 3.28 14.31 3.28H9.69C9.46 3.28 9.27 3.45 9.22 3.68L8.92 6.2C8.44 6.37 7.99 6.6 7.58 6.88L5.25 5.8C5.05 5.7 4.8 5.77 4.67 5.97L2.75 8.87C2.62 9.07 2.66 9.33 2.84 9.48L4.86 11.06C4.82 11.36 4.8 11.67 4.8 12C4.8 12.33 4.82 12.64 4.86 12.94L2.84 14.52C2.66 14.67 2.62 14.93 2.75 15.13L4.67 18.03C4.8 18.23 5.05 18.3 5.25 18.2L7.58 17.12C7.99 17.4 8.44 17.63 8.92 17.8L9.22 20.32C9.27 20.55 9.46 20.72 9.69 20.72H14.31C14.54 20.72 14.73 20.55 14.78 20.32L15.08 17.8C15.56 17.63 16.01 17.4 16.42 17.12L18.75 18.2C18.95 18.3 19.2 18.23 19.33 18.03L21.25 15.13C21.38 14.93 21.34 14.67 21.16 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="currentColor"/>
            </svg>
            <span>Settings</span>
          </Link>
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
      <main className="chores-main">
        <div className="chores-content">
          <div className="chores-header">
            <h1>Chores</h1>
            <Button variant="secondary" className="add-chores-btn" onClick={() => setIsModalOpen(true)}>+ Add New Chores</Button>
          </div>

          <div className="chores-banner">
            <div className="banner-illustrations">
              <div className="illustration-left">
                <img src={chores1Image} alt="Chore illustration 1" className="chore-illustration" />
              </div>
              <h2>Chores & Tasks</h2>
              <div className="illustration-right">
                <img src={chores2Image} alt="Chore illustration 2" className="chore-illustration" />
              </div>
            </div>
          </div>

          <div className="chores-section">
            <div className="chores-tabs-header">
              <div className="chores-tabs">
                <button 
                  className={`tab ${activeTab === 'my-chores' ? 'active' : ''}`}
                  onClick={() => setActiveTab('my-chores')}
                >
                  My Chores
                </button>
                <button 
                  className={`tab ${activeTab === 'all-chores' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all-chores')}
                >
                  All Chores
                </button>
              </div>
              <Button variant="secondary" className="add-chore-btn" onClick={() => setIsModalOpen(true)}>+ Add New Chore</Button>
            </div>

            <div className="chores-list-container">
              <div className="chores-list">
                {chores.map((chore) => (
                  <Card key={chore.id} className="chore-card">
                    <div className="chore-item">
                      <div className="chore-info">
                        <h3>{chore.title}</h3>
                        <p className="chore-due">{chore.dueDate}</p>
                      </div>
                      <div className="chore-actions">
                        <input type="checkbox" className="chore-checkbox" />
                        <Button variant="secondary" className="mark-complete-btn">Mark Complete</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="next-chore-card">
                <h3>Your Next Chore:</h3>
                <p className="next-chore-text">{nextChore ? `${nextChore.title} (${nextChore.dueDate.replace('Due ', '')})` : 'No pending chores'}</p>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </main>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Chore</h2>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="chore-title">Chore Title</label>
                <input
                  id="chore-title"
                  type="text"
                  placeholder="e.g. Take out trash"
                  value={choreTitle}
                  onChange={(e) => setChoreTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description (optional)</label>
                <textarea
                  id="description"
                  placeholder="Any additional details..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label htmlFor="assign-to">Assign To</label>
                <div className="select-wrapper">
                  <select
                    id="assign-to"
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
                  >
                    <option value="">Choose roommate</option>
                    <option value="roommate1">Roommate 1</option>
                    <option value="roommate2">Roommate 2</option>
                    <option value="roommate3">Roommate 3</option>
                  </select>
                  <span className="app-preview-tag">App Preview</span>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="due-date">Due Date</label>
                  <input
                    id="due-date"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Priority</label>
                  <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Button variant="secondary" className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="secondary" className="create-btn" onClick={() => {
                console.log({ choreTitle, description, assignTo, dueDate, priority });
                setIsModalOpen(false);
                setChoreTitle('');
                setDescription('');
                setAssignTo('');
                setDueDate('');
                setPriority('Medium');
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
                </svg>
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chores;

