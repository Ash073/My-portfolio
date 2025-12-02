import React from "react";
import LogoLoop from "./LogoLoop";
import "../styles/TechnologiesAndTools.css";

const TechnologiesAndTools: React.FC = () => {
  return (
    <section className="technologies-section" id="technologies">
      <div className="technologies-container">
        <h2 className="technologies-title">Technologies & Tools</h2>
        <div className="technologies-content">
          <LogoLoop />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesAndTools;