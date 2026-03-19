export default function Prototype() {
  return (
    <section id="prototype" style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: 'var(--content-default)', margin: '0 auto var(--space-12)' }}>
          <div className="section-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>Product Trailer</div>
          <h2 className="section-title">Watch Optiva in action</h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            The prototype is live. See how Optiva intercepts a prompt, asks targeted questions,
            builds the enhanced version, and routes it to Claude Code with the optimal configuration.
          </p>
        </div>

        <div className="video-container">
          <div className="video-wrapper">
            <video
              controls
              poster="/hero-terminal.png"
              style={{ width: '100%', height: '100%' }}
            >
              <source src="/optiva-prototype.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="video-caption">
            <span>optiva v0.1.0 · prototype demo</span>
            <span>Claude Code + Gemini CLI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
