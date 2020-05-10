import React from 'react';
import NavItems from './NavItems';
import profilePic from '../images/profile_pic.png';

function Home() {
  return (
    <header className="App-header">
      <img src={profilePic} className="App-logo" alt="billy" />
      <NavItems />
    </header>
  );
}

export default Home;
