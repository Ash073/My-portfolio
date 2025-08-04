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
        <h1 className="main-heading">Hi, I'm <span className="google-sans-code-uniquifier">Sayyed Ashif</span></h1>
        <h1 className="fading-text">Full-Stack Developer | Data Analyst</h1>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Home;
