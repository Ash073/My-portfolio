"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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
    width: 1 + i * 0.05,
  }));

  return (
    <>
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="white"
          strokeWidth={path.width}
          strokeOpacity={0.3 + path.id * 0.02}
          fill="none"
          initial={{ pathLength: 0.3, opacity: 0.4 }}
          animate={{
            pathLength: 1,
            opacity: [0.4, 0.7, 0.4],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

const GlobalBackgroundAnimation: React.FC = () => {
  const [documentHeight, setDocumentHeight] = useState(2000);
  
  useEffect(() => {
    // Calculate total document height
    const updateHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      setDocumentHeight(height);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        backgroundColor: '#000000',
        zIndex: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <svg
        className="w-full h-full absolute top-0 left-0"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: '100%',
          height: `${documentHeight}px`,
          minHeight: '100vh',
          position: 'absolute',
        }}
      >
        <title>Background Paths</title>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </svg>
    </div>
  );
};

export default GlobalBackgroundAnimation;
