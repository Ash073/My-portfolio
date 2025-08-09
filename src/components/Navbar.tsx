import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => scrollTo('home')}>
        Sayyed Ashif
      </div>
      <div className="nav-right">
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <button onClick={() => scrollTo('achievements')}>Achievements</button>
      </div>
    </nav>
  );
};

export default Navbar;
