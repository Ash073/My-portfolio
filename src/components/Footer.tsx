import { useEffect, useState } from "react";
import "../styles/Footer.css"; // For styling

const messages = [
  "© 2025 Sayyed Ashif⚡",
  "Thanks for visiting my portfolio~",
  "Feel free to connect with me!❤️",
];

export default function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-container">
      <div className="rolling-text">{messages[index]}</div>
    </footer>
  );
}
