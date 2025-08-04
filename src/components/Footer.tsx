import '../styles/Footer.css';

type FooterProps = {
  messages: string[];
};

const Footer = ({ messages }: FooterProps) => {
  const loopMessages = [...messages, messages[0]];

  return (
    <footer className="footer">
      <div className="message-container">
        <div className="message-list">
          {loopMessages.map((msg, idx) => (
            <div className="message" key={idx}>
              {msg}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
