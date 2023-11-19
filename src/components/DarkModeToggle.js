import React, { useState } from 'react';
import './buttons.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('light-mode');
    document.querySelector('header').classList.toggle('light-mode');

  };

  return (
    <button  className="btn" onClick={toggleDarkMode}>
      {isDarkMode ? 'Toggle\nDark Mode' : 'Toggle\nLight Mode'}
    </button>
  );
};

export default DarkModeToggle;