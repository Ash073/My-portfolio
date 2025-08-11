import React from 'react';
import '../styles/About.css'; // External CSS for styling
import ProfileCard from './ProfileCard';
import profileImg from '../assets/avataar.png'; 

const About: React.FC = () => {

  return (
    <section id="about" className="about-section">
      <ProfileCard
        name="Sayyed Ashif"
        title="Data Analyst"
        handle="sayyedashif"
        status="Online"
        contactText="Contact Me"
        avatarUrl={profileImg}
        miniAvatarUrl={profileImg}
        showBehindGradient={true}
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
      />
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          I'm a passionate and driven individual deeply immersed in the world of coding, development, and continuous learning.
          Whether it's solving algorithmic challenges, contributing to open-source projects, or building end-to-end applications,
          I thrive in transforming ideas into real-world solutions.
          <br /><br />
          I believe in learning by doing—which reflects in my growing portfolio of projects, consistent GitHub contributions,
          and hands-on experimentation with new tools, frameworks, and technologies. My coding journey is not just academic
          or professional—it's a daily habit and personal commitment.
          <br /><br />
          From front-end interfaces to back-end logic, from data pipelines to full-stack applications—I constantly push myself
          to think creatively, build efficiently, and code responsibly. Every line of code I write is a step forward in mastering my craft.
        </p>
      </div>
    </section>
  );
};

export default About;
