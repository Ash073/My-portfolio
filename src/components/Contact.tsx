import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>Let’s connect!<br /> Reach out through any of these platforms:</p>

        <div className="contact-buttons">
          <a
            href="mailto:sayyedashif73@gmail.com"
            className="contact-btn gmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" size={20} />E-Mail
          </a>

          <a
            href="https://www.linkedin.com/in/sayyed-ashif-b23704289/"
            className="contact-btn linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" size={20} />LinkedIn
          </a>

          <a
            href="https://github.com/Ash073"
            className="contact-btn github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" size={20} />GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

