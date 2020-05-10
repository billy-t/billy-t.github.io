import React from 'react';
import Header from './components/Header';
import NavItems from './components/NavItems';
import profilePic from './images/profile_pic.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={profilePic} className="App-logo" alt="billy" />
        <NavItems />
      </header>
    </div>
  );
}

export default App;
