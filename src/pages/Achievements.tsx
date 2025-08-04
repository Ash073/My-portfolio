import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Achievements.css';
import bgImage from '../assets/image2.jpg';
function Achievements() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="achievements-section">
       <img className="background-image" src={bgImage} alt="Background" />
      <h2 className="achievement-heading">My Achievements</h2>
      <ul>
        <li>🏅 Top 1% in College Coding Contest</li>
        <li>📜 Completed 200-Day Full-Stack + Data Science Roadmap</li>
        <li>🌐 Built and deployed 5+ professional web apps</li>
        <li>🎓 Certifications in Python, SQL, and Machine Learning</li>
      </ul>
    </div>
  );
}

export default Achievements;
