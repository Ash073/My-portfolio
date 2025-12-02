import { Routes, Route } from 'react-router-dom';
import GooeyNav from './components/GooeyNav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import TechnologiesAndTools from './components/TechnologiesAndTools';
//import FloatingAchievements from './components/FloatingAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';
//import SplashCursor from './components/SplashCursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import GlobalBackgroundAnimation from './components/GlobalBackgroundAnimation';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Define navigation items for GooeyNav
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Technologies", href: "#technologies" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* <GlobalBackgroundAnimation /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
              >
              <GooeyNav items={navItems} />
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="projects"><Projects /></div>
              <TechnologiesAndTools />
              {/* <div id="achievements"><FloatingAchievements /></div> */}
              <div id="contact"><Contact /></div>
              <Footer />
              </ClickSpark>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;