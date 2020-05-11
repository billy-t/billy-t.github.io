import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="Header">
      <Link to='/'>
        <div className="logo">billyt</div>
      </Link>
    </nav>
  );
}

export default Header;
