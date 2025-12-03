import React from "react";
import styles from "../styles/ProjectCard.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveDemoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <section className={styles.projectCard}>
        <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.links}>
            <a
                href="https://github.com/Ash073/MoodSync"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
            >
                <FaGithub size={22} />
            </a>
            <a
                href="https://moodsync-12.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
            >
                <FaExternalLinkAlt size={20} />
            </a>
            </div>
        </div>
        </div>
  </section>
  );
};

export default ProjectCard;
