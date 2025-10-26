// src/components/Loader.js
import React from 'react';
import logo from '../assets/Pro2.png';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-root">
      <div className="loader-logo-wrapper">
        <div className="loader-ring"></div>
        <img src={logo} alt="Loading..." className="loader-logo" />
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
}
