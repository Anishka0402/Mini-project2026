import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">HeritageAI</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
        </div>
        <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Protecting Our Heritage with AI</h1>
          <p className="hero-subtitle">
            Real-time monitoring of monuments using IoT sensors and machine learning
          </p>
          <div className="hero-buttons">
            <Link to="/dashboard" className="btn btn-primary">View Dashboard</Link>
            <a href="#features" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Monitoring</h3>
            <p>Track environmental conditions live</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Risk Prediction</h3>
            <p>Predict deterioration before it happens</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Smart Alerts</h3>
            <p>Get notified when thresholds are exceeded</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💚</div>
            <h3>Site Health Index</h3>
            <p>Overall health score for each monument</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">AJ</div>
            <h3>Anishka Jain</h3>
            <p>IoT & AI Developer</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">BA</div>
            <h3>Bhoomika Agarwal</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">SS</div>
            <h3>Shraddha Singh</h3>
            <p>Frontend & Documentation</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 HeritageAI. Preserving History with Technology.</p>
      </footer>
    </div>
  );
}

export default HomePage;
