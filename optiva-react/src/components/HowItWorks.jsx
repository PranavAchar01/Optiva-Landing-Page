export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Intercept',
      description: 'Optivia catches every prompt before it reaches Claude or Gemini. The CLI tool sits on top of both providers as a transparent overlay. You install it once; it\'s invisible from then on.',
      code: 'optivia > Build me a login system_'
    },
    {
      number: '02',
      title: 'Score',
      description: 'A POMDP-grounded scoring engine analyzes four signals: scope, ambiguity, risk, and dependency. It produces a complexity score (1–10) and a specificity score (0–1) that drive every downstream decision.',
      code: 'κₜ = round(1 + 9 · (δs + δa + δr + δd) / 4)'
    },
    {
      number: '03',
      title: 'Clarify',
      description: 'If complexity is high and specificity is low, Optivia asks targeted questions — not generic ones. "What language and framework?" not "Can you tell me more?" The Q&A takes 10–15 seconds and turns a 5-word prompt into a structured 200-word brief.',
      code: 'Ask when: κₜ ≥ 7 AND σₜ < 0.5 (always at κₜ = 10)'
    },
    {
      number: '04',
      title: 'Route',
      description: 'Based on task type, Optivia activates the correct slash commands — /plan, /debug, /memory, /loop, /rewind, and more. Conflicts are resolved automatically. The user never has to know these commands exist.',
      code: 'new_code → /plan + /memory  ·  debug → /debug + /rewind'
    },
    {
      number: '05',
      title: 'Execute',
      description: 'The enhanced prompt is sent to Claude Code or Gemini CLI with the right model tier (haiku → opus), the right number of agents (1–3+), and planning mode on or off. Simple prompts get minimal overhead. Complex ones get the full treatment.',
      code: 'claude --model sonnet --effort medium --permission-mode plan'
    }
  ];

  return (
    <section id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">The Pipeline</div>
          <h2 className="section-title">How Optivia works</h2>
          <p className="section-description">
            Every prompt you type passes through five stages before reaching Claude Code or Gemini.
            None of this is visible to you — it happens in milliseconds.
          </p>
        </div>

        <div className="flow">
          {steps.map((step, index) => (
            <div key={index} className="flow-step">
              <div className="flow-number">{step.number}</div>
              <div>
                <h3 className="flow-title">{step.title}</h3>
                <p className="flow-description">{step.description}</p>
                <div className="flow-code">{step.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
