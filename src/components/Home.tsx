import React from 'react';
import '../styles/Home.css';
import videoBg from '../assets/backgroundmy.mp4';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-content">
        <h1 className="main-heading">Hi, I'm <span className="bitcount-text">Sayyed Ashif</span></h1>
        <p className="subtitle">Full-Stack Developer | Data Analyst</p>
      </div>
    </div>
  );
};

export default Home;
