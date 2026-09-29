import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { PROGRAMS_DATA } from './ProgramsPage'

export default function ProgramDetailPage() {
  const { slug } = useParams()
  const program = PROGRAMS_DATA.find((p) => p.slug === slug)

  useEffect(() => {
    if (program) document.title = `${program.title} — TechFoundry`
  }, [program])

  if (!program) return <Navigate to="/programs" replace />

  const others = PROGRAMS_DATA.filter((p) => p.slug !== slug)

  return (
    <main>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/programs">Programs</Link>
          <span>›</span>
          <span className="breadcrumb-current">{program.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pd-hero">
        <div className="container pd-hero-inner">
          <div className="pd-hero-content">
            <span className="pd-icon">{program.icon}</span>
            <span className="badge badge-blue">{program.meta}</span>
            <h1 style={{margin: '0.75rem 0'}}>{program.title}</h1>
            <p className="pd-tagline">{program.tagline}</p>
            <p className="pd-desc">{program.desc}</p>
            <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'1.5rem'}}>
              <Link to="/contact" className="btn btn-primary btn-lg">Course Registration →</Link>
              <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
                💬 Ask a Question
              </a>
            </div>
          </div>
          <div className="pd-hero-img-wrap">
            <img src={program.img} alt={program.title} className="pd-hero-img" />
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="section">
        <div className="container pd-content-grid">
          {/* Curriculum */}
          <div>
            <h2 style={{marginBottom: '1.5rem'}}>Curriculum</h2>
            <div className="syllabus-list">
              {program.syllabus.map((s, i) => (
                <div key={i} className="syllabus-item">
                  <div className="syllabus-num">{i + 1}</div>
                  <div>
                    <p className="syllabus-week">{s.week}</p>
                    <p className="syllabus-topic">{s.topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="pd-sidebar">
            {/* Highlights */}
            <div className="pd-sidebar-card">
              <h3>Program Highlights</h3>
              <ul className="pd-highlights">
                {program.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="highlight-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="pd-sidebar-card accent-green-card">
              <h3>What You'll Be Able to Do</h3>
              <ul className="pd-highlights">
                {program.outcomes.map((o, i) => (
                  <li key={i}>✅ {o}</li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="pd-apply-card">
              <h3>Ready to Join?</h3>
              <p>Apply now or reach out on WhatsApp. Limited seats available.</p>
              <Link to="/contact" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'1rem'}}>
                Apply for {program.title} →
              </Link>
              <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer"
                className="btn btn-ghost" style={{width:'100%', justifyContent:'center', marginTop:'0.75rem'}}>
                💬 WhatsApp Us
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Other Programs */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{marginBottom: '1.5rem'}}>Explore Other Programs</h2>
          <div className="grid-2">
            {others.map((prog) => (
              <article key={prog.slug} className="card other-prog-card">
                <div className="other-prog-img-wrap" style={{background: prog.color}}>
                  <img src={prog.img} alt={prog.title} />
                </div>
                <div className="card-body">
                  <div style={{display:'flex', gap:'0.5rem', alignItems:'center', marginBottom:'0.5rem'}}>
                    <span style={{fontSize:'1.5rem'}}>{prog.icon}</span>
                    <span className="badge badge-blue">{prog.meta}</span>
                  </div>
                  <h3 style={{fontSize:'1.2rem', marginBottom:'0.4rem'}}>{prog.title}</h3>
                  <p style={{color:'var(--muted)', fontSize:'0.9rem', marginBottom:'1rem'}}>{prog.desc}</p>
                  <Link to={`/programs/${prog.slug}`} className="btn btn-outline" style={{width:'100%', justifyContent:'center'}}>
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .breadcrumb-bar {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
        }
        .breadcrumb-inner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--muted);
        }
        .breadcrumb-inner a { color: var(--primary); text-decoration: none; }
        .breadcrumb-inner a:hover { text-decoration: underline; }
        .breadcrumb-current { color: var(--text); font-weight: 500; }

        .pd-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .pd-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .pd-hero h1 { color: #fff; }
        .pd-hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .pd-icon { font-size: 2.5rem; display: block; margin-bottom: 0.5rem; }
        .pd-tagline { color: #00d2ff; font-weight: 600; font-size: 1rem; margin-bottom: 0.5rem; }
        .pd-desc { color: var(--text-secondary); line-height: 1.65; }
        .pd-hero-img { width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); object-fit: cover; max-height: 380px; border: 1px solid var(--border); }

        .pd-content-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 3rem;
          align-items: start;
        }

        .syllabus-list { display: flex; flex-direction: column; gap: 1rem; }
        .syllabus-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--surface);
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        .syllabus-num {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00b4d8, #0077b6);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 180, 216, 0.3);
        }
        .syllabus-week { font-size: 0.78rem; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
        .syllabus-topic { font-size: 0.95rem; color: var(--text); font-weight: 500; margin-top: 0.15rem; }

        .pd-sidebar { display: flex; flex-direction: column; gap: 1.25rem; }
        .pd-sidebar-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.25rem;
        }
        .pd-sidebar-card h3 { font-size: 1rem; margin-bottom: 1rem; color: #fff; }
        .accent-green-card { background: #071c32; border-color: #174a68; }
        .pd-highlights { display: flex; flex-direction: column; gap: 0.6rem; }
        .pd-highlights li {
          display: flex; align-items: flex-start; gap: 0.5rem;
          font-size: 0.9rem; color: var(--text-secondary);
        }
        .highlight-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #00d2ff;
          margin-top: 6px;
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(0, 210, 255, 0.6);
        }
        .pd-apply-card {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 50%, #0077b6 100%);
          border: 1px solid #1e3a6d;
          border-radius: var(--radius);
          padding: 1.5rem;
          color: #fff;
        }
        .pd-apply-card h3 { color: #fff; margin-bottom: 0.5rem; font-size: 1.1rem; }
        .pd-apply-card p { color: rgba(255,255,255,0.85); font-size: 0.88rem; }

        .other-prog-img-wrap { height: 180px; overflow: hidden; display: flex; align-items: center; }
        .other-prog-img-wrap img { width: 100%; height: 100%; object-fit: cover; }

        @media (max-width: 900px) {
          .pd-hero-inner { grid-template-columns: 1fr; }
          .pd-hero-img { display: none; }
          .pd-content-grid { grid-template-columns: 1fr; }
          .pd-sidebar { order: -1; }
        }
      `}</style>
    </main>
  )
}
