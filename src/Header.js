import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Abdullah</div>
      <nav className="header__nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;