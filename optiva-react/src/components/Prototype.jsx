export default function Prototype() {
  return (
    <section id="prototype" style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: 'var(--content-default)', margin: '0 auto var(--space-12)' }}>
          <div className="section-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>Trailer</div>
          <h2 className="section-title">See how it works</h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Watch how Optivia intercepts prompts, analyzes complexity, asks the right questions,
            and routes to the optimal model configuration — all in real-time.
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
            <span>optivia v0.1.0 · product trailer</span>
            <span>Claude Code + Gemini CLI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
