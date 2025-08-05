import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="animated-background"> </div>
      <div className="overlay-content">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
        </style>
        <h1 className="main-heading">
          Hi, I'm <span className="oswald-text">Sayyed Ashif</span>
        </h1>
        <h1 className="fading-text">Full-Stack Developer | Data Analyst</h1>
      </div>
    </div>
  );
};

export default Home;


