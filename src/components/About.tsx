import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css'; // External CSS for styling

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-card" data-aos="fade-up">
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
