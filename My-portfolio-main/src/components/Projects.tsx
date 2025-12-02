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
      githubLink: "https://github.com/Ash073/MoodSync",
      liveDemoLink: "https://moodsync-12.onrender.com/",
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio website built with React and TypeScript.",
      image: bgImg,
      githubLink: "https://github.com/yourusername/portfolio",
      liveDemoLink: "https://portfolio.com",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with charts and graphs.",
      image: bgImg,
      githubLink: "https://github.com/yourusername/dashboard",
      liveDemoLink: "https://dashboard.com",
    },
  ];

  return (
    <section className={styles.projectsSection} id="projects">
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