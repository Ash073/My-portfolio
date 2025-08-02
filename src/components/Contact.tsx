import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css'; 
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <p>Email: sayyedashif73@gmail.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/sayyed-ashif-b23704289/">Sayyed Ashif</a></p>
      <p>GitHub: <a href="https://github.com/Ash073">Ash073</a></p>
    </section>
  );
}

export default Contact;
