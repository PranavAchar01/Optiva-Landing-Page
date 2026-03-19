import { useState } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      // Add your actual form submission logic here
    }
  };

  return (
    <section id="waitlist" className="waitlist">
      <div className="container-narrow">
        <div className="section-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>Early Access</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          Be first in line.
        </h2>
        <p className="section-description" style={{ textAlign: 'center', margin: '0 auto var(--space-10)' }}>
          The prototype is working. We're training the model. Join the waitlist and we'll reach out when early access opens.
        </p>

        {!submitted ? (
          <>
            <form onSubmit={handleSubmit} className="waitlist-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="waitlist-input"
                placeholder="you@example.com"
                required
              />
              <button type="submit" className="btn-primary">
                Get Access
              </button>
            </form>
            <p className="waitlist-note">
              No spam. No marketing. Just one email when it's ready.
            </p>
          </>
        ) : (
          <div className="waitlist-success">
            ✓ You're on the list.
          </div>
        )}
      </div>
    </section>
  );
}
