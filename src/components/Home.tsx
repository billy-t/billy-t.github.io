import React from 'react';
import { Link } from 'react-router-dom';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logoMe from '../images/logo_me.svg';
import logoLinkedin from '../images/logo_linkedin.svg';
import logoPlane from '../images/logo_plane.svg';
import logoYoutube from '../images/logo_youtube.svg';

function Home() {
  return (
    <div className="Home">
      <ul className="NavItems">
        <li>
          <Link to='/about'>
            about
            <img src={logoMe} className="navIcon" alt="billy" />
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/billytorres/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
            <img src={logoLinkedin} className="navIcon" alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1W-cK2QXdeUaSEuja-GWzGX30BuLyzOQ3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
            <FontAwesomeIcon className="navIcon" icon={faFileAlt} />
          </a>
        </li>
        <li>
          <Link to='/projects'>
            projects
            <img src={logoYoutube} className="navIcon" alt="youtube" />
          </Link>
        </li>
        <li>
          fun
          <img src={logoPlane} className="navIcon" alt="plane" />
        </li>
      </ul>
    </div>
  );
}

export default Home;
