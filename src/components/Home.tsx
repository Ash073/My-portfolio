import React from 'react';
import '../styles/Home.css';
import TextType from './TextType';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="animated-background"> </div>
      <div className="overlay-content">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
        </style>
        <h1 className="main-heading">
          Hi, I'm
        </h1>
        <TextType className='text-type'
                text={["Sayyed Ashif_"]}
                typingSpeed={85}
                pauseDuration={100}
                showCursor={true}
                cursorCharacter="|"
        />

        <h1 className="fading-text">Full-Stack Developer | Data Analyst</h1>
      </div>
    </div>
  );
};

export default Home;


