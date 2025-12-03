import React from "react";
import ProjectCard from "./ProjectCard.tsx";
import styles from "../styles/ProjectCard.module.css";
import bgImg from "../assets/MoodSync.png";

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "MoodSync Website",
      description: "Unlock your perfect playlist by selecting the mood that matches your current vibe.",
      image: bgImg,
      githubLink: "https://github.com/yourusername/moodsync",
      liveDemoLink: "https://moodsync.com",
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectGrid}>
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
