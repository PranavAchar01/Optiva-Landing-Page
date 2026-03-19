export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <img src="/Logo.png" alt="Optiva" className="footer-logo-img" />
            <span>Optiva</span>
          </div>
          <div className="footer-copy">© 2026 Optiva. Prototype v0.1.0. All rights reserved.</div>
        </div>

        <ul className="footer-links">
          <li><a href="#how-it-works" className="footer-link">How it works</a></li>
          <li><a href="#features" className="footer-link">Features</a></li>
          <li><a href="#vision" className="footer-link">Vision</a></li>
          <li><a href="#waitlist" className="footer-link">Waitlist</a></li>
        </ul>
      </div>
    </footer>
  );
}
