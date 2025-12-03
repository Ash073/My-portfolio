import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import SkillsCard from './components/Skills';
//import FloatingAchievements from './components/FloatingAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';
//import SplashCursor from './components/SplashCursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
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
              <Navbar />
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="projects"><Projects /></div>
              <div id="skills"><SkillsCard /></div>
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