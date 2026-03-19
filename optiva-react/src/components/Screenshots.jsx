export default function Screenshots() {
  const screenshots = [
    {
      src: '/screenshot-analysis.png',
      title: 'Analysis + Execution Plan',
      tag: 'Scoring engine · model routing · agent selection',
      alt: 'Optivia analysis panel showing complexity score 8/10, specificity 30%, and execution plan with 3 agents'
    },
    {
      src: '/screenshot-qa.png',
      title: 'Clarifying Questions',
      tag: 'Prompt interceptor · targeted Q&A · enhancement',
      alt: 'Optivia Q&A interceptor asking 3 targeted clarifying questions about a login system prompt'
    },
    {
      src: '/screenshot-scores.png',
      title: 'Score Comparison',
      tag: 'Trivial pass-through vs. full multi-agent',
      alt: 'Side-by-side comparison of trivial vs complex prompt routing decisions'
    }
  ];

  return (
    <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: 'var(--content-default)', margin: '0 auto var(--space-12)' }}>
          <div className="section-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>From the prototype</div>
          <h2 className="section-title">The actual interface</h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            These are real screenshots from the working CLI prototype — not mockups.
          </p>
        </div>

        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-card">
              <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
              <div className="screenshot-caption">
                <div className="screenshot-title">{screenshot.title}</div>
                <div className="screenshot-tag">{screenshot.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
