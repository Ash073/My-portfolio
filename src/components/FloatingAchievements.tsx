import {Link} from 'react-router-dom';
import '../styles/FloatingAchievements.css';

function FloatingAchievements() {
    return (
        <section className="achievements-floating-section" >
            <div className="achievements-floating">
                <h2>Achievements</h2>
                <p>Explore the milestones and awards I've earned along my journey.</p>
                <Link to="https://www.linkedin.com/in/sayyed-ashif-b23704289/" className="more-link">
                    To Know More →
                </Link>
            </div>
        </section>
    );
}

export default FloatingAchievements;
