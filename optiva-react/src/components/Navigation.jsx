export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <img src="/Logo.png" alt="Optivia" className="nav-logo-img" />
          <span>Optivia</span>
        </a>

        <ul className="nav-links">
          <li><a href="#how-it-works" className="nav-link">How it works</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#prototype" className="nav-link">Prototype</a></li>
          <li><a href="#vision" className="nav-link">Vision</a></li>
        </ul>

        <a href="#waitlist" className="nav-cta">Join Waitlist</a>
      </div>
    </nav>
  );
}
