import React from 'react';
import { Link } from 'react-router-dom';

import logoMe from '../images/logo_me.svg';
import logoLinkedin from '../images/logo_linkedin.svg';
import logoPlane from '../images/logo_plane.svg';
import logoResume from '../images/logo_resume.svg';
import logoYoutube from '../images/logo_youtube.svg';

const renderRow = (name: string, icon: string, href?: string) => {
  const renderLink = (content: React.ReactNode) => {
    return href
      ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link to={`/${name}`}>{content}</Link>
      );
  }

  return (
    <div className='navRow'>
      <div className='navNameCol'>
        {renderLink(name)}
      </div>
      <div className='navIconCol'>
        {renderLink(<img src={icon} className="navIcon" alt={name} />)}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="Home">
      <div className="navItems">
        {renderRow('about', logoMe)}
        {renderRow('resume', logoResume, 'https://drive.google.com/file/d/1W-cK2QXdeUaSEuja-GWzGX30BuLyzOQ3/view?usp=sharing')}
        {renderRow('linkedin', logoLinkedin, 'https://www.linkedin.com/in/billytorres/')}
        {renderRow('projects', logoYoutube)}
        {renderRow('fun', logoPlane)}
      </div>
    </div>
  );
}

export default Home;
