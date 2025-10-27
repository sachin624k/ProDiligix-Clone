import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active state
import { useUser } from "../contexts/UserContext";
import "./Navbar.css";
import proLogo from '../assets/Pro.png';

export default function Navbar() {
  const { user, logout } = useUser();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-logo">
        <NavLink to="/" onClick={() => setNavOpen(false)}>
          <img src={proLogo} alt="ProDiligix" className="nav-logo-img" />
        </NavLink>
      </div>
      <nav className={`nav-menu ${navOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? "nav-link-active" : ""}
          onClick={() => setNavOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? "nav-link-active" : ""}
          onClick={() => setNavOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "nav-link-active" : ""}
          onClick={() => setNavOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "nav-link-active" : ""}
          onClick={() => setNavOpen(false)}
        >
          Contact Us
        </NavLink>
        {!user && (
          <NavLink
            to="/login"
            className={({ isActive }) => "nav-login-btn" + (isActive ? " nav-link-active" : "")}
            onClick={() => setNavOpen(false)}
          >
            Login
          </NavLink>
        )}
        {user && (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => isActive ? "nav-link-active" : ""}
              onClick={() => setNavOpen(false)}
            >
              Dashboard
            </NavLink>
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
