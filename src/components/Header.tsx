import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="Header">
      <Link to='/'>billyt</Link>
    </nav>
  );
}

export default Header;
