import React from 'react';
import profilePic from '../images/profile_pic.png';

function About() {
  return (
    <div>
      about me
      <img src={profilePic} className="picture" alt="billy" />
    </div>
  );
}

export default About;
