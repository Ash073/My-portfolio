import React from 'react';
import '../styles/Home.css';
import TextType from './TextType';
import Orb from './Orb.tsx';
import ResumeButton from './ResumeButton';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="animated-background"></div>

      {/* Wrapper that holds both orb & text */}
      <div className="orb-wrapper">
        <Orb 
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />

        {/* Overlay text */}
        <div className="orb-text">
          <TextType
            className="name-text"
            text={["Hi, I'm","Sayyed Ashif"]}
            typingSpeed={150}
            pauseDuration={100}
            showCursor={true}
            cursorCharacter="|"
          />
          <h1 className="fading-text">Full-Stack Developer | Data Analyst</h1>
          <ResumeButton />
        </div>
      </div>
    </div>
  );
};

export default Home;

