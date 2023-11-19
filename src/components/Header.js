import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div style={{ flex: 1, textAlign: 'center', paddingLeft: '8%', paddingRight: '8%' }}>
        <h1>Download apps to your XREAL Beam</h1>
      </div>
      <div>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;