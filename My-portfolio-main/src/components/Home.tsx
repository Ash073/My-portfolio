import React from 'react';
import '../styles/Home.css';
import TextType from './TextType';
import ResumeButton from './ResumeButton';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 1 + i * 0.05, // Increased width for visibility
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="white"
            strokeWidth={path.width}
            strokeOpacity={0.3 + path.id * 0.02} // Increased opacity for visibility
            fill="none"
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.4, 0.7, 0.4], // More visible opacity range
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const Home: React.FC = () => {
  // Create animated values for the glowing effect
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useTransform(glowX, [0, 100], [0.3, 0.7]);

  // Animate the glow position
  useEffect(() => {
    const interval = setInterval(() => {
      animate(glowX, Math.random() * 100, { duration: 3 });
      animate(glowY, Math.random() * 100, { duration: 3 });
    }, 3000);

    return () => clearInterval(interval);
  }, [glowX, glowY]);

  return (
    <div className="home-container">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Montserrat:wght@800&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />

      {/* Animated background elements */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      
      {/* Glowing orb effect */}
      <motion.div 
        className="glowing-orb"
        style={{
          x: glowX,
          y: glowY,
          opacity: glowOpacity,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Particle effects */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
              x: `${Math.random() * 100 - 50}px`
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Overlay text */}
      <div className="orb-text relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <TextType
              className="name-text"
              text={["Hi, I'm", "Sayyed Ashif"]}
              typingSpeed={300}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.div>
          
          <motion.h1 
            className="fading-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Full-Stack Developer | Data Analyst
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <ResumeButton />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;