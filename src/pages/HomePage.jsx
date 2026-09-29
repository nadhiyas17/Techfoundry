import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/* ---- Scroll-reveal hook (robust with fallback) ---- */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Immediately show if IntersectionObserver not supported
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('visible')
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    // Fallback: show after 1.5s regardless (prevents hidden content)
    const timer = setTimeout(() => { el.classList.add('visible') }, 1500)
    return () => { obs.disconnect(); clearTimeout(timer) }
  }, [])
  return ref
}

/* ---- Data ---- */
const PROGRAMS = [
  {
    slug: 'ai-engineering',
    icon: '🤖',
    title: 'AI Engineering',
    desc: 'Design, train, and deploy AI systems with practical projects and industry mentorship.',
    meta: '12 weeks • Project-based',
    img: '/assets/prog-ai-eng.jpg',
    color: 'rgba(0, 180, 216, 0.08)',
  },
  {
    slug: 'web-development',
    icon: '🌐',
    title: 'Web Development',
    desc: 'Build responsive, accessible full-stack web applications using modern tools and frameworks.',
    meta: '10 weeks • Frontend + Backend',
    img: '/assets/prog-web-dev.jpg',
    color: 'rgba(16, 185, 129, 0.08)',
  },
  {
    slug: 'software-engineering',
    icon: '⚙️',
    title: 'Software Engineering',
    desc: 'Master software design, testing, and collaboration on real-world systems at scale.',
    meta: '14 weeks • Systems & Architecture',
    img: '/assets/prog-soft-eng.jpg',
    color: 'rgba(56, 189, 248, 0.08)',
  },
]

const WHY_ITEMS = [
  {
    icon: '🎯',
    title: 'Outcome-Driven',
    desc: 'Every lesson, project, and mentoring session is designed around one goal — getting you job-ready.',
    points: [
      'Industry-aligned skills & modern tech stack',
      'Hands-on problem solving over theory',
      'Measurable job-readiness milestones',
    ],
  },
  {
    icon: '🔨',
    title: 'Practical Projects',
    desc: 'Build a portfolio of real projects from day one that employers can actually evaluate.',
    points: [
      'Production-grade full-stack & AI applications',
      'Real GitHub repositories & pull request workflows',
      'Live deployed URLs ready for hiring managers',
    ],
  },
  {
    icon: '🧑‍💼',
    title: 'Industry Mentors',
    desc: 'Learn from professionals with 25+ years of combined experience in top tech companies.',
    points: [
      'Dedicated 1:1 weekly mentor code reviews',
      'Direct guidance from senior engineers & tech leads',
      'Personalized feedback on architecture & standards',
    ],
  },
  {
    icon: '📄',
    title: 'Placement Support',
    desc: "Resume reviews, mock interviews, and employer connections — we don't stop until you land.",
    points: [
      'ATS-friendly resume & LinkedIn optimization',
      'Rigorous technical & behavioral mock interviews',
      'Direct referrals to hiring partners & startups',
    ],
  },
  {
    icon: '🎓',
    title: 'Scholarship Available',
    desc: 'High-potential learners with financial constraints can apply for a full scholarship.',
    points: [
      'Up to 100% tuition coverage for deserving talent',
      'Fair merit & aptitude-based selection',
      'Equal access to all mentors, projects & placement',
    ],
  },
  {
    icon: '🗓️',
    title: 'Structured Roadmap',
    desc: 'Clear week-by-week learning paths so you always know where you are and what comes next.',
    points: [
      'Structured week-by-week curriculum & milestones',
      'Daily hands-on coding drills & sprint goals',
      'Continuous progress tracking & accountability',
    ],
  },
]

const HOW_IT_WORKS = [
  { step: '01', icon: '📝', title: 'Register Online', desc: 'Fill in our short registration form. Takes less than 5 minutes. No coding test required at this stage.' },
  { step: '02', icon: '📊', title: 'Assessment', desc: 'Complete a brief online assessment to help us understand your background and learning style.' },
  { step: '03', icon: '🎓', title: 'Learn & Build', desc: 'Join your cohort. Attend live sessions, build real projects, get 1:1 mentoring every week.' },
  { step: '04', icon: '🚀', title: 'Get Hired', desc: 'Graduate with a portfolio, polished resume, and placement support until you land your first role.' },
]

const TESTIMONIALS = [
  {
    name: 'Aditya Reddy',
    role: 'AI Engineer (formerly B.Com graduate)',
    quote: "I had zero coding background when I joined TechFoundry's AI Engineering program. Within 12 weeks I had built 3 real AI projects and got placed within 6 weeks of graduating. The mentors genuinely care about your growth.",
    avatar: '👨‍💻',
    program: 'AI Engineering',
  },
  {
    name: 'Priya Nair',
    role: 'Full-Stack Developer',
    quote: "The Web Development program was intense in the best way possible. I learned more in 10 weeks than I did in 2 years of self-study. The project-based approach meant I was building real things every single day.",
    avatar: '👩‍💻',
    program: 'Web Development',
  },
  {
    name: 'Karthik Menon',
    role: 'Software Engineer at a fintech startup',
    quote: "What sets TechFoundry apart is the quality of mentorship. My mentor had 20+ years of industry experience and reviewed my code like a real engineering manager would. That feedback was invaluable.",
    avatar: '🧑‍💻',
    program: 'Software Engineering',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'ML Engineer (scholarship recipient)',
    quote: "I come from a small town and couldn't afford the program fees. The scholarship changed my life. I was treated exactly the same as every other learner — same mentors, same projects, same support.",
    avatar: '👩‍🎓',
    program: 'AI Engineering (Scholarship)',
  },
]

const CAREER_ROLES = [
  { icon: '🤖', program: 'AI Engineering', roles: ['AI Engineer', 'ML Engineer', 'Data Scientist', 'AI Product Developer'] },
  { icon: '🌐', program: 'Web Development', roles: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'React Developer'] },
  { icon: '⚙️', program: 'Software Engineering', roles: ['Software Engineer', 'Backend Engineer', 'Systems Architect', 'DevOps Engineer'] },
]

const HIRING_COMPANIES = [
  {
    name: 'Chiselon Technologies Pvt. Ltd.',
    logo: '/assets/chiselon-clean.png',
    website: 'https://www.chiselontechnologies.com/',
  },
  {
    name: 'UDIT Cosmetech Pvt. Ltd.',
    logo: '/assets/udit-dark-opt.png',
    website: 'https://uditcosmetech.com/',
  },
  {
    name: 'Pakricorn Techno Solutions Pvt. Ltd.',
    logo: '/assets/pakricorn-clean.png',
    website: 'https://www.pakricorn.com/',
  },
  {
    name: 'Quantum Quest Technologies LLP',
    logo: '/assets/quantum-quest-clean.png',
    website: 'https://www.quantumquest.in/',
  },
]


const WHO_FOR = [
  {
    icon: '🎓',
    title: 'Fresh Graduates',
    subtitle: 'B.Tech / BCA / BSc / B.Com — any degree',
    desc: 'You just graduated and need practical skills to compete in the job market. Your degree opened the door — TechFoundry gets you through it.',
    points: ['No experience required', 'Start from fundamentals', 'Build portfolio from day one'],
    color: '#081738',
    border: '#1e3f7a',
  },
  {
    icon: '🔄',
    title: 'Career Switchers',
    subtitle: 'From non-tech to tech roles',
    desc: "You're working in sales, finance, operations, or any non-tech field and want to transition into a high-growth tech career without quitting your life.",
    points: ['Structured for working professionals', 'Evening-friendly scheduling', 'Industry mentors who switched too'],
    color: '#071c32',
    border: '#174a68',
  },
  {
    icon: '⚡',
    title: 'Aspiring Developers',
    subtitle: 'Self-taught learners hitting a wall',
    desc: "You've done online courses, watched YouTube tutorials, but still can't land a job. You need structure, accountability, and real mentorship.",
    points: ['Structured roadmap', 'Weekly accountability', 'Mock interviews & placement'],
    color: '#0d183d',
    border: '#263a7a',
  },
]

const LEARNING_EXPERIENCE = [
  {
    icon: '📡',
    title: 'Live Interactive Sessions',
    desc: 'Not pre-recorded videos. Real instructors, real questions, real-time feedback — conducted via live video every week.',
  },
  {
    icon: '🔨',
    title: 'Project-Based Curriculum',
    desc: 'You build something every week. By the end, you have a portfolio of 4–6 real projects you can show to any employer.',
  },
  {
    icon: '🧑‍🏫',
    title: '1:1 Weekly Mentoring',
    desc: 'Every learner gets dedicated 1:1 time with an industry mentor to review code, discuss progress, and work through blockers.',
  },
  {
    icon: '👥',
    title: 'Cohort Learning',
    desc: 'Learn alongside a tight-knit cohort. Peer review, group projects, and collaborative problem-solving — just like real tech teams.',
  },
  {
    icon: '📋',
    title: 'Code Reviews',
    desc: 'Your code is reviewed like a professional pull request — with detailed feedback on logic, style, efficiency, and best practices.',
  },
  {
    icon: '🏆',
    title: 'Capstone Project',
    desc: 'Every program ends with a capstone project — a full, deployable product that becomes the centrepiece of your portfolio.',
  },
]

const COMPARISON = [
  { feature: 'Project-based learning', tf: true,  online: false, college: false },
  { feature: '1:1 industry mentorship', tf: true,  online: false, college: false },
  { feature: 'Real-world capstone project', tf: true,  online: true,  college: false },
  { feature: 'Placement support & referrals', tf: true,  online: false, college: false },
  { feature: 'Current industry curriculum', tf: true,  online: true,  college: false },
  { feature: 'Live instructor sessions', tf: true,  online: false, college: true  },
  { feature: 'Scholarship for deserving students', tf: true,  online: false, college: true  },
  { feature: 'Cohort & peer learning', tf: true,  online: false, college: true  },
  { feature: 'Affordable & focused duration', tf: true,  online: true,  college: false },
]

const HOME_FAQS = [
  {
    q: 'Do I need prior coding experience?',
    a: 'No. All our programs start from the fundamentals. What matters most is your motivation and commitment to learn.',
  },
  {
    q: 'How long are the programs?',
    a: 'AI Engineering is 12 weeks, Web Development is 10 weeks, and Software Engineering is 14 weeks. All are full-time and intensive.',
  },
  {
    q: 'Is there a full scholarship available?',
    a: 'Yes. The TechFoundry Talent Scholarship covers 100% of program fees for selected high-potential learners who face financial constraints.',
  },
  {
    q: 'How is TechFoundry different from online courses?',
    a: 'Online courses give you content. TechFoundry gives you structure, accountability, real projects, 1:1 mentoring, and placement support — until you land.',
  },
  {
    q: 'Where are you located?',
    a: 'We are based at Rent A Desk, 2nd Floor, Serenity Square, Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad. Reach us on WhatsApp or apply online — our team will guide you from there.',
  },
]

/* ---- Inline FAQ accordion ---- */
function HomeFAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`hfaq-item${open ? ' open' : ''}`}>
      <button className="hfaq-question" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className="hfaq-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="hfaq-answer"><p>{a}</p></div>}
    </div>
  )
}

/* ======================== COMPONENT ======================== */
export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const statsRef    = useReveal()
  const whyRef      = useReveal()
  const howRef      = useReveal()
  const programsRef = useReveal()
  const testimRef   = useReveal()
  const careerRef   = useReveal()
  const schRef      = useReveal()
  const subscribeRef= useReveal()
  const whoRef      = useReveal()
  const learnRef    = useReveal()
  const compareRef  = useReveal()
  const batchRef    = useReveal()
  const homeFaqRef  = useReveal()

  useEffect(() => {
    document.title = 'TechFoundry — Forge Your Tech Career'
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(v => (v + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])

  function handleSubscribe(e) {
    e.preventDefault()
    const email = e.target.email.value
    const waText = `Hi TechFoundry, I am interested in Early Access & Free Seat Assessment. My email is: ${email}`
    try {
      window.open(`https://wa.me/918309576596?text=${encodeURIComponent(waText)}`, '_blank')
    } catch (_) {}
    alert(`Thank you! Your request has been directed to our WhatsApp line (+91 83095 76596).`)
    e.target.reset()
  }

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-content animate-fade-up">
            <span className="section-label">🚀 Now enrolling — 2026 batch</span>
            <h1 className="hero-title">
              Forge Your Career in<br />
              <span className="hero-highlight">Technology</span>
            </h1>
            <p className="hero-sub">
              Hands-on, industry-driven training in AI, Web Development & Software Engineering.
              Real projects. Real mentors. Real outcomes — not just certificates.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Course Registration →</Link>
              <Link to="/programs" className="btn btn-ghost btn-lg">View Programs</Link>
            </div>
            <div className="hero-trust">
              <span>✅ Project-based learning</span>
              <span>✅ Industry mentors</span>
              <span>✅ Placement support</span>
            </div>
          </div>
          <div className="hero-visual animate-fade-up animate-fade-up-delay-2">
            <img src="/assets/hero-tech-forge.jpg" alt="Tech learning at TechFoundry" className="hero-img" />
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar" ref={statsRef}>
        <div className="container stats-inner reveal">
          <div className="stat-item"><strong>3</strong><span>Industry Programs</span></div>
          <div className="stat-divider" />
          <div className="stat-item"><strong>25+</strong><span>Years Combined Experience</span></div>
          <div className="stat-divider" />
          <div className="stat-item"><strong>90%+</strong><span>Portfolio-Ready Graduates</span></div>
          <div className="stat-divider" />
          <div className="stat-item"><strong>100%</strong><span>Placement Support</span></div>
          <div className="stat-divider" />
          <div className="stat-item"><strong>3</strong><span>Cities Hiring TF Grads</span></div>
        </div>
      </section>

      {/* ===== WHY TECHFOUNDRY ===== */}
      <section className="section section-alt" ref={whyRef}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why TechFoundry</span>
            <h2 className="section-title">Built for Real Outcomes</h2>
            <p className="section-subtitle">
              We don't just teach concepts — we forge practical skills, problem-solving ability, and real project experience.
            </p>
          </div>
          <div className="grid-3 reveal" style={{marginTop: '2.5rem'}}>
            {WHY_ITEMS.map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                {item.points && (
                  <ul className="why-points">
                    {item.points.map((pt, j) => (
                      <li key={j}>
                        <span className="why-check">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO IS THIS FOR ===== */}
      <section className="section" ref={whoRef}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}} className="reveal">
            <span className="section-label">Who Is This For?</span>
            <h2 className="section-title">TechFoundry Is Built for You</h2>
            <p className="section-subtitle" style={{margin:'0.5rem auto 0'}}>
              Whether you're a fresher, a career switcher, or a self-taught developer — we have a program
              and a path designed around where you are right now.
            </p>
          </div>
          <div className="who-grid reveal">
            {WHO_FOR.map((w, i) => (
              <div key={i} className="who-card" style={{background: w.color, borderColor: w.border}}>
                <div className="who-icon">{w.icon}</div>
                <h3 className="who-title">{w.title}</h3>
                <p className="who-subtitle">{w.subtitle}</p>
                <p className="who-desc">{w.desc}</p>
                <ul className="who-points">
                  {w.points.map((pt, j) => <li key={j}>✅ {pt}</li>)}
                </ul>
                <div className="who-actions">
                  <Link to="/programs" className="btn btn-outline who-btn">View Programs</Link>
                  <Link to="/contact" className="btn btn-primary who-btn">Course Registration →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" ref={howRef}>
        <div className="container">
          <div className="how-header reveal">
            <div>
              <span className="section-label">The Process</span>
              <h2 className="section-title">How TechFoundry Works</h2>
              <p className="section-subtitle">
                From your first application to your first job offer — here's what the journey looks like.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary how-apply-btn">Start Today →</Link>
          </div>
          <div className="how-grid reveal" style={{marginTop: '3rem'}}>
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="how-step">
                <div className="how-step-number">{step.step}</div>
                <div className="how-step-icon">{step.icon}</div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>
                {i < HOW_IT_WORKS.length - 1 && <div className="how-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="section section-alt" ref={programsRef}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Programs</span>
            <h2 className="section-title">Choose Your Path</h2>
            <p className="section-subtitle">
              Industry-aligned programs designed to take you from beginner to job-ready professional.
            </p>
          </div>
          <div className="grid-3 reveal" style={{marginTop: '2.5rem'}}>
            {PROGRAMS.map((prog) => (
              <article key={prog.slug} className="card program-card">
                <div className="program-img-wrap" style={{background: prog.color}}>
                  <img src={prog.img} alt={prog.title} className="program-img" />
                </div>
                <div className="card-body">
                  <div className="program-icon">{prog.icon}</div>
                  <h3 className="program-title">{prog.title}</h3>
                  <p className="program-desc">{prog.desc}</p>
                  <span className="badge badge-blue program-meta">{prog.meta}</span>
                  <Link to={`/programs/${prog.slug}`} className="btn btn-outline" style={{marginTop: '1rem', width: '100%', justifyContent: 'center'}}>
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="reveal" style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/programs" className="btn btn-ghost">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* ===== LEARNING EXPERIENCE ===== */}
      <section className="section" ref={learnRef}>
        <div className="container">
          <div className="learn-header reveal">
            <div>
              <span className="section-label">The Learning Experience</span>
              <h2 className="section-title">How We Teach</h2>
              <p className="section-subtitle">
                TechFoundry isn't a content library. It's a structured, guided experience designed to take
                you from learner to professional — with every element built around that outcome.
              </p>
            </div>
            <img src="/assets/learn-forge-lab.jpg" alt="TechFoundry classroom experience" className="learn-img" />
          </div>
          <div className="grid-3 reveal" style={{marginTop:'2.5rem'}}>
            {LEARNING_EXPERIENCE.map((item, i) => (
              <div key={i} className="learn-card">
                <div className="learn-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section" ref={testimRef}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}} className="reveal">
            <span className="section-label">Student Stories</span>
            <h2 className="section-title">Hear from Our Graduates</h2>
            <p className="section-subtitle" style={{margin: '0.5rem auto 0'}}>
              Real outcomes from real people who chose to forge their careers with TechFoundry.
            </p>
          </div>

          {/* Featured testimonial */}
          <div className="testimonial-featured reveal">
            <div className="testimonial-quote-icon">"</div>
            <blockquote className="testimonial-quote">
              {TESTIMONIALS[activeTestimonial].quote}
            </blockquote>
            <div className="testimonial-author">
              <span className="testimonial-avatar">{TESTIMONIALS[activeTestimonial].avatar}</span>
              <div>
                <strong>{TESTIMONIALS[activeTestimonial].name}</strong>
                <p>{TESTIMONIALS[activeTestimonial].role}</p>
                <span className="badge badge-blue" style={{marginTop: '0.3rem', display: 'inline-flex'}}>
                  {TESTIMONIALS[activeTestimonial].program}
                </span>
              </div>
            </div>
            {/* Dots */}
            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === activeTestimonial ? ' active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* All testimonial cards */}
          <div className="testimonials-grid reveal" style={{marginTop: '2.5rem'}}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testimonial-card${i === activeTestimonial ? ' active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
              >
                <p className="tcard-quote">"{t.quote.substring(0, 110)}…"</p>
                <div className="tcard-author">
                  <span className="tcard-avatar">{t.avatar}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAREER OUTCOMES ===== */}
      <section className="section section-alt" ref={careerRef}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}} className="reveal">
            <span className="section-label">Hiring Partners & Placements</span>
            <h2 className="section-title">Where Our Graduates Work</h2>
            <p className="section-subtitle" style={{margin: '0.5rem auto 0'}}>
              TechFoundry engineers and developers are actively hired by premier technology companies and innovative product engineering teams.
            </p>
          </div>

          {/* Hiring Companies Grid */}
          {/* Hiring Companies Grid - Only Logos linking to Official Websites */}
          <div className="hiring-logos-grid reveal">
            {HIRING_COMPANIES.map((company, i) => (
              <a
                key={i}
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="hiring-logo-card"
                title={`Visit ${company.name} official website`}
                aria-label={`Visit ${company.name} official website`}
              >
                <div className="hiring-logo-inner">
                  <img src={company.logo} alt={company.name} className="hiring-logo-img" />
                </div>
                <div className="hiring-logo-hover-badge">
                  <span>Visit Official Website ↗</span>
                </div>
              </a>
            ))}
          </div>

          {/* Career Roles by Program */}
          <div style={{textAlign: 'center', margin: '3.5rem 0 1.5rem'}} className="reveal">
            <h3 style={{fontSize: '1.25rem', color: '#fff'}}>Roles You Can Target Across Programs</h3>
            <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem'}}>
              Industry-aligned preparation covering Artificial Intelligence, Full-Stack Web Development, and Systems Engineering.
            </p>
          </div>
          <div className="career-grid reveal">
            {CAREER_ROLES.map((c, i) => (
              <div key={i} className="career-card">
                <div className="career-icon">{c.icon}</div>
                <h3 className="career-program">{c.program}</h3>
                <div className="career-roles">
                  {c.roles.map((role, j) => (
                    <span key={j} className="career-role-pill">{role}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="career-note reveal">
            <div className="career-note-inner">
              <span className="career-note-icon">📌</span>
              <p>
                <strong>Important:</strong> Salary outcomes and job placement are not guaranteed.
                Results depend on individual effort, skill development, and market conditions.
                TechFoundry provides full placement support — the drive has to come from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCHOLARSHIP BANNER ===== */}
      <section className="scholarship-banner reveal" ref={schRef}>
        <div className="container scholarship-banner-inner">
          <div>
            <span className="sch-badge">🎓 Full Scholarship Available</span>
            <h2>TechFoundry Talent Scholarship</h2>
            <p>
              Exceptional talent can come from any background. If you demonstrate aptitude and determination
              but face financial constraints — we want to hear from you.
            </p>
            <ul className="sch-mini-list">
              <li>✅ Zero program fees for selected candidates</li>
              <li>✅ Same cohort, same mentors, same projects</li>
              <li>✅ Full placement support included</li>
            </ul>
          </div>
          <Link to="/scholarship" className="btn btn-accent btn-lg">Learn About Scholarship →</Link>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="section section-alt" ref={compareRef}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}} className="reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">TechFoundry vs The Alternatives</h2>
            <p className="section-subtitle" style={{margin:'0.5rem auto 0'}}>
              See how TechFoundry stacks up against traditional college education and generic online courses.
            </p>
          </div>
          <div className="compare-wrap reveal">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-feature-col">Feature</th>
                  <th className="compare-tf">
                    <span className="compare-badge">⚙ TechFoundry</span>
                  </th>
                  <th>Online Courses</th>
                  <th>College / University</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i}>
                    <td className="compare-feature">{row.feature}</td>
                    <td className="compare-tf compare-check">{row.tf  ? '✅' : '❌'}</td>
                    <td className="compare-check">{row.online   ? '✅' : '❌'}</td>
                    <td className="compare-check">{row.college  ? '✅' : '❌'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== UPCOMING BATCH ===== */}
      <section className="section" ref={batchRef}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}} className="reveal">
            <span className="section-label">Next Batch</span>
            <h2 className="section-title">Upcoming Cohorts</h2>
            <p className="section-subtitle" style={{margin:'0.5rem auto 0'}}>
              Seats are strictly limited to 5 seats per cohort to ensure focused 1:1 mentoring. Apply early to secure your spot.
            </p>
          </div>
          <div className="batch-grid reveal">
            {[
              { program: 'AI Engineering', icon: '🤖', start: 'November 2, 2026', duration: '12 weeks', seats: '5 seats', status: 'Open', slug: 'ai-engineering', statusColor: '#059669' },
              { program: 'Web Development', icon: '🌐', start: 'November 2, 2026', duration: '10 weeks', seats: '5 seats', status: 'Open', slug: 'web-development', statusColor: '#059669' },
              { program: 'Software Engineering', icon: '⚙️', start: 'November 2, 2026', duration: '14 weeks', seats: '5 seats', status: 'Filling Fast', slug: 'software-engineering', statusColor: '#d97706' },
            ].map((b, i) => (
              <div key={i} className="batch-card">
                <div className="batch-top">
                  <span className="batch-icon">{b.icon}</span>
                  <span className="batch-status" style={{background: b.statusColor + '20', color: b.statusColor, border: `1px solid ${b.statusColor}40`}}>
                    {b.status}
                  </span>
                </div>
                <h3 className="batch-program">{b.program}</h3>
                <div className="batch-details">
                  <div className="batch-detail-row">
                    <span>🗓️ Start Date</span>
                    <strong>{b.start}</strong>
                  </div>
                  <div className="batch-detail-row">
                    <span>⏱ Duration</span>
                    <strong>{b.duration}</strong>
                  </div>
                  <div className="batch-detail-row">
                    <span>👥 Cohort Size</span>
                    <strong>{b.seats}</strong>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'1rem'}}>
                  Reserve My Seat →
                </Link>
              </div>
            ))}
          </div>
          <div className="batch-note reveal">
            <p>📌 Batch dates are subject to change. Register now and our team will confirm your batch details during the admission call.</p>
          </div>
        </div>
      </section>

      {/* ===== QUICK FAQ ===== */}
      <section className="section section-alt" ref={homeFaqRef}>
        <div className="container">
          <div className="hfaq-layout reveal">
            <div className="hfaq-left">
              <span className="section-label">Quick Answers</span>
              <h2 className="section-title">Common Questions</h2>
              <p className="section-subtitle">
                Can't find your answer here? Our team is a WhatsApp message away.
              </p>
              <div style={{marginTop:'1.5rem', display:'flex', flexDirection:'column', gap:'0.75rem'}}>
                <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  💬 WhatsApp Us
                </a>
                <Link to="/faq" className="btn btn-outline">View All FAQs →</Link>
              </div>
            </div>
            <div className="hfaq-right">
              {HOME_FAQS.map((item, i) => (
                <HomeFAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUBSCRIBE ===== */}
      <section className="section section-alt" ref={subscribeRef}>
        <div className="container subscribe-section reveal">
          <div>
            <span className="section-label">Stay Updated</span>
            <h2 style={{margin: '0.5rem 0'}}>Get Early Access</h2>
            <p className="section-subtitle">
              Share your email to start the assessment process for a <strong>free seat</strong> consideration.
            </p>
          </div>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input type="email" name="email" placeholder="your@email.com" required className="subscribe-input" aria-label="Email address" />
            <button type="submit" className="btn btn-primary">Sign Up →</button>
          </form>
        </div>
      </section>

      {/* ===== FINAL CTA STRIP ===== */}
      <section className="final-cta-section">
        <div className="container final-cta-inner">
          <div className="final-cta-text">
            <h2>Ready to Start Your Tech Career?</h2>
            <p>Join the next cohort. Limited seats. Registrations are reviewed on a rolling basis.</p>
          </div>
          <div className="final-cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Course Registration →</Link>
            <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* ---- HERO ---- */
        .hero-section {
          background: radial-gradient(ellipse 90% 70% at 50% -10%, #0d2860 0%, #061330 55%, #04091a 100%);
          padding: 5rem 0 4rem;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.4), transparent);
        }
        .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .hero-title { font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.15; margin: 0.75rem 0; }
        .hero-highlight {
          background: linear-gradient(90deg, #00d2ff, #38bdf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-sub { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.75rem; line-height: 1.65; }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .hero-trust { display: flex; gap: 1.25rem; flex-wrap: wrap; font-size: 0.85rem; color: var(--muted); font-weight: 500; }
        .hero-img { width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); object-fit: cover; max-height: 420px; border: 1px solid var(--border); }

        /* ---- STATS ---- */
        .stats-bar {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 100%);
          border-top: 1px solid #1e3a6d;
          border-bottom: 1px solid #1e3a6d;
          padding: 1.75rem 0;
        }
        .stats-inner { display: flex; align-items: center; justify-content: space-around; gap: 1rem; flex-wrap: wrap; }
        .stat-item { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; text-align: center; }
        .stat-item strong {
          font-size: 2rem; font-weight: 800;
          color: #00d2ff;
          background: linear-gradient(135deg, #ffffff 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-item span { font-size: 0.78rem; color: rgba(255,255,255,0.75); font-weight: 500; letter-spacing: 0.03em; }
        .stat-divider { width: 1px; height: 40px; background: rgba(56, 189, 248, 0.25); }

        /* ---- WHY CARDS ---- */
        .section-header { max-width: 600px; }
        .why-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
          display: flex; flex-direction: column;
        }
        .why-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.12); }
        .why-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .why-card h4 { margin-bottom: 0.4rem; font-size: 1.05rem; }
        .why-card p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 0.85rem; }
        .why-points {
          list-style: none;
          padding: 0;
          margin: auto 0 0;
          padding-top: 0.85rem;
          border-top: 1px dashed var(--border);
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .why-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.83rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }
        .why-check {
          color: #38bdf8;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* ---- HOW IT WORKS ---- */
        .how-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
        .how-apply-btn { align-self: flex-end; flex-shrink: 0; }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
        }
        .how-step {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          padding: 2rem 1.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-right: none;
          position: relative;
          transition: background var(--transition);
        }
        .how-step:hover { background: var(--surface-2); }
        .how-step:first-child { border-radius: var(--radius) 0 0 var(--radius); }
        .how-step:last-child { border-right: 1px solid var(--border); border-radius: 0 var(--radius) var(--radius) 0; }
        .how-step-number {
          position: absolute;
          top: 1rem; left: 1rem;
          font-size: 0.75rem; font-weight: 800;
          color: #00d2ff; opacity: 0.85;
          letter-spacing: 0.05em;
        }
        .how-step-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .how-step-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
        .how-step-desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55; }
        .how-arrow {
          position: absolute; right: -14px; top: 50%; transform: translateY(-50%);
          font-size: 1.1rem; color: #00d2ff; z-index: 2;
          background: var(--surface-2); width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; border: 1px solid var(--border-strong);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        /* ---- PROGRAM CARDS ---- */
        .program-img-wrap { height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .program-img { width: 100%; height: 100%; object-fit: cover; }
        .program-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .program-title { font-size: 1.15rem; margin-bottom: 0.4rem; }
        .program-desc { font-size: 0.9rem; color: var(--muted); margin-bottom: 0.75rem; }
        .program-meta { margin-top: 0; }

        /* ---- TESTIMONIALS ---- */
        .testimonials-section { background: linear-gradient(135deg, #050e24 0%, #0a1936 50%, #0077b6 100%); }
        .testimonials-section .section-label { background: rgba(255,255,255,0.15); color: #fff; }
        .testimonials-section h2, .testimonials-section p { color: rgba(255,255,255,0.9); }

        .testimonial-featured {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-xl);
          padding: 3rem;
          text-align: center;
          max-width: 780px;
          margin: 0 auto;
          backdrop-filter: blur(10px);
        }
        .testimonial-quote-icon {
          font-size: 5rem; line-height: 1; color: rgba(255,255,255,0.2);
          font-family: Georgia, serif; margin-bottom: -1.5rem;
        }
        .testimonial-quote {
          font-size: 1.15rem; color: #fff; line-height: 1.75;
          font-style: italic; margin-bottom: 1.75rem;
          border: none; padding: 0;
        }
        .testimonial-author { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1.5rem; }
        .testimonial-avatar { font-size: 2.5rem; }
        .testimonial-author strong { color: #fff; display: block; }
        .testimonial-author p { color: rgba(255,255,255,0.7); font-size: 0.875rem; }
        .testimonial-dots { display: flex; justify-content: center; gap: 0.5rem; }
        .dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.3); border: none; cursor: pointer;
          transition: background var(--transition), transform var(--transition);
        }
        .dot.active { background: #fff; transform: scale(1.3); }

        .testimonials-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;
        }
        .testimonial-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius);
          padding: 1.25rem;
          cursor: pointer;
          transition: background var(--transition), border-color var(--transition), transform var(--transition);
        }
        .testimonial-card:hover, .testimonial-card.active {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-3px);
        }
        .tcard-quote { font-size: 0.82rem; color: rgba(255,255,255,0.8); line-height: 1.6; margin-bottom: 0.75rem; font-style: italic; }
        .tcard-author { display: flex; align-items: center; gap: 0.6rem; }
        .tcard-avatar { font-size: 1.5rem; }
        .tcard-author strong { color: #fff; font-size: 0.82rem; display: block; }
        .tcard-author p { color: rgba(255,255,255,0.6); font-size: 0.75rem; }

        /* ---- HIRING PARTNERS / WHERE OUR GRADUATES WORK ---- */
        .hiring-logos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .hiring-logo-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, rgba(8, 23, 56, 0.85) 0%, rgba(5, 14, 36, 0.95) 100%);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.25rem 1.25rem;
          min-height: 140px;
          text-decoration: none;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .hiring-logo-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #00b4d8, #00d2ff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .hiring-logo-card:hover::before {
          transform: scaleX(1);
        }
        .hiring-logo-card:hover {
          transform: translateY(-4px);
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 12px 35px rgba(0, 180, 216, 0.2);
        }
        .hiring-logo-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 72px;
        }
        .hiring-logo-img {
          max-width: 85%;
          max-height: 56px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45));
          transition: transform 0.3s ease;
        }
        .hiring-logo-card:hover .hiring-logo-img {
          transform: scale(1.06);
        }
        .hiring-logo-hover-badge {
          margin-top: 0.85rem;
          font-size: 0.76rem;
          font-weight: 600;
          color: #38bdf8;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          opacity: 0.85;
          transition: opacity 0.2s ease, color 0.2s ease;
        }
        .hiring-logo-card:hover .hiring-logo-hover-badge {
          opacity: 1;
          color: #00d2ff;
        }

        @media (max-width: 992px) {
          .hiring-logos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 550px) {
          .hiring-logos-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ---- CAREER OUTCOMES ---- */
        .career-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .career-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
          padding: 2rem; text-align: center;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }
        .career-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.15); }
        .career-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
        .career-program { font-size: 1.1rem; margin-bottom: 1.25rem; color: #00d2ff; }
        .career-roles { display: flex; flex-direction: column; gap: 0.5rem; }
        .career-role-pill {
          background: var(--surface-2); border: 1px solid var(--border);
          border-radius: 999px; padding: 0.4rem 1rem;
          font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;
          transition: background var(--transition), color var(--transition), border-color var(--transition);
        }
        .career-card:hover .career-role-pill { background: rgba(0, 180, 216, 0.15); color: #00e5ff; border-color: rgba(0, 180, 216, 0.4); }
        .career-note {
          margin-top: 2rem;
          background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: var(--radius);
          padding: 1rem 1.25rem;
        }
        .career-note-inner { display: flex; gap: 0.75rem; align-items: flex-start; }
        .career-note-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; }
        .career-note p { font-size: 0.85rem; color: #fde047; line-height: 1.55; }
        .career-note strong { color: #fef08a; }

        /* ---- SCHOLARSHIP BANNER ---- */
        .scholarship-banner {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 50%, #0077b6 100%);
          border: 1px solid #1e3a6d;
          padding: 4rem 0;
        }
        .scholarship-banner-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
        .scholarship-banner h2 { color: #fff; margin: 0.5rem 0; }
        .scholarship-banner p { color: rgba(255,255,255,0.85); max-width: 560px; margin-bottom: 1rem; }
        .sch-badge {
          display: inline-block; background: rgba(56, 189, 248, 0.2);
          color: #38bdf8; font-size: 0.8rem; font-weight: 600;
          border: 1px solid rgba(56, 189, 248, 0.4);
          padding: 0.25rem 0.75rem; border-radius: 999px; margin-bottom: 0.5rem;
          letter-spacing: 0.04em;
        }
        .sch-mini-list { display: flex; flex-direction: column; gap: 0.35rem; }
        .sch-mini-list li { color: rgba(255,255,255,0.9); font-size: 0.875rem; }

        /* ---- SUBSCRIBE ---- */
        .subscribe-section { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .subscribe-form { display: flex; gap: 0.75rem; }
        .subscribe-input {
          flex: 1; padding: 0.75rem 1rem; border: 1.5px solid var(--border-strong);
          background: var(--surface-2); color: #ffffff;
          border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit;
          outline: none; transition: border-color var(--transition);
        }
        .subscribe-input::placeholder { color: var(--muted); }
        .subscribe-input:focus { border-color: #00d2ff; }

        /* ---- FINAL CTA ---- */
        .final-cta-section {
          background: linear-gradient(135deg, #050e24 0%, #0a1936 100%);
          border-top: 1px solid #1e3a6d;
          padding: 4rem 0;
        }
        .final-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
        .final-cta-text h2 { color: #fff; margin-bottom: 0.4rem; }
        .final-cta-text p { color: #9ca3af; }
        .final-cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 1024px) {
          .how-grid { grid-template-columns: repeat(2, 1fr); }
          .how-step { border-right: 1px solid var(--border); border-bottom: none; }
          .how-step:first-child { border-radius: var(--radius) 0 0 0; }
          .how-step:nth-child(2) { border-radius: 0 var(--radius) 0 0; }
          .how-step:nth-child(3) { border-radius: 0 0 0 var(--radius); border-top: none; }
          .how-step:last-child { border-radius: 0 0 var(--radius) 0; border-top: none; }
          .how-arrow { display: none; }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
          .compare-table th, .compare-table td { padding: 0.75rem 0.5rem; font-size: 0.85rem; }
        }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-visual { display: none; }
          .subscribe-section { grid-template-columns: 1fr; gap: 1.5rem; }
          .stat-divider { display: none; }
          .scholarship-banner-inner { flex-direction: column; }
          .final-cta-inner { flex-direction: column; text-align: center; }
          .hiring-grid { grid-template-columns: 1fr; }
          .career-grid { grid-template-columns: 1fr; }
          .how-header { flex-direction: column; align-items: flex-start; }
          .learn-header { grid-template-columns: 1fr; }
          .learn-img { display: none; }
          .who-grid { grid-template-columns: 1fr; }
          .batch-grid { grid-template-columns: 1fr; }
          .hfaq-layout { grid-template-columns: 1fr; }
          .compare-wrap { overflow-x: auto; }
        }
        @media (max-width: 640px) {
          .how-grid { grid-template-columns: 1fr; }
          .how-step { border-right: 1px solid var(--border); border-radius: 0 !important; }
          .how-step:first-child { border-radius: var(--radius) var(--radius) 0 0 !important; }
          .how-step:last-child { border-radius: 0 0 var(--radius) var(--radius) !important; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-featured { padding: 2rem 1.25rem; }
          .subscribe-form { flex-direction: column; }
          .batch-grid { grid-template-columns: 1fr; }
        }

        /* ---- WHO IS THIS FOR ---- */
        .who-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .who-card {
          border: 1.5px solid; border-radius: var(--radius-lg);
          padding: 2rem; display: flex; flex-direction: column; gap: 0.6rem;
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .who-card:hover { transform: translateY(-4px); box-shadow: 0 12px 35px rgba(0, 180, 216, 0.18); }
        .who-icon { font-size: 2.5rem; }
        .who-title { font-size: 1.2rem; font-weight: 800; margin: 0; color: #fff; }
        .who-subtitle { font-size: 0.8rem; font-weight: 600; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.06em; margin: 0; }
        .who-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0.25rem 0; }
        .who-points { display: flex; flex-direction: column; gap: 0.35rem; margin: 0.25rem 0 1rem; }
        .who-points li { font-size: 0.85rem; color: var(--text-secondary); }
        .who-actions { display: flex; gap: 0.6rem; margin-top: auto; padding-top: 0.5rem; flex-wrap: wrap; }
        .who-btn { font-size: 0.85rem; padding: 0.55rem 0.85rem; flex: 1; min-width: 120px; justify-content: center; text-align: center; }

        /* ---- LEARNING EXPERIENCE ---- */
        .learn-header {
          display: grid; grid-template-columns: 1fr 420px; gap: 3rem; align-items: center; margin-bottom: 0;
        }
        .learn-img {
          width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
          object-fit: cover; height: 280px; border: 1px solid var(--border);
        }
        .learn-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
          padding: 1.5rem; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
          position: relative; overflow: hidden;
        }
        .learn-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #00b4d8, #00d2ff);
          transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
        }
        .learn-card:hover::before { transform: scaleX(1); }
        .learn-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.12); }
        .learn-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
        .learn-card h4 { margin-bottom: 0.4rem; font-size: 1rem; color: #fff; }
        .learn-card p { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

        /* ---- COMPARISON TABLE ---- */
        .compare-wrap { overflow-x: auto; border-radius: var(--radius-lg); border: 1px solid var(--border); box-shadow: var(--shadow); }
        .compare-table {
          width: 100%; border-collapse: collapse; font-size: 0.9rem;
          background: var(--surface);
        }
        .compare-table thead { background: var(--surface-2); border-bottom: 1px solid var(--border-strong); }
        .compare-table th {
          padding: 1rem 1.25rem; text-align: center; font-size: 0.85rem;
          font-weight: 700; color: var(--text); letter-spacing: 0.04em;
        }
        .compare-feature-col { text-align: left !important; width: 40%; }
        .compare-tf { background: rgba(0, 180, 216, 0.12) !important; border-left: 1px solid var(--border-strong); border-right: 1px solid var(--border-strong); }
        .compare-badge {
          display: inline-block; background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%); color: #fff;
          padding: 0.35rem 0.95rem; border-radius: 999px; font-size: 0.82rem; font-weight: 700;
          box-shadow: 0 2px 10px rgba(0, 180, 216, 0.3);
        }
        .compare-table tbody tr { border-top: 1px solid var(--border); }
        .compare-table tbody tr:hover { background: var(--surface-2); }
        .compare-feature { padding: 0.9rem 1.25rem; color: var(--text-secondary); font-size: 0.875rem; }
        .compare-check { text-align: center; padding: 0.9rem 1rem; font-size: 1.1rem; }

        /* ---- UPCOMING BATCH ---- */
        .batch-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .batch-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
          padding: 1.75rem; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }
        .batch-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.15); }
        .batch-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
        .batch-icon { font-size: 2rem; }
        .batch-status { font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 999px; }
        .batch-program { font-size: 1.15rem; margin-bottom: 1.25rem; color: #fff; }
        .batch-details { display: flex; flex-direction: column; gap: 0.75rem; }
        .batch-detail-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 0.6rem 0.75rem; background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-sm);
          font-size: 0.875rem;
        }
        .batch-detail-row span { color: var(--muted); }
        .batch-detail-row strong { color: var(--text); }
        .batch-note {
          margin-top: 1.5rem; text-align: center;
          background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: var(--radius);
          padding: 0.75rem 1.25rem;
        }
        .batch-note p { font-size: 0.82rem; color: #fde047; }

        /* ---- HOME FAQ ---- */
        .hfaq-layout { display: grid; grid-template-columns: 340px 1fr; gap: 3rem; align-items: start; }
        .hfaq-left .section-title { margin-bottom: 0.5rem; }
        .hfaq-right { display: flex; flex-direction: column; gap: 0; }
        .hfaq-item {
          border: 1px solid var(--border); border-bottom: none; background: var(--surface);
          transition: background var(--transition);
        }
        .hfaq-item:first-child { border-radius: var(--radius) var(--radius) 0 0; }
        .hfaq-item:last-child { border-bottom: 1px solid var(--border); border-radius: 0 0 var(--radius) var(--radius); }
        .hfaq-item.open { background: var(--surface-2); }
        .hfaq-question {
          width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          padding: 1rem 1.25rem; background: transparent; border: none; text-align: left;
          font-size: 0.9rem; font-weight: 600; color: var(--text); cursor: pointer;
          transition: color var(--transition);
        }
        .hfaq-question:hover { color: #00d2ff; }
        .hfaq-chevron { font-size: 1.2rem; font-weight: 400; color: #00d2ff; flex-shrink: 0; }
        .hfaq-answer { padding: 0 1.25rem 1rem; }
        .hfaq-answer p { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.7; }
      `}</style>
    </main>
  )
}
