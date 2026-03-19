export default function Vision() {
  const pillars = [
    {
      number: '01',
      title: 'Trained, not prompted',
      description: 'The current prototype uses a general-purpose Gemini API for question generation and prompt enhancement. The vision is a model trained on thousands of real developer sessions — one that knows how to ask exactly the right questions for a Rails migration, a React refactor, or a Go microservice. No generic output. Surgical precision.'
    },
    {
      number: '02',
      title: 'Cross-tool intelligence',
      description: 'Optiva currently runs on Claude Code and Gemini CLI. The roadmap includes Cursor, GitHub Copilot Workspace, and any tool that accepts a prompt. The same scoring engine, the same Q&A loop, adapted to each execution environment. One optimizer for all your AI coding tools.'
    },
    {
      number: '03',
      title: 'Session memory',
      description: 'Today, each prompt is evaluated in isolation. The vision is persistent session context — Optiva knowing that you\'ve been debugging the same auth module for three turns, understanding the implicit context, and pre-loading the right files and agents without you having to say so.'
    },
    {
      number: '04',
      title: 'Zero friction installation',
      description: 'Today: npm install -g optiva && optiva. That\'s one command. The vision takes it further — auto-detection of your CLI tools, automatic configuration, and a setup flow that takes 30 seconds. Optiva should be invisible from the moment you install it.'
    }
  ];

  return (
    <section id="vision">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">The Vision</div>
          <h2 className="section-title" style={{ maxWidth: '20ch' }}>
            The invisible layer every developer needs
          </h2>
          <p className="section-description">
            The prototype proves the concept. This is where we're going.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar">
              <div className="pillar-number">{pillar.number}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 'var(--space-20)',
          padding: 'var(--space-10)',
          border: '1px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-10)',
          alignItems: 'start'
        }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Built on formal theory</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: '1.75' }}>
              The scoring engine is grounded in POMDP (Partially Observable Markov Decision Process) theory.
              The complexity formula computes a weighted average of four observable signals — scope, ambiguity,
              risk, and dependency — using the same mathematical framework that powers decision-making in robotics
              and autonomous systems.
            </p>
          </div>
          <div className="mono" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
            <div style={{ marginBottom: '8px' }}>// scoring engine</div>
            <div>κₜ = round(1 + 9 · (δs + δa + δr + δd) / 4)</div>
            <div>σₜ = 1 − δa</div>
            <div style={{ marginTop: '10px', marginBottom: '4px' }}>// signals (0.0–1.0 each)</div>
            <div>δs scope       // how much does this touch?</div>
            <div>δa ambiguity  // what's left unsaid?</div>
            <div>δr risk       // what could go wrong?</div>
            <div>δd dependency // how many things are connected?</div>
          </div>
        </div>
      </div>
    </section>
  );
}
