import React from "react";
import styles from "../styles/Skills.module.css";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiJavascript } from "react-icons/si";

const SkillsCard: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
    <div className={styles.skillsCard}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.iconsGrid}>
        <div className={styles.skill}><FaReact /> React</div>
        <div className={styles.skill}><SiTypescript /> TypeScript</div>
        <div className={styles.skill}><SiJavascript /> JavaScript</div>
        <div className={styles.skill}><FaNodeJs /> Node.js</div>
        <div className={styles.skill}><SiMongodb /> MongoDB</div>
        <div className={styles.skill}><FaPython /> Python</div>
        <div className={styles.skill}><FaDatabase /> SQL</div>
        <div className={styles.skill}><FaGithub /> GitHub</div>
      </div>
    </div>
    </section>
  );
};

export default SkillsCard;
