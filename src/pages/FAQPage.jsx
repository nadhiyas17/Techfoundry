import React, { useState, useEffect } from 'react'

const FAQS = [
  {
    category: 'Programs',
    items: [
      {
        q: 'Do I need prior coding experience to join?',
        a: 'No prior coding experience is required for any of our programs. All programs start from the fundamentals and progressively build toward advanced topics. What matters most is your motivation and commitment to learn.',
      },
      {
        q: 'What is the duration of each program?',
        a: 'AI Engineering is 12 weeks, Web Development is 10 weeks, and Software Engineering is 14 weeks. All programs are intensive, project-based, and run full-time.',
      },
      {
        q: 'Are classes online, offline, or hybrid?',
        a: 'Our programs currently operate from our Hyderabad centre at Rent A Desk, Serenity Square, Mindspace, HITEC City. Hybrid options may be available — reach out to us on WhatsApp to confirm the current delivery format for your program.',
      },
      {
        q: 'What happens after I finish the program?',
        a: 'You receive placement support: resume reviews, mock interviews, LinkedIn profile polishing, and warm introductions to our hiring partner network. We don\'t consider your journey complete until you land a role.',
      },
      {
        q: 'Will I get a certificate?',
        a: 'Yes. All learners who successfully complete a program receive a TechFoundry completion certificate along with a portfolio of real-world projects.',
      },
    ],
  },
  {
    category: 'Application & Admission',
    items: [
      {
        q: 'How do I apply?',
        a: 'Click "Apply Now" in the navigation or visit our Contact / Apply page. Fill in the application form and our team will get in touch within 24–48 hours to guide you through the next steps.',
      },
      {
        q: 'Is there an entrance test?',
        a: 'There is a short online assessment to understand your current skills and learning style — it is not an elimination test. It helps us place you correctly and tailor mentoring to your needs.',
      },
      {
        q: 'How quickly will I hear back after applying?',
        a: 'Our admissions team typically responds within 24–48 hours on working days. You can also reach out directly on WhatsApp for a faster response.',
      },
      {
        q: 'Can I apply for multiple programs at once?',
        a: 'We recommend selecting one program you are most interested in. If you\'re unsure, our team will help you choose during the initial call — just reach out on WhatsApp.',
      },
    ],
  },
  {
    category: 'Scholarship',
    items: [
      {
        q: 'Who is eligible for the scholarship?',
        a: 'Any motivated learner who demonstrates aptitude and determination but faces financial constraints is welcome to apply. No prior experience is necessary. We assess on potential, not background.',
      },
      {
        q: 'Does the scholarship cover all fees?',
        a: 'Yes. The TechFoundry Talent Scholarship is a full scholarship — there are absolutely no program fees for selected candidates.',
      },
      {
        q: 'How many scholarship seats are available per batch?',
        a: 'The number of scholarship seats is limited per batch. We strongly recommend applying early. Seats are awarded purely on merit and financial need.',
      },
      {
        q: 'Do scholarship students learn separately from paid students?',
        a: 'No. Scholarship students are fully integrated into the same cohort, attend the same sessions, work on the same projects, and receive the same mentoring as all other learners.',
      },
    ],
  },
  {
    category: 'Career & Outcomes',
    items: [
      {
        q: 'Do you guarantee a job after the program?',
        a: 'We do not guarantee placement — and we\'re transparent about this. Outcomes depend on individual effort, market conditions, and skill development. What we do guarantee is 100% effort in supporting your job search through placement prep, referrals, and employer connections.',
      },
      {
        q: 'What roles do graduates typically target?',
        a: 'Depending on the program: AI Engineer, ML Engineer, Data Scientist (AI); Frontend, Backend, or Full-Stack Developer (Web); Software Engineer, Backend Engineer, or Systems Engineer (Software Engineering).',
      },
      {
        q: 'Do you help with resume and interview preparation?',
        a: 'Yes. Resume reviews, mock technical interviews, system design practice, and behavioral interview coaching are all included as part of the placement support component of every program.',
      },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  )
}

export default function FAQPage() {
  useEffect(() => {
    document.title = 'FAQ — TechFoundry'
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">FAQs</span>
          <h1>Frequently Asked Questions</h1>
          <p className="page-hero-sub">
            Everything you need to know about our programs, application process, scholarship, and outcomes.
            Can't find your answer?{' '}
            <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer">WhatsApp us</a>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          {/* Sidebar nav */}
          <nav className="faq-nav" aria-label="FAQ categories">
            {FAQS.map((cat) => (
              <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="faq-nav-link">
                {cat.category}
              </a>
            ))}
          </nav>

          {/* FAQ Content */}
          <div className="faq-content">
            {FAQS.map((cat) => (
              <div key={cat.category} id={cat.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')} className="faq-category">
                <h2 className="faq-cat-title">{cat.category}</h2>
                <div className="faq-list">
                  {cat.items.map((item) => (
                    <FAQItem key={item.q} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="faq-cta-section">
        <div className="container faq-cta">
          <div>
            <h2>Still Have Questions?</h2>
            <p>Our team is happy to help — reach out on WhatsApp or fill in our contact form.</p>
          </div>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
            <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg">
              💬 WhatsApp Us
            </a>
            <a href="/contact" className="btn btn-ghost btn-lg">Contact Form</a>
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
        .page-hero-sub { font-size: 1.1rem; color: var(--text-secondary); max-width: 640px; margin-top: 0.5rem; }
        .page-hero-sub a { color: #00d2ff; }

        .faq-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 3rem;
          align-items: start;
        }
        .faq-nav {
          position: sticky;
          top: 88px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .faq-nav-link {
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: background var(--transition), color var(--transition);
        }
        .faq-nav-link:hover {
          background: rgba(0, 180, 216, 0.15);
          color: #00d2ff;
        }

        .faq-category { margin-bottom: 3rem; }
        .faq-cat-title {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(0, 180, 216, 0.25);
          color: #00d2ff;
        }
        .faq-list { display: flex; flex-direction: column; gap: 0; }

        .faq-item {
          border: 1px solid var(--border);
          border-bottom: none;
          background: var(--surface);
          transition: background var(--transition);
        }
        .faq-item:first-child { border-radius: var(--radius) var(--radius) 0 0; }
        .faq-item:last-child { border-bottom: 1px solid var(--border); border-radius: 0 0 var(--radius) var(--radius); }
        .faq-item.open { background: var(--surface-2); }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: transparent;
          border: none;
          text-align: left;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
          cursor: pointer;
          transition: color var(--transition);
        }
        .faq-question:hover { color: #00d2ff; }
        .faq-chevron {
          font-size: 1.25rem;
          font-weight: 400;
          color: #00d2ff;
          flex-shrink: 0;
          line-height: 1;
        }
        .faq-answer { padding: 0 1.25rem 1rem; }
        .faq-answer p { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; }

        .faq-cta-section {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 50%, #0077b6 100%);
          border-top: 1px solid #1e3a6d;
          padding: 3rem 0;
        }
        .faq-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .faq-cta h2 { color: #fff; margin-bottom: 0.4rem; }
        .faq-cta p { color: rgba(255,255,255,0.85); }

        @media (max-width: 768px) {
          .faq-layout { grid-template-columns: 1fr; }
          .faq-nav { position: static; flex-direction: row; flex-wrap: wrap; }
          .faq-cta { flex-direction: column; }
        }
      `}</style>
    </main>
  )
}
