import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const FOUNDERS = [
  {
    name: 'Kalyan Chakravarthy',
    role: 'Co-founder & CEO',
    bio: 'With over 25 years in technology leadership, Kalyan brings deep expertise in enterprise software, AI systems, and building high-performance tech teams across global organizations.',
  },
  {
    name: 'Lakshmi Subramanian',
    role: 'Co-founder & Head of Programs',
    bio: 'A veteran educator and technologist from Chennai who has designed world-class engineering learning curricula for Fortune 500 enterprises and academic institutions across South Asia.',
  },
  {
    name: 'Pradeep Kumar Varma',
    role: 'Co-founder & CTO',
    bio: 'A seasoned cloud architect with deep expertise in distributed systems, scalable microservices, and AI infrastructure, having led engineering teams at top tech enterprises.',
  },
]

const TIMELINE = [
  { step: '01', label: 'Learn', desc: 'Master fundamentals through structured, hands-on lessons with real-world context.' },
  { step: '02', label: 'Build', desc: 'Apply skills immediately by building real projects from week one.' },
  { step: '03', label: 'Apply', desc: 'Tackle industry-relevant problems and challenges alongside peers.' },
  { step: '04', label: 'Grow', desc: 'Land your role with placement support, mock interviews, and employer connections.' },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us — TechFoundry'
  }, [])

  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">About TechFoundry</span>
          <h1>Built on a Simple Belief</h1>
          <p className="page-hero-sub">
            Technology skills should lead to <strong>real-world outcomes</strong> — not just certificates.
          </p>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section">
        <div className="container mv-grid">
          <div className="mv-card accent-blue">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To <strong>bridge the gap between conventional education and real-world employability</strong> by delivering hands-on, outcome-driven engineering training that equips learners with the practical skills top employers actually demand.
            </p>
            <ul className="mv-points">
              <li>
                <span className="mv-check">✓</span>
                <div>
                  <strong>Hands-On, Project-First Pedagogy:</strong> Replace rote lectures with production-grade coding and live deployments from day one.
                </div>
              </li>
              <li>
                <span className="mv-check">✓</span>
                <div>
                  <strong>Direct Industry Mentorship:</strong> Weekly 1:1 sessions, rigorous PR-style code reviews, and personal career direction from seasoned tech leads.
                </div>
              </li>
              <li>
                <span className="mv-check">✓</span>
                <div>
                  <strong>End-to-End Placement Support:</strong> Dedicated resume optimization, mock technical & HR interviews, and warm employer referrals.
                </div>
              </li>
              <li>
                <span className="mv-check">✓</span>
                <div>
                  <strong>Equal Opportunity Access:</strong> Democratize tech careers with merit-based scholarships for deserving talent facing financial constraints.
                </div>
              </li>
            </ul>
          </div>

          <div className="mv-card accent-green">
            <div className="mv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              To become the premier tech talent launchpad recognized globally by industry leaders for producing adaptive, job-ready builders who architect and scale transformative technologies.
            </p>
            <ul className="mv-points">
              <li>
                <span className="mv-check">✓</span>
                <div>
                  <strong>Global Standard of Excellence:</strong> Establish a trusted industry benchmark for high-caliber full-stack, AI, and systems engineers.
                </div>
              </li>
              <li>
                <span className="mv-check">✓</span>
                <div>
                  <strong>Empowering Non-Traditional Paths:</strong> Prove that motivation, aptitude, and practical rigor outweigh traditional academic pedigree.
                </div>
              </li>
              <li>
                <span className="mv-check">✓</span>
                <div>
                  <strong>Cultivating Lifelong Builders:</strong> Nurture resilient problem solvers who stay ahead of fast-evolving AI and technological revolutions.
                </div>
              </li>
              <li>
                <span className="mv-check">✓</span>
                <div>
                  <strong>Thriving Tech Community:</strong> Build an active, collaborative ecosystem of alumni, tech leaders, hiring partners, and innovators.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="section section-alt">
        <div className="container story-grid">
          <div>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Why TechFoundry Exists</h2>
            <p style={{marginBottom: '1rem'}}>
              TechFoundry was founded by three seasoned technology professionals who saw a growing disconnect:
              thousands of graduates with degrees, but few with the practical skills to contribute from day one.
            </p>
            <p style={{marginBottom: '1rem'}}>
              They built TechFoundry to fix that — not through traditional lectures or passive coursework,
              but through a forge model: intense, project-driven, mentor-guided training that produces
              professionals who can actually <em>build things</em>.
            </p>
            <p>
              With a combined 25+ years of experience in leading technology organizations, our founders
              know exactly what the industry expects — and they've built every program around those expectations.
            </p>
          </div>
          <div className="story-img-wrap">
            <img src="/assets/logo-full.png" alt="TechFoundry — Forging Future Tech Talent" className="story-img" />
          </div>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Learn → Build → Apply → Grow</h2>
            <p className="section-subtitle" style={{margin: '0 auto'}}>
              A structured four-phase methodology that mirrors how professionals actually develop in the field.
            </p>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div key={t.step} className="timeline-item">
                <div className="timeline-step">{t.step}</div>
                <div className="timeline-content">
                  <h4>{t.label}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDERS ===== */}
      <section className="section section-alt">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet the Founders</h2>
            <p className="section-subtitle" style={{margin: '0 auto'}}>
              TechFoundry is led by three experienced professionals with a combined 25+ years in the IT industry —
              across enterprise software, cloud architecture, and technology education.
            </p>
          </div>
          <div className="founders-grid">
            {FOUNDERS.map((f, i) => (
              <article key={i} className="founder-card">
                <div className="founder-card-inner">
                  <div className="founder-badge-row">
                    <span className="founder-tag">Leadership</span>
                  </div>
                  <h3 className="founder-name">{f.name}</h3>
                  <p className="founder-role">{f.role}</p>
                  <div className="founder-divider" />
                  <p className="founder-bio">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="section">
        <div className="container what-we-do-grid">
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Forging Tech Talent</h2>
            <ul className="check-list">
              <li>Industry-relevant training in AI, Web Development & Software Engineering</li>
              <li>Real-world, project-based learning from day one</li>
              <li>Career-focused mentorship from working professionals</li>
              <li>Building job-ready portfolios — not just theoretical knowledge</li>
              <li>Placement prep: resume review, mock interviews, employer connections</li>
              <li>Talent scholarship program for high-potential learners</li>
            </ul>
          </div>
          <div className="our-promise">
            <h3>Our Promise</h3>
            <p>
              At TechFoundry, we are committed to <strong>forging future tech talent</strong> — equipping learners
              not just to learn technology, but to <strong>build with it, innovate with it, and succeed with it</strong>.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{marginTop: '1.5rem', display: 'inline-flex'}}>
              Start Your Journey →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .page-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .page-hero h1 { margin: 0.5rem 0; color: #fff; }
        .page-hero-sub {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-top: 0.5rem;
        }
        /* Mission/Vision */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .mv-card {
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .accent-blue { background: #081738; border-color: #1e3f7a; }
        .accent-green { background: #071c32; border-color: #174a68; }
        .mv-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .mv-card h3 { margin-bottom: 0.75rem; color: #fff; }
        .mv-card p { color: var(--text-secondary); line-height: 1.65; }
        .mv-points {
          list-style: none;
          padding: 0;
          margin: 1.25rem 0 0;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255,255,255,0.15);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mv-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }
        .mv-points strong {
          color: #fff;
          font-weight: 600;
        }
        .mv-check {
          color: #00d2ff;
          font-weight: 700;
          font-size: 0.95rem;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .accent-green .mv-check {
          color: #34d399;
        }
        /* Story */
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .story-grid p { line-height: 1.7; color: var(--text-secondary); }
        .story-img-wrap { display: flex; justify-content: center; }
        .story-img { max-width: 380px; border-radius: var(--radius-lg); }
        /* Timeline */
        .timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          top: 28px;
          left: calc(12.5% + 20px);
          right: calc(12.5% + 20px);
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          z-index: 0;
        }
        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .timeline-step {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: #fff;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 4px 16px rgba(0, 180, 216, 0.4);
        }
        .timeline-content h4 { margin-bottom: 0.4rem; color: #fff; }
        .timeline-content p { font-size: 0.88rem; color: var(--text-secondary); }
        /* Founders */
        .founders-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .founder-card {
          background: linear-gradient(180deg, #091a3a 0%, #061226 100%);
          border: 1px solid #1a325c;
          border-radius: var(--radius-lg);
          padding: 2.25rem 1.75rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .founder-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          opacity: 0.8;
        }
        .founder-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 210, 255, 0.45);
          box-shadow: 0 16px 36px rgba(0, 180, 216, 0.15);
        }
        .founder-card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
        }
        .founder-badge-row {
          margin-bottom: 1.25rem;
        }
        .founder-tag {
          display: inline-block;
          background: rgba(0, 180, 216, 0.12);
          color: #00d2ff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          border: 1px solid rgba(0, 210, 255, 0.3);
        }
        .founder-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }
        .founder-role {
          color: #00d2ff;
          font-weight: 600;
          font-size: 0.9rem;
          margin: 0 0 1rem;
          letter-spacing: 0.01em;
        }
        .founder-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          margin: 0 auto 1.25rem;
          border-radius: 2px;
        }
        .founder-bio {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
        }
        /* What we do */
        .what-we-do-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .check-list {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .check-list li {
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.55;
        }
        .check-list li::before {
          content: '✅';
          position: absolute;
          left: 0;
          font-size: 0.85rem;
        }
        .our-promise {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 60%, #0077b6 100%);
          border: 1px solid #1e3a6d;
          color: #fff;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
        }
        .our-promise h3 { color: #fff; margin-bottom: 1rem; }
        .our-promise p { color: rgba(255,255,255,0.85); line-height: 1.65; }
        @media (max-width: 900px) {
          .mv-grid, .story-grid, .what-we-do-grid { grid-template-columns: 1fr; }
          .founders-grid { grid-template-columns: 1fr 1fr; }
          .timeline { grid-template-columns: 1fr 1fr; }
          .timeline::before { display: none; }
          .story-img-wrap { display: none; }
        }
        @media (max-width: 600px) {
          .founders-grid { grid-template-columns: 1fr; }
          .timeline { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}
