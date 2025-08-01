import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Achievements from './pages/Achievements.js';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Contact />
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