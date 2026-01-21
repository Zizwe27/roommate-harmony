import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, who took out the trash?", me: false },
    { id: 2, text: "Sent a note", me: false },
    { id: 3, text: "Don't forget the milk!", me: false },
    { id: 4, text: "Don't forget the milk!", me: true },
  ]);

  const [draft, setDraft] = useState("");
  const endRef = useRef(null);

  function handleSend() {
    const clean = draft.trim();
    if (!clean) return;

    setMessages((prev) => [...prev, { id: Date.now(), text: clean, me: true }]);
    setDraft("");
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="dashboard-container">
      {/* DASHBOARD-STYLE SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                fill="currentColor"
              />
            </svg>
            <span>Roommate Harmony</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
                fill="currentColor"
              />
            </svg>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/chores"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19.36 2.64C20.618 2.64 21.64 3.662 21.64 4.92V19.08C21.64 20.338 20.618 21.36 19.36 21.36H4.64C3.382 21.36 2.36 20.338 2.36 19.08V4.92C2.36 3.662 3.382 2.64 4.64 2.64H19.36ZM19.36 4H4.64C4.286 4 4 4.286 4 4.64V19.36C4 19.714 4.286 20 4.64 20H19.36C19.714 20 20 19.714 20 19.36V4.64C20 4.286 19.714 4 19.36 4ZM10 6V8H18V6H10ZM10 11V13H18V11H10ZM10 16V18H15V16H10Z"
                fill="currentColor"
              />
            </svg>
            <span>Chores</span>
          </NavLink>

          <NavLink
            to="/expenses"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 10.65 8 11.68 10.5 12.34C12.8 12.93 13.5 13.54 13.5 14.5C13.5 15.5 12.5 16.35 10.5 16.35C8.64 16.35 7.86 15.54 7.76 14.25H5.5C5.59 16.4 7.18 17.89 10 18.31V21H13V18.84C14.95 18.5 16.5 17.35 16.5 15.5C16.5 13.28 14.69 12.15 11.8 11.5V10.9Z"
                fill="currentColor"
              />
            </svg>
            <span>Expenses</span>
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"
                fill="currentColor"
              />
            </svg>
            <span>Chat</span>
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM19 7H5V6H19V7ZM17 12H12V17H17V12Z"
                fill="currentColor"
              />
            </svg>
            <span>Events</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="profile-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="profile-info">
              <span className="profile-name">Roommate Harmony</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </aside>

      {/* CHAT MAIN */}
      <main className="dashboard-main chat-main">
        <div className="chat-top-icons">
          <button className="chat-icon-btn" aria-label="Notifications">🔔</button>
          <button className="chat-icon-btn" aria-label="Settings">⚙️</button>
          <button className="chat-icon-btn" aria-label="Theme">☀️</button>
        </div>

        <header className="chat-header">
          <h1 className="chat-title">Roommate Chat</h1>
          <div className="chat-chip">House Status</div>
        </header>

        <section className="chat-messages">
          {messages.map((m) => (
            <div key={m.id} className={`chat-row ${m.me ? "me" : "them"}`}>
              {!m.me && <div className="chat-avatar">👤</div>}

              <div className={`chat-bubble ${m.me ? "bubble-me" : "bubble-them"}`}>
                {m.text}
              </div>

              {m.me && <div className="chat-avatar">🙂</div>}
            </div>
          ))}
          <div ref={endRef} />
        </section>

        <footer className="chat-composer">
          <button className="chat-attach" aria-label="Attach">📎</button>

          <input
            className="chat-input"
            placeholder="Type your message here..."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />

          <button className="chat-send" onClick={handleSend} aria-label="Send">
            ➤
          </button>
        </footer>
      </main>
    </div>
  );
}
