import 'aos/dist/aos.css';
import '../styles/Project.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section" >
      <div className="projects-card">
        <h2 className="projects-heading">Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>1. Mood-Based Music Recommender</h3>
            <p>A full-stack web app using sentiment analysis and the Spotify API to recommend songs based on your typed mood.</p>
          </div>
          <div className="project-item">
            <h3>2. Real-time Chat App</h3>
            <p>Electron-powered cross-platform chat app with React, Node.js, MongoDB, and Socket.io.</p>
          </div>
          <div className="project-item">
            <h3>3. Data Pipeline with Airflow & NiFi</h3>
            <p>Built scalable ETL pipelines using Apache Airflow and NiFi to process and monitor real-time data streams.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
