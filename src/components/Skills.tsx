import React from 'react';
import styles from '../styles/Skills.module.css';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaLinux, FaFigma,
} from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiPython} from 'react-icons/si';

const SkillsCard: React.FC = () => {
  return (
    <section className={styles['skills-section']}>
    <div className={styles['skills-card']}>
      <h2 className={styles['skills-title']}>Skills</h2>
      <div className={styles['skills-grid']}>
        <div className={styles['skills-column']}>
          <h3 className={styles['skills-label']}>Frontend</h3>
          <ul>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
            <li><FaJs /> JavaScript</li>
            <li><FaReact /> React</li>
            <li><SiTypescript /> TypeScript</li>
          </ul>
        </div>
        <div className={styles['skills-column']}>
          <h3 className={styles['skills-label']}>Backend</h3>
          <ul>
            <li><FaNodeJs /> Node.js</li>
            <li><SiExpress /> Express</li>
            <li><SiMongodb /> MongoDB</li>
            <li><SiPostgresql /> PostgreSQL</li>
            <li><SiPython /> Python</li>
          </ul>
        </div>
        <div className={styles['skills-column']}>
          <h3 className={styles['skills-label']}>Other</h3>
          <ul>
            <li><FaGitAlt /> Git & GitHub</li>
            <li><FaFigma /> Figma</li>
            <li><FaDocker /> Docker</li>
            <li><FaLinux /> Linux</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SkillsCard;

