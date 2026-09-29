import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const PROGRAMS_DATA = [
  {
    slug: 'ai-engineering',
    icon: '🤖',
    title: 'AI Engineering',
    tagline: 'Build the future with artificial intelligence.',
    desc: 'Learn to design, train, and deploy AI systems with practical projects and industry mentorship. Go from zero to building production-ready AI applications.',
    meta: '12 weeks • Project-based',
    img: '/assets/prog-ai-eng.jpg',
    color: 'rgba(0, 180, 216, 0.08)',
    highlights: ['Live, instructor-led sessions', 'Capstone AI product', 'MLOps & deployment', 'Industry mentor 1:1s'],
    syllabus: [
      { week: 'Weeks 1–2', topic: 'Python for ML & data manipulation' },
      { week: 'Weeks 3–5', topic: 'Machine learning fundamentals & deep learning' },
      { week: 'Weeks 6–7', topic: 'Model evaluation, optimization & productionization' },
      { week: 'Weeks 8–9', topic: 'MLOps, deployment & monitoring' },
      { week: 'Weeks 10–11', topic: 'NLP, computer vision & generative AI' },
      { week: 'Week 12', topic: 'Capstone: End-to-end AI product' },
    ],
    outcomes: ['Build and deploy ML models', 'Work with real datasets', 'Understand MLOps pipelines', 'Present a portfolio AI project'],
  },
  {
    slug: 'web-development',
    icon: '🌐',
    title: 'Web Development',
    tagline: 'Build modern, responsive web applications.',
    desc: 'Build responsive, accessible full-stack web applications using modern tools. Cover everything from HTML & CSS to React, Node.js, and databases.',
    meta: '10 weeks • Frontend + Backend',
    img: '/assets/prog-web-dev.jpg',
    color: 'rgba(16, 185, 129, 0.08)',
    highlights: ['Full-stack project portfolio', 'React & Node.js', 'Database design & APIs', 'Deployment on cloud'],
    syllabus: [
      { week: 'Weeks 1–2', topic: 'HTML, CSS & modern responsive layouts' },
      { week: 'Weeks 3–4', topic: 'JavaScript, DOM & ES6+' },
      { week: 'Weeks 5–6', topic: 'React fundamentals, hooks & state management' },
      { week: 'Week 7', topic: 'Node.js, Express & REST APIs' },
      { week: 'Weeks 8–9', topic: 'Databases, authentication & deployment' },
      { week: 'Week 10', topic: 'Capstone: Full-stack web application' },
    ],
    outcomes: ['Build full-stack web applications', 'Work with React & Node.js', 'Design RESTful APIs', 'Deploy to cloud platforms'],
  },
  {
    slug: 'software-engineering',
    icon: '⚙️',
    title: 'Software Engineering',
    tagline: 'Design scalable systems and write production-quality code.',
    desc: 'Master software design, testing, and collaboration on real-world systems. Learn the patterns and practices that top engineers use every day.',
    meta: '14 weeks • Systems & Architecture',
    img: '/assets/prog-soft-eng.jpg',
    color: 'rgba(56, 189, 248, 0.08)',
    highlights: ['System design mastery', 'Data structures & algorithms', 'CI/CD & testing', 'Microservices & cloud'],
    syllabus: [
      { week: 'Weeks 1–2', topic: 'System design & architecture patterns' },
      { week: 'Weeks 3–4', topic: 'Data structures, algorithms & performance' },
      { week: 'Weeks 5–6', topic: 'Testing, CI/CD & code quality' },
      { week: 'Weeks 7–9', topic: 'Scalable backend services & microservices' },
      { week: 'Weeks 10–11', topic: 'Security, monitoring & reliability' },
      { week: 'Weeks 12–14', topic: 'Capstone: Production-grade distributed system' },
    ],
    outcomes: ['Design scalable systems', 'Write clean, tested code', 'Work with CI/CD pipelines', 'Build & monitor microservices'],
  },
]

export default function ProgramsPage() {
  useEffect(() => {
    document.title = 'Programs — TechFoundry'
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Our Programs</span>
          <h1>Choose Your Tech Path</h1>
          <p className="page-hero-sub">
            Industry-aligned programs designed to take you from beginner to job-ready professional —
            with real projects, real mentors, and real support.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section">
        <div className="container programs-list">
          {PROGRAMS_DATA.map((prog, i) => (
            <article key={prog.slug} className={`prog-row card${i % 2 === 1 ? ' prog-row-alt' : ''}`}>
              <div className="prog-img-wrap" style={{background: prog.color}}>
                <img src={prog.img} alt={prog.title} className="prog-img" />
              </div>
              <div className="prog-content card-body">
                <div className="prog-top">
                  <span className="prog-icon">{prog.icon}</span>
                  <span className="badge badge-blue">{prog.meta}</span>
                </div>
                <h2 className="prog-title">{prog.title}</h2>
                <p className="prog-tagline">{prog.tagline}</p>
                <p className="prog-desc">{prog.desc}</p>
                <ul className="prog-highlights">
                  {prog.highlights.map((h, j) => (
                    <li key={j}>✅ {h}</li>
                  ))}
                </ul>
                <div className="prog-actions">
                  <Link to={`/programs/${prog.slug}`} className="btn btn-primary">View Full Curriculum →</Link>
                  <Link to="/contact" className="btn btn-outline">Course Registration</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Not Sure Which Program Is Right for You?</h2>
          <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '1.5rem'}}>
            Reach out on WhatsApp or fill in the contact form — our team will help you pick the right path.
          </p>
          <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
            <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              💬 Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-outline">Course Registration</Link>
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

        .programs-list { display: flex; flex-direction: column; gap: 2rem; }

        .prog-row {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          overflow: hidden;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .prog-row-alt { direction: rtl; }
        .prog-row-alt > * { direction: ltr; }

        .prog-img-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          overflow: hidden;
        }
        .prog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          max-height: 360px;
        }
        .prog-content { padding: 2rem; }
        .prog-top { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
        .prog-icon { font-size: 1.75rem; }
        .prog-title { font-size: 1.6rem; margin-bottom: 0.3rem; color: #fff; }
        .prog-tagline { color: #00d2ff; font-weight: 600; font-size: 0.95rem; margin-bottom: 0.5rem; }
        .prog-desc { color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.65; }
        .prog-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }
        .prog-highlights li { font-size: 0.9rem; color: var(--text-secondary); }
        .prog-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .prog-row { grid-template-columns: 1fr; direction: ltr; }
          .prog-row-alt { direction: ltr; }
          .prog-img-wrap { min-height: 220px; }
        }
      `}</style>
    </main>
  )
}
