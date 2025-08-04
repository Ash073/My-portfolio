import { Routes, Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import FloatingAchievements from './components/FloatingAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './pages/Achievements';
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
              {/* <Navbar /> */}
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="projects"><Projects /></div>
              <div id="Achievements"><FloatingAchievements /></div>
              <div id="contact"><Contact /></div>
              <Footer messages={[
                "© 2025 Sayyed Ashif",
                "Thanks for visiting my portfolio",
                "Feel free to connect with me!",
              ]} />
            </>
          }
        />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </>
  );
}

export default App;
