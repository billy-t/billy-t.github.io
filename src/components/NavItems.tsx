import React from 'react';
import { Link } from 'react-router-dom';


function NavItems() {
  return (
    <ul>
      <li>
        <Link to='/about'>about</Link>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1W-cK2QXdeUaSEuja-GWzGX30BuLyzOQ3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </li>
      <li>
        <Link to='/projects'>projects</Link>
      </li>
      <li>fun</li>
    </ul>
  );
}

export default NavItems;
