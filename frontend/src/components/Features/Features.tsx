import "./Features.css";

function Features() {
  return (
    <section className="features">
      <h2>Why Project Hive?</h2>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>☁️ Cloud Native</h3>
          <p>Deploy applications using modern cloud technologies.</p>
        </div>

        <div className="feature-card">
          <h3>🐳 Docker Ready</h3>
          <p>Containerize applications for consistent deployments.</p>
        </div>

        <div className="feature-card">
          <h3>☸️ Kubernetes</h3>
          <p>Orchestrate containers efficiently at scale.</p>
        </div>

        <div className="feature-card">
          <h3>🤖 AI Powered</h3>
          <p>Integrate local AI tools to improve productivity.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
