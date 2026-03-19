export default function ScoreTable() {
  const scores = [
    {
      score: '1–3',
      complexity: 'Trivial',
      questions: 'Never',
      model: 'Fastest · haiku',
      agents: '1',
      commands: 'None'
    },
    {
      score: '4–5',
      complexity: 'Simple',
      questions: 'No',
      model: 'Fast · haiku',
      agents: '1',
      commands: '/memory'
    },
    {
      score: '6–7',
      complexity: 'Moderate',
      questions: 'Maybe',
      model: 'Balanced · sonnet',
      agents: '1–2',
      commands: '/plan /memory'
    },
    {
      score: '8–9',
      complexity: 'Complex',
      questions: 'Yes',
      model: 'Strong · sonnet',
      agents: '2–3',
      commands: '/plan /debug /rewind'
    },
    {
      score: '10',
      complexity: 'Very complex',
      questions: 'Always',
      model: 'Strongest · opus',
      agents: '3+',
      commands: '/plan /loop /rewind'
    }
  ];

  return (
    <section style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Scoring Engine</div>
          <h2 className="section-title">Score → Action</h2>
          <p className="section-description">
            Every prompt gets scored. The score determines everything downstream. Here's the full routing table.
          </p>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Score</th>
                <th>Complexity</th>
                <th>Questions?</th>
                <th>Model tier</th>
                <th>Agents</th>
                <th>Commands</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((row, index) => (
                <tr key={index}>
                  <td><span className="score-badge">{row.score}</span></td>
                  <td>{row.complexity}</td>
                  <td>{row.questions}</td>
                  <td>{row.model}</td>
                  <td>{row.agents}</td>
                  <td><span className="mono" style={{ fontSize: 'var(--text-xs)' }}>{row.commands}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
