// ResumeButton.jsx
import "../styles/ResumeButton.css";

const ResumeButton = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1zmywMeWukoqTn5-sS89ELdEWgACi7UcI/view?usp=sharing" // Replace with your actual resume file path or Google Drive link
      target="_blank"
      rel="noopener noreferrer"
      className="resume-btn"
    >
      Resume
    </a>
  );
};

export default ResumeButton;
