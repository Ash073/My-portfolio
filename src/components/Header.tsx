import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className="logo">Sayyed Ashif</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <Link to="/achievements">Achievements</Link>
      </nav>
    </header>
  );
}

export default Header;
