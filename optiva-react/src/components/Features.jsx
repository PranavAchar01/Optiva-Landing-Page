export default function Features() {
  const features = [
    {
      number: '01',
      title: 'Prompt Hijacking',
      description: 'Intercepts every prompt before Claude Code or Gemini executes anything. Scores it on complexity (1–10) and specificity (0–1). If complex and vague, it pauses and asks targeted questions that turn a 5-word prompt into a fully structured, context-rich brief. If the prompt is already specific, it passes straight through with zero interruption.',
      wide: true,
      visual: (
        <>
          <div style={{ color: '#737373', marginBottom: '6px', fontSize: '11px' }}>BEFORE → AFTER</div>
          <div style={{ marginBottom: '4px' }}>"Build me a login system" · 5 words</div>
          <div>"Build a Node.js + Express authentication system with Google OAuth and email/password login using bcrypt. PostgreSQL schema with users, sessions. JWT refresh tokens. Error handling for rate limiting." · 38 words</div>
        </>
      )
    },
    {
      number: '02',
      title: 'Slash Command Routing',
      description: 'Every prompt maps to the optimal set of Claude Code and Gemini CLI flags. Conflicts resolved automatically. The user never needs to know any of these commands exist.',
      visual: (
        <>
          <div style={{ color: '#737373', fontSize: '11px', marginBottom: '6px' }}>TASK → COMMANDS</div>
          <div style={{ marginBottom: '3px' }}>new_code → /plan /memory</div>
          <div style={{ marginBottom: '3px' }}>debug → /debug /rewind /memory</div>
          <div style={{ marginBottom: '3px' }}>refactor → /plan /batch /review</div>
          <div>long → /plan /compact /loop</div>
        </>
      )
    },
    {
      number: '03',
      title: 'Dynamic Agents & Models',
      description: 'Reads the complexity score and decides: which model tier, how many agents, and whether planning mode is needed. Uses the minimum resources for a great result. Switches models mid-session if complexity drifts.',
      tall: true,
      visual: (
        <>
          <div style={{ color: '#737373', fontSize: '11px', marginBottom: '8px' }}>SCORE → CONFIGURATION</div>
          <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
            <span>1–3</span>
            <span style={{ color: '#737373' }}>haiku · 1 agent · no plan</span>
          </div>
          <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
            <span>4–5</span>
            <span style={{ color: '#737373' }}>haiku · 1 agent · no plan</span>
          </div>
          <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
            <span>6–7</span>
            <span style={{ color: '#737373' }}>sonnet · 1–2 agents</span>
          </div>
          <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
            <span>8–9</span>
            <span style={{ color: '#737373' }}>sonnet · 2–3 agents · plan ON</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>10</span>
            <span style={{ color: '#737373' }}>opus · 3+ agents · plan ON</span>
          </div>
        </>
      )
    },
    {
      number: '04',
      title: 'Two Providers',
      description: 'Works as an overlay on both Claude Code and Gemini CLI. Switch with a single env var. Same scoring engine, same Q&A loop — different flag translation layer.',
      visual: (
        <>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, textAlign: 'center', padding: '8px', border: '1px solid #e5e5e5' }}>
              <div style={{ fontWeight: '600', marginBottom: '3px' }}>Claude</div>
              <div style={{ color: '#737373', fontSize: '10px' }}>--effort --permission-mode</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center', padding: '8px', border: '1px solid #e5e5e5' }}>
              <div style={{ fontWeight: '600', marginBottom: '3px' }}>Gemini</div>
              <div style={{ color: '#737373', fontSize: '10px' }}>--approval-mode --yolo</div>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <section id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Three Core Features</div>
          <h2 className="section-title">What Optivia does</h2>
          <p className="section-description">
            The prototype focuses entirely on three behaviors. Every component in the codebase serves exactly these three things.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${feature.wide ? 'feature-wide' : ''} ${feature.tall ? 'feature-tall' : ''}`}
            >
              <div className="feature-number">{feature.number}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              {feature.visual && (
                <div className="feature-visual">
                  {feature.visual}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
