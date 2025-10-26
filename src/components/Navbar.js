import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "./Navbar.css";
import proLogo from '../assets/Pro.png';

export default function Navbar() {
  const { user, logout } = useUser();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-logo">
        <Link to="/" onClick={() => setNavOpen(false)}>
          <img src={proLogo} alt="ProDiligix" className="nav-logo-img" />
        </Link>
      </div>
      <nav className={`nav-menu ${navOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setNavOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setNavOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setNavOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setNavOpen(false)}>Contact Us</Link>
        {!user && (
          <Link to="/login" className="nav-login-btn" onClick={() => setNavOpen(false)}>Login</Link>
        )}
        {user && (
          <>
            <Link to="/dashboard" onClick={() => setNavOpen(false)}>Dashboard</Link>
            <button className="nav-logout-btn" onClick={logout}>Logout</button>
          </>
        )}
      </nav>
      <button className="nav-toggle" onClick={() => setNavOpen(!navOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}
