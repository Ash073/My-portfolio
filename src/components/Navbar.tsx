import React from "react";
import "../styles/Navbar.css";
import GooeyNav from "./GooeyNav";

const Navbar: React.FC = () => {
  const items = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Contact", href: "contact" },
  ];

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Left side: Name → scroll to home */}
        <div
          className="nav-left"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          Sayyed Ashif
        </div>
        <div className="nav-right">
          <GooeyNav
            items={items.map((item) => ({
              label: item.label,
              href: `#${item.href}`,
            }))}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
