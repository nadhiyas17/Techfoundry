import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/assets/logo-transparent.png" alt="TechFoundry" className="footer-logo-img" />
              <span>
                <span style={{background: 'linear-gradient(135deg, #00d2ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800, fontSize: '1.4rem'}}>Tech</span>
                <span style={{color: '#ffffff', fontWeight: 800, fontSize: '1.4rem'}}>Foundry</span>
              </span>
            </Link>
            <p className="footer-tagline">
              Forging future tech talent through hands-on, industry-driven training.
            </p>
            <div className="footer-contact-info">
              <p>📍 Rent A Desk, 2nd Floor, Serenity Square,<br />Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad</p>
              <p>
                📞{' '}
                <a href="tel:+918309576596">8309576596</a>
                {' '}•{' '}
                <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/pay-fee" style={{color: '#38bdf8', fontWeight: 600}}>Pay Fee Online 💳</Link></li>
              <li><Link to="/scholarship">Scholarship</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Course Registration</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">Programs</h4>
            <ul className="footer-links">
              <li><Link to="/programs/ai-engineering">AI Engineering</Link></li>
              <li><Link to="/programs/web-development">Web Development</Link></li>
              <li><Link to="/programs/software-engineering">Software Engineering</Link></li>
            </ul>
            <h4 className="footer-heading" style={{marginTop: '1.5rem'}}>Connect</h4>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© {year} TechFoundry. All Rights Reserved.</p>
          <p className="footer-disclaimer">
            Salary outcomes are not guaranteed and depend on individual performance, skill level, and market conditions.
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: linear-gradient(180deg, #07132b 0%, #050e24 100%);
          color: #cbd5e1;
          padding: 4rem 0 2rem;
          margin-top: auto;
          border-top: 1px solid #1e3a6d;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
        }
        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 800;
          font-size: 1.3rem;
          color: #fff;
          text-decoration: none;
          margin-bottom: 0.75rem;
        }
        .footer-logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(0, 210, 255, 0.45));
        }
        .footer-tagline {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .footer-contact-info p {
          color: #94a3b8;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        .footer-contact-info a {
          color: #38bdf8;
          text-decoration: none;
        }
        .footer-contact-info a:hover { text-decoration: underline; color: #00e5ff; }
        .footer-heading {
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-links a {
          color: #94a3b8;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-links a:hover { color: #38bdf8; }
        .footer-divider {
          border: none;
          border-top: 1px solid #1e3a6d;
          margin: 2.5rem 0 1.5rem;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-bottom p {
          color: #6b7280;
          font-size: 0.82rem;
        }
        .footer-disclaimer {
          max-width: 500px;
          text-align: right;
          font-style: italic;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom { flex-direction: column; }
          .footer-disclaimer { text-align: left; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
