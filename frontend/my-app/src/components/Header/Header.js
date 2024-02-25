import React from 'react';
import './Header.css';
import MenuButton from './MenuButton'; // Add this line


const Header = () => {
  return (
    <header className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <MenuButton /> {/* Add this line */}
    </header>
  );
};

export default Header;