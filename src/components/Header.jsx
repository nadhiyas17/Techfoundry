import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="header-logo" aria-label="TechFoundry home">
          <img src="/assets/logo-transparent.png" alt="TechFoundry" className="logo-img" />
          <span className="logo-text">
            <span className="logo-tech">Tech</span>
            <span className="logo-foundry">Foundry</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav" role="navigation" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/programs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Programs</NavLink>
          <NavLink to="/pay-fee" className={({ isActive }) => isActive ? 'nav-link active pay-fee-link' : 'nav-link pay-fee-link'}>
            Pay Fee 💳
          </NavLink>
          <NavLink to="/scholarship" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Scholarship</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>FAQ</NavLink>
        </nav>

        {/* CTA */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary header-cta">Course Registration</Link>
          <button
            className="hamburger-btn"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className={`hamburger${menuOpen ? ' open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <nav className="mobile-nav">
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/programs" onClick={() => setMenuOpen(false)}>Programs</NavLink>
            <NavLink to="/pay-fee" onClick={() => setMenuOpen(false)}>Pay Fee 💳</NavLink>
            <NavLink to="/scholarship" onClick={() => setMenuOpen(false)}>Scholarship</NavLink>
            <NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
            <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Course Registration</Link>
          </nav>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(4, 9, 26, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          transition: box-shadow 0.2s ease;
        }
        .site-header.scrolled {
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.6);
        }
        .header-inner {
          display: flex;
          align-items: center;
          gap: 1rem;
          height: 68px;
        }
        .header-logo {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-weight: 800;
          font-size: 1.4rem;
          text-decoration: none;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }
        .logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(0, 180, 216, 0.35));
          transition: transform 0.25s ease;
        }
        .header-logo:hover .logo-img {
          transform: scale(1.08) rotate(4deg);
        }
        .logo-text {
          display: inline-flex;
          align-items: center;
          font-weight: 800;
          font-size: 1.4rem;
        }
        .logo-tech {
          background: linear-gradient(135deg, #00d2ff 0%, #0077b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .logo-foundry {
          color: #ffffff;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-left: auto;
        }
        .nav-link {
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--transition), background var(--transition);
        }
        .nav-link:hover {
          color: #00d2ff;
          background: rgba(0, 180, 216, 0.12);
        }
        .nav-link.active {
          color: #38bdf8;
          font-weight: 600;
          background: rgba(0, 180, 216, 0.15);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-left: 1rem;
        }
        .header-cta {
          font-size: 0.9rem;
          padding: 0.5rem 1.2rem;
        }
        /* Hamburger */
        .hamburger-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
        }
        .hamburger {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--text);
          position: relative;
          transition: background 0.2s;
        }
        .hamburger::before, .hamburger::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: var(--text);
          transition: transform 0.25s ease;
        }
        .hamburger::before { top: -6px; }
        .hamburger::after { top: 6px; }
        .hamburger.open { background: transparent; }
        .hamburger.open::before { transform: rotate(45deg) translate(4px, 4px); }
        .hamburger.open::after { transform: rotate(-45deg) translate(4px, -4px); }
        /* Mobile menu */
        .mobile-menu {
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: 1rem 1.5rem 1.5rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-nav a {
          padding: 0.65rem 0.75rem;
          border-radius: var(--radius-sm);
          font-weight: 500;
          color: var(--text-secondary);
          font-size: 1rem;
          transition: background var(--transition), color var(--transition);
        }
        .mobile-nav a:hover {
          background: var(--primary-light);
          color: var(--primary);
        }
        .mobile-nav .btn {
          margin-top: 0.5rem;
          text-align: center;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .header-nav { display: none; }
          .hamburger-btn { display: flex; }
          .header-cta { display: none; }
        }
      `}</style>
    </header>
  )
}
