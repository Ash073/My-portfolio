import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaPython, FaJs, FaDatabase, FaCss3Alt, FaHtml5, FaGithub, FaAws } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTableau, SiKaggle, SiGooglecloud, SiPycharm, SiMongodb } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import PowerBiIcon from "./ui/powerbi-icon";
import '../styles/LogoLoop.css';

interface LogoItem {
  icon: React.ReactNode;
  name: string;
}

const LOGO_ITEMS: LogoItem[] = [
  { icon: <FaReact size={60} color="#61DAFB" />, name: "React" },
  { icon: <FaPython size={60} color="#3776AB" />, name: "Python" },
  { icon: <FaJs size={60} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <GrMysql size={60} color="#4479A1" />, name: "MySQL" },
  { icon: <SiMongodb size={60} color="green" />, name: "MongoDB" },
  { icon: <SiTableau size={60} color="#FF6D00" />, name: "Tableau" },
  { icon: <FaCss3Alt size={60} color="#1572B6" />, name: "CSS3" },
  { icon: <FaHtml5 size={60} color="#E34F26" />, name: "HTML5" },
  { icon: <PowerBiIcon size={60} />, name: "Power BI" },
  { icon: <FaGithub size={60} color="#D8D8D8" />, name: "GitHub" },
  { icon: <SiKaggle size={60} color="#20BEFF" />, name: "Kaggle" },
  { icon: <SiGooglecloud size={60} color="#4285F4" />, name: "Google Cloud" },
  { icon: <FaAws size={60} color="#FF9900" />, name: "AWS" },
  { icon: <VscVscodeInsiders size={60} color="#007ACC" />, name: "VS Code" },
  { icon: <SiPycharm size={60} color="#FC9867" />, name: "PyCharm" },
];

const LogoLoop: React.FC = () => {
  return (
    <div className="logo-loop-container">
      <Marquee 
        gradient={false} 
        speed={40} 
        pauseOnHover={true}
        className="marquee-container"
        direction="left"
      >
        <div className="logo-items-wrapper">
          {LOGO_ITEMS.map((item, index) => (
            <div key={index} className="logo-item">
              <div className="logo-icon">{item.icon}</div>
              <div className="logo-name">{item.name}</div>
            </div>
          ))}
          {/* Duplicate items for seamless loop */}
          {LOGO_ITEMS.map((item, index) => (
            <div key={`duplicate-${index}`} className="logo-item">
              <div className="logo-icon">{item.icon}</div>
              <div className="logo-name">{item.name}</div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LogoLoop;