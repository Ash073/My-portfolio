import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './pages/Achievements';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
              <Footer />
            </>
          }
        />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </>
  );
}

export default App;
