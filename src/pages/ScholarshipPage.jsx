import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const STEPS = [
  { icon: '📝', title: 'Register Your Interest', desc: 'Share your email or WhatsApp us. Our team will reach out within 24 hours to guide you through the process.' },
  { icon: '📊', title: 'Assessment', desc: 'Complete a short online assessment to help us understand your current skill level and potential. No coding required for the initial round.' },
  { icon: '🗣️', title: 'Interview', desc: 'A brief conversation with our team to assess your motivation, aptitude, and commitment to the program.' },
  { icon: '🎓', title: 'Selection & Offer', desc: 'Shortlisted candidates receive a full scholarship covering the entire AI Engineering program — no fees whatsoever.' },
]

const ELIGIBILITY = [
  'Demonstrated interest in technology and eagerness to learn',
  'Willingness to commit to the full program schedule',
  'Financial need — unable to access quality tech education otherwise',
  'Any educational background — prior coding experience is not required',
  'Must be based in or able to attend sessions from Hyderabad',
]

export default function ScholarshipPage() {
  useEffect(() => {
    document.title = 'Scholarship — TechFoundry'
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="scholarship-hero">
        <div className="container">
          <span className="section-label">Talent Scholarship Program</span>
          <h1>Exceptional Talent, Any Background</h1>
          <p className="sch-sub">
            We believe financial constraints should never block potential. The TechFoundry Talent Scholarship
            Program gives high-potential learners a <strong>full scholarship</strong> to our flagship AI Engineering Program.
          </p>
          <Link to="/contact" className="btn btn-accent btn-lg">Apply for Scholarship →</Link>
        </div>
      </section>

      {/* What you get */}
      <section className="section">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <span className="section-label">What's Included</span>
            <h2 className="section-title">Full Scholarship Benefits</h2>
          </div>
          <div className="sch-benefits grid-3">
            <div className="sch-benefit-card">
              <div className="sch-benefit-icon">🆓</div>
              <h4>Zero Fees</h4>
              <p>Complete access to the AI Engineering program at absolutely no cost.</p>
            </div>
            <div className="sch-benefit-card">
              <div className="sch-benefit-icon">👥</div>
              <h4>Same Cohort</h4>
              <p>Learn alongside paid learners in the same batches — no separate classes.</p>
            </div>
            <div className="sch-benefit-card">
              <div className="sch-benefit-icon">🔨</div>
              <h4>Real Projects</h4>
              <p>Build the same real-world portfolio projects as all other learners.</p>
            </div>
            <div className="sch-benefit-card">
              <div className="sch-benefit-icon">🧑‍💼</div>
              <h4>Mentorship</h4>
              <p>Full access to 1:1 mentoring sessions with industry professionals.</p>
            </div>
            <div className="sch-benefit-card">
              <div className="sch-benefit-icon">📄</div>
              <h4>Placement Support</h4>
              <p>Resume reviews, mock interviews, and employer connections — just like everyone else.</p>
            </div>
            <div className="sch-benefit-card">
              <div className="sch-benefit-icon">🏆</div>
              <h4>Certificate</h4>
              <p>Receive the same TechFoundry completion certificate upon graduating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-alt">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <span className="section-label">How to Apply</span>
            <h2 className="section-title">Scholarship Selection Process</h2>
          </div>
          <div className="sch-process">
            {STEPS.map((step, i) => (
              <div key={i} className="sch-step">
                <div className="sch-step-num">{i + 1}</div>
                <div className="sch-step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'2rem'}}>
            <img
              src="/assets/Scholarship_Process_Final.png"
              alt="Scholarship process diagram"
              style={{maxWidth:'100%', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow)'}}
            />
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section">
        <div className="container sch-elig-grid">
          <div>
            <span className="section-label">Eligibility</span>
            <h2 className="section-title">Who Should Apply?</h2>
            <p style={{color:'var(--muted)', marginBottom:'1.5rem'}}>
              The scholarship is open to anyone with the drive to build a career in technology —
              regardless of their academic background or previous experience.
            </p>
            <ul className="check-list">
              {ELIGIBILITY.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </div>
          <div className="sch-cta-box">
            <h3>Ready to Apply?</h3>
            <p>
              Use the contact/application form below. Select "Scholarship" as your program preference
              and our team will get in touch to guide you through the assessment.
            </p>
            <Link to="/contact" className="btn btn-accent btn-lg" style={{marginTop:'1.25rem', display:'inline-flex'}}>
              Apply Now →
            </Link>
            <div style={{marginTop:'1.25rem'}}>
              <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer"
                className="btn btn-ghost" style={{width:'100%', justifyContent:'center'}}>
                💬 Questions? WhatsApp Us
              </a>
            </div>
            <p className="disclaimer">
              * Salary outcomes are not guaranteed and depend on individual performance, skill level,
              and market conditions.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .scholarship-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 5rem 0 4rem;
          color: #fff;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .scholarship-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .scholarship-hero h1 { color: #fff; margin: 0.75rem 0; max-width: 700px; }
        .sch-sub {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 620px;
          margin-bottom: 2rem;
          line-height: 1.65;
        }
        .sch-sub strong { color: #fff; }

        .sch-benefits { gap: 1.25rem; }
        .sch-benefit-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
          text-align: center;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }
        .sch-benefit-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.12); }
        .sch-benefit-icon { font-size: 2.25rem; margin-bottom: 0.75rem; }
        .sch-benefit-card h4 { margin-bottom: 0.4rem; color: #fff; }
        .sch-benefit-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; }

        .sch-process {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .sch-step {
          text-align: center;
          padding: 1.5rem 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          position: relative;
        }
        .sch-step-num {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00b4d8, #0077b6);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 180, 216, 0.4);
        }
        .sch-step-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .sch-step h4 { font-size: 0.95rem; margin-bottom: 0.4rem; color: #fff; }
        .sch-step p { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }

        .sch-elig-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .check-list {
          display: flex; flex-direction: column; gap: 0.75rem;
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
        .sch-cta-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2rem;
        }
        .sch-cta-box h3 { margin-bottom: 0.75rem; }
        .sch-cta-box p { color: var(--text-secondary); line-height: 1.65; }
        .disclaimer {
          font-size: 0.78rem !important;
          color: var(--muted-light) !important;
          font-style: italic;
          margin-top: 1rem !important;
        }

        @media (max-width: 900px) {
          .sch-process { grid-template-columns: repeat(2, 1fr); }
          .sch-elig-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .sch-process { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}
