export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">Prototype · v0.1.0</span>

        <h1 className="hero-heading">
          Your prompt,<br />perfected.
        </h1>

        <p className="hero-subheading">
          Optivia sits between you and Claude Code or Gemini CLI. It intercepts every prompt,
          scores its complexity, asks the right clarifying questions, routes the optimal slash commands,
          and executes with precisely the right model and agent setup.
        </p>

        <div className="hero-actions">
          <a href="#waitlist" className="btn-primary">
            Join the Waitlist
          </a>
          <a href="#how-it-works" className="btn-secondary">
            See how it works →
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">1–10</div>
            <div className="stat-label">Complexity scale</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24</div>
            <div className="stat-label">Tests passing</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Max agents spawned</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">CLI providers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
