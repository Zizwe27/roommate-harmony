import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Events.css";

export default function Events() {
  // UI-only state
  const [view, setView] = useState("Month"); // Month | Week | Day
  const [cursor, setCursor] = useState(new Date()); // current month/year
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftTime, setDraftTime] = useState("");
  const [draftStatus, setDraftStatus] = useState("Approved");


  // Fake events 
  const [events, setEvents] = useState(
    () => [
      {
        id: 1,
        title: "Movie Night",
        date: "2024-05-05",
        time: "6:00 PM",
        status: "Approved", // Approved | Pending | Rejected
      },
      {
        id: 2,
        title: "House Meeting",
        date: "2024-05-22",
        time: "2:00 PM",
        status: "Pending",
      },
      {
        id: 3,
        title: "Party",
        date: "2024-05-29",
        time: "8:00 PM",
        status: "Rejected",
      },
      {
        id: 4,
        title: "Groceries Run",
        date: "2024-05-11",
        time: "1:30 PM",
        status: "Approved",
      },
      {
        id: 5,
        title: "Maintenance",
        date: "2024-05-19",
        time: "11:00 AM",
        status: "Approved",
      },
    ],
    []
  );

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    status: "Pending",
  });

  // ===== Calendar helpers =====
  const monthLabel = cursor.toLocaleString("en-US", { month: "long", year: "numeric" });

  const monthMatrix = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
  
    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);
  
    // Start on the Sunday before (or on) the 1st
    const start = new Date(year, month, 1 - firstOfMonth.getDay());
  
    // End on the Saturday after (or on) the last day
    const end = new Date(year, month, lastOfMonth.getDate() + (6 - lastOfMonth.getDay()));
  
    const cells = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const date = new Date(d);
      const inMonth = date.getMonth() === month;
      const iso = date.toISOString().slice(0, 10);
      const dayEvents = events.filter((e) => e.date === iso);
  
      cells.push({
        key: iso,
        date,
        iso,
        inMonth,
        dayNumber: date.getDate(),
        events: dayEvents,
      });
    }
  
    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  }, [cursor, events]);  

  function prevMonth() {
    setCursor((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }
  function nextMonth() {
    setCursor((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  function pickDay(cell) {
    setSelectedDate(cell.date);
  }

  function handleAddEvent() {
    const iso = selectedDate.toISOString().slice(0, 10);
    setForm({ title: "", date: iso, time: "", status: "Pending" });
    setIsAddOpen(true);
  }
  
  function submitEvent(e) {
    e.preventDefault();
  
    const title = form.title.trim();
    if (!title || !form.date) return;
  
    const newEvent = {
      id: Date.now(),
      title,
      date: form.date,
      time: form.time?.trim() || "—",
      status: form.status, // Approved | Pending | Rejected
    };
  
    setEvents((prev) => [...prev, newEvent]);
    setIsAddOpen(false);
  }  

  const dows = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const selectedIso = selectedDate.toISOString().slice(0, 10);

  const selectedDayEvents = useMemo(() => {
    return events.filter((e) => e.date === selectedIso);
  }, [events, selectedIso]);

  const weekForSelected = useMemo(() => {
    // find the week row that contains selected date
    const found = monthMatrix.find((week) => week.some((c) => c.iso === selectedIso));
    return found || monthMatrix[0];
  }, [monthMatrix, selectedIso]);


  return (
    <div className="dashboard-container">
      {/* SIDEBAR (same structure as Dashboard) */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor" />
            </svg>
            <span>Roommate Harmony</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor" />
            </svg>
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/chores" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19.36 2.64C20.618 2.64 21.64 3.662 21.64 4.92V19.08C21.64 20.338 20.618 21.36 19.36 21.36H4.64C3.382 21.36 2.36 20.338 2.36 19.08V4.92C2.36 3.662 3.382 2.64 4.64 2.64H19.36ZM19.36 4H4.64C4.286 4 4 4.286 4 4.64V19.36C4 19.714 4.286 20 4.64 20H19.36C19.714 20 20 19.714 20 19.36V4.64C20 4.286 19.714 4 19.36 4ZM10 6V8H18V6H10ZM10 11V13H18V11H10ZM10 16V18H15V16H10Z" fill="currentColor" />
            </svg>
            <span>Chores</span>
          </NavLink>

          <NavLink to="/expenses" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 10.65 8 11.68 10.5 12.34C12.8 12.93 13.5 13.54 13.5 14.5C13.5 15.5 12.5 16.35 10.5 16.35C8.64 16.35 7.86 15.54 7.76 14.25H5.5C5.59 16.4 7.18 17.89 10 18.31V21H13V18.84C14.95 18.5 16.5 17.35 16.5 15.5C16.5 13.28 14.69 12.15 11.8 11.5V10.9Z" fill="currentColor" />
            </svg>
            <span>Expenses</span>
          </NavLink>

          <NavLink to="/chat" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor" />
            </svg>
            <span>Chat</span>
          </NavLink>

          <NavLink to="/events" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM19 7H5V6H19V7ZM17 12H12V17H17V12Z" fill="currentColor" />
            </svg>
            <span>Events</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="profile-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
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

      {isModalOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal-card">
            <div className="modal-head">
              <div className="modal-title">Add New Event</div>
              <button className="modal-x" type="button" onClick={() => setIsModalOpen(false)} aria-label="Close">
                ×
              </button>
            </div>

            <div className="modal-body">
              <label className="field">
                <span>Title</span>
                <input value={draftTitle} onChange={(e) => setDraftTitle(e.target.value)} placeholder="e.g., House Meeting" />
              </label>

              <label className="field">
                <span>Time</span>
                <input value={draftTime} onChange={(e) => setDraftTime(e.target.value)} placeholder="e.g., 2:00 PM" />
              </label>

              <label className="field">
                <span>Status</span>
                <select value={draftStatus} onChange={(e) => setDraftStatus(e.target.value)}>
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </label>
            </div>

            <div className="modal-actions">
              <button className="btn-ghost" type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button
                className="btn-primary"
                type="button"
                onClick={() => {
                  // UI-only close
                  setIsModalOpen(false);
                  setDraftTitle("");
                  setDraftTime("");
                  setDraftStatus("Approved");
                }}
                disabled={!draftTitle.trim()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddOpen && (
      <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
      <div className="modal-head">
        <h2 className="modal-title">Add New Event</h2>
        <button className="modal-x" type="button" onClick={() => setIsAddOpen(false)} aria-label="Close">
          ×
        </button>
      </div>

      <form className="modal-body" onSubmit={submitEvent}>
        <label className="field">
          <span>Title</span>
          <input
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            placeholder="e.g. House Meeting"
          />
        </label>

        <div className="two-col">
          <label className="field">
            <span>Date</span>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
            />
          </label>

          <label className="field">
            <span>Time</span>
            <input
              value={form.time}
              onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
              placeholder="e.g. 2:00 PM"
            />
          </label>
        </div>

        <label className="field">
          <span>Status</span>
          <select
            value={form.status}
            onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
          >
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>

        <div className="modal-actions">
          <button type="button" className="btn-ghost" onClick={() => setIsAddOpen(false)}>
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Add Event
          </button>
        </div>

        <div className="ui-only-note">
          UI only — events are stored in local state (will reset on refresh).
        </div>
      </form>
      </div>
      </div>
      )}


      {/* MAIN */}
      <main className="events-main">
        <div className="events-topbar">
          <div className="events-month">
            <button className="events-nav" type="button" onClick={prevMonth} aria-label="Previous month">
              ‹
            </button>
            <h1 className="events-title">{monthLabel}</h1>
            <button className="events-nav" type="button" onClick={nextMonth} aria-label="Next month">
              ›
            </button>
          </div>

          <div className="events-view">
            {["Month", "Week", "Day"].map((v) => (
              <button
                key={v}
                type="button"
                className={`view-btn ${view === v ? "active" : ""}`}
                onClick={() => setView(v)}
              >
                {v}
              </button>
            ))}
          </div>

          <button type="button" className="events-add" onClick={handleAddEvent}>
            + Add New Event
          </button>
        </div>

        {/* Calendar header row */}
        <div className="cal-wrap">
          <div className="cal-head">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="cal-dow">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar */}
          {view === "Month" && (
          <div className="cal-grid" aria-label="Calendar month view">
          {monthMatrix.flat().map((cell) => {
          const isSelected = cell.iso === selectedIso;
          return (
            <button
              key={cell.key}
              type="button"
              className={`cal-cell ${cell.inMonth ? "" : "muted"} ${isSelected ? "selected" : ""}`}
              onClick={() => pickDay(cell)}
            >
              <div className="cal-date">{cell.dayNumber}</div>

              <div className="cal-events">
                 {cell.events.slice(0, 2).map((ev) => (
                   <div key={ev.id} className={`ev-pill ${ev.status.toLowerCase()}`}>
                      <div className="ev-title">{ev.title}</div>
                      <div className="ev-time">{ev.time}</div>
                    </div>
                  ))}
                  {cell.events.length > 2 && <div className="ev-more">+{cell.events.length - 2} more</div>}
              </div>
            </button>
           );
         })}
       </div>
     )}

     {view === "Week" && (
       <div className="week-wrap" aria-label="Calendar week view">
         <div className="week-grid">
          {weekForSelected.map((cell) => {
            const isSelected = cell.iso === selectedIso;
            return (
              <button
                key={cell.key}
                type="button"
                className={`week-cell ${isSelected ? "selected" : ""} ${cell.inMonth ? "" : "muted"}`}
                onClick={() => pickDay(cell)}
              >
                <div className="week-date">
                  <span className="week-dow">{dows[cell.date.getDay()]}</span>
                  <span className="week-num">{cell.dayNumber}</span>
                </div>

                <div className="week-events">
                  {cell.events.slice(0, 3).map((ev) => (
                    <div key={ev.id} className={`ev-pill ${ev.status.toLowerCase()}`}>
                      <div className="ev-title">{ev.title}</div>
                      <div className="ev-time">{ev.time}</div>
                    </div>
                 ))}
                  {cell.events.length > 3 && <div className="ev-more">+{cell.events.length - 3} more</div>}
                </div>
              </button>
             );
           })}
         </div>
       </div>
      )}

      {view === "Day" && (
        <div className="day-wrap" aria-label="Calendar day view">
          <div className="day-header">
            <div className="day-title">
              {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
            </div>
            <div className="day-subtitle">{selectedDayEvents.length} event(s)</div>
          </div>

          <div className="day-list">
            {selectedDayEvents.length === 0 ? (
              <div className="day-empty">No events scheduled.</div>
            ) : (
              selectedDayEvents.map((ev) => (
                <div key={ev.id} className={`day-item ${ev.status.toLowerCase()}`}>
                  <div className="day-item-left">
                    <div className="day-item-title">{ev.title}</div>
                    <div className="day-item-time">{ev.time}</div>
                  </div>
                  <div className="day-item-badge">{ev.status}</div>
                </div>
              ))
            )}
          </div>
        </div>
        )}

        </div>
      </main>
    </div>
  );
}
