import { FaReact, FaPython, FaJs, FaDatabase, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import Carousel, { type CarouselItem } from "./Carousel";
import styles from "../styles/Skills.module.css";
import { GrMysql } from "react-icons/gr";
import { SiTableau } from "react-icons/si";

const DATA_ANALYSIS_ITEMS: CarouselItem[] = [
  { title: "Python", description: "Data wrangling, automation, and statistical analysis.", id: 1, icon: <FaPython color="black" /> },
  { title: "SQL", description: "Database querying and manipulation.", id: 2, icon: <GrMysql color="black" /> },
  { title: "Data Visualization", description: "Charts and dashboards for insights.", id: 3, icon: <FaDatabase color="black" /> },
  { title: "Tableau", description: "Business intelligence and data visualization.", id: 4, icon: <SiTableau color="black" /> }];

const FRONTEND_ITEMS: CarouselItem[] = [
  { title: "React", description: "Component-based UI development.", id: 1, icon: <FaReact color="black" /> },
  { title: "JavaScript", description: "Dynamic and interactive web features.", id: 2, icon: <FaJs color="black" /> },
  { title: "CSS3", description: "Styling with animations and responsive design.", id: 3, icon: <FaCss3Alt color="black" /> },
  { title: "HTML5", description: "Semantic markup and accessibility.", id: 4, icon: <FaHtml5 color="black" /> }
];

export default function Skills() {
  return (
    <section className={styles["skills-section"]} id="skills">
      <h2 className={styles["skills-title"]}>Skills</h2>
      <div className={styles["skills-cards"]}>
        <div className={styles["skills-category"]}>
          <h3>Data Analysis</h3>
          <Carousel items={DATA_ANALYSIS_ITEMS} baseWidth={300} autoplay loop pauseOnHover />
        </div>
        <div className={styles["skills-category"]}>
          <h3>Frontend Development</h3>
          <div className={styles["skills-carousel"]}>
            <Carousel items={FRONTEND_ITEMS} baseWidth={300} autoplay loop pauseOnHover />
          </div>
        </div>
      </div>
    </section>
  );
}

