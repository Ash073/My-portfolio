import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

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
        <button onClick={() => navigate('/achievements')}>Achievements</button>
      </div>
    </nav>
  );
};

export default Navbar;
