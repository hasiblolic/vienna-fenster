import React from 'react';
import logo from '../styles/img/bh-matrix-logo2.svg';

export default function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="logo-container navbar-brand">
        <a href="#landing">
          <img className="logo" src={logo} alt="Logo" />
          <div className="logo-overlay">
            <div className="logo-text">
              Vienna Fenster
            </div>
          </div>
        </a>
      </div>
      <ul>
        <li><a href="#about">Wer sind wir?</a></li>
        <li><a href="#products">Fenster & Türen</a></li>
        <li><a href="#partners">Unsere Partner</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  );
}
