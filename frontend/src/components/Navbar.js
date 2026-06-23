import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <div className="logo">
          <Link to="/">PBODY <span>Academy</span></Link>
        </div>

        <div className={`nav-links ${open ? "active" : ""}`}>

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>

          <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>

          <Link to="/lessons" onClick={() => setOpen(false)}>Lessons</Link>

          <Link to="/quiz" onClick={() => setOpen(false)}>Quiz</Link>

          <Link to="/ai-tutor" onClick={() => setOpen(false)}>AI Tutor</Link>

          <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>

          <Link to="/certificate" onClick={() => setOpen(false)}>Certificate</Link>

        </div>

        <div className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>

    </nav>
  );
}

export default Navbar;