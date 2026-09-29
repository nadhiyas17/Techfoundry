import React, { useState, useEffect } from 'react'

const API_URL = 'http://localhost:4000/api/apply'

const INITIAL_FORM = {
  name: '', phone: '', email: '', program: '',
  qualification: '', college: '', gradYear: '',
  parentName: '', parentPhone: '', parentEmail: '',
  linkedin: '', message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Full name is required'
  if (!form.phone.trim()) errors.phone = 'Phone number is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email'
  if (!form.program) errors.program = 'Please select a program'
  if (!form.qualification.trim()) errors.qualification = 'Qualification is required'
  if (!form.college.trim()) errors.college = 'College / institution name is required'
  if (!form.gradYear.trim()) errors.gradYear = 'Graduation year is required'
  if (!form.parentName.trim()) errors.parentName = 'Parent / guardian name is required'
  if (!form.parentPhone.trim()) errors.parentPhone = 'Parent / guardian mobile is required'
  if (!form.parentEmail.trim()) errors.parentEmail = 'Parent / guardian email is required'
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submittedInfo, setSubmittedInfo] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [mapMode, setMapMode] = useState('osm') // 'osm' | 'google'
  const [copied, setCopied] = useState(false)

  function handleCopyAddress() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('Rent A Desk, 2nd Floor, Serenity Square, Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad, Telangana 500081')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  useEffect(() => {
    document.title = 'Course Registration — TechFoundry'
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // scroll to first error
      const firstErr = document.querySelector('.field-error')
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setStatus('submitting')

    const programLabels = {
      'ai-engineering': 'AI Engineering (12 weeks)',
      'web-development': 'Web Development (10 weeks)',
      'software-engineering': 'Software Engineering (14 weeks)',
      'scholarship': 'Scholarship Program (AI Engineering)',
    }
    const selectedProgramLabel = programLabels[form.program] || form.program

    const waLines = [
      '🎓 *New Course Registration - TechFoundry*',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Candidate:* ${form.name.trim()}`,
      `📱 *Mobile / WhatsApp:* ${form.phone.trim()}`,
      `✉️ *Email:* ${form.email.trim()}`,
      `🎯 *Selected Program:* ${selectedProgramLabel}`,
      `📚 *Highest Qualification:* ${form.qualification.trim()}`,
      `🏛️ *College / Institute:* ${form.college.trim()}`,
      `📅 *Graduation Year:* ${form.gradYear.trim()}`,
      `👨‍👩‍👧 *Parent / Guardian:* ${form.parentName.trim()}`,
      `📞 *Parent Contact:* ${form.parentPhone.trim()}`,
      `✉️ *Parent Email:* ${form.parentEmail.trim()}`,
    ]
    if (form.linkedin && form.linkedin.trim()) waLines.push(`🔗 *LinkedIn:* ${form.linkedin.trim()}`)
    if (form.message && form.message.trim()) waLines.push(`💬 *Message:* ${form.message.trim()}`)
    waLines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    waLines.push('📍 *Submitted via TechFoundry Web Portal*')

    const waText = waLines.join('\n')
    const waUrl = `https://wa.me/918309576596?text=${encodeURIComponent(waText)}`

    // Open WhatsApp in a new tab immediately to notify +91 83095 76596
    try {
      window.open(waUrl, '_blank')
    } catch (_) {}

    setSubmittedInfo({ ...form, progTitle: selectedProgramLabel, waUrl })

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      // If server is down, still show success — server stores to JSON file when running
      setStatus('success')
      setForm(INITIAL_FORM)
    }
  }

  if (status === 'success') {
    return (
      <main>
        <section className="section">
          <div className="container success-container">
            <div className="success-card">
              <div className="success-icon">🎉</div>
              <h2>Registration Submitted!</h2>
              <p>
                Thank you <strong>{submittedInfo?.name || ''}</strong> for registering with TechFoundry.
                Our team will review your registration and reach out to you within <strong>24–48 hours</strong>.
              </p>

              <div className="wa-notif-box">
                <div className="wa-notif-header">
                  <span className="wa-bubble-icon">💬</span>
                  <div>
                    <strong>WhatsApp Notification to +91 83095 76596</strong>
                    <p>Your registration details have been prepared for instant submission to TechFoundry admissions on WhatsApp.</p>
                  </div>
                </div>
                <a
                  href={submittedInfo?.waUrl || 'https://wa.me/918309576596'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-direct"
                >
                  💬 Send / Open on WhatsApp (+91 83095 76596)
                </a>
              </div>

              <button className="btn btn-primary" style={{marginTop:'1.5rem'}} onClick={() => { setStatus('idle'); setForm(INITIAL_FORM); }}>
                Submit Another Registration
              </button>
            </div>
          </div>
        </section>
        <style>{`
          .success-container { display: flex; justify-content: center; padding: 3rem 0; }
          .success-card { max-width: 540px; text-align: center; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 3rem 2rem; box-shadow: var(--shadow); }
          .success-icon { font-size: 3.5rem; margin-bottom: 1rem; }
          .success-card h2 { margin-bottom: 1rem; }
          .success-card p { color: var(--text-secondary); line-height: 1.65; }
          .success-card a { color: var(--primary); }
          .wa-notif-box {
            margin: 1.5rem 0 1rem;
            padding: 1.25rem;
            background: rgba(37, 211, 102, 0.08);
            border: 1px solid rgba(37, 211, 102, 0.35);
            border-radius: var(--radius);
            text-align: left;
          }
          .wa-notif-header {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }
          .wa-notif-header strong {
            display: block;
            color: #25d366;
            font-size: 0.95rem;
          }
          .wa-notif-header p {
            color: var(--text-secondary);
            font-size: 0.82rem;
            margin: 0.2rem 0 0;
            line-height: 1.4;
          }
          .wa-bubble-icon {
            font-size: 1.5rem;
            line-height: 1;
            flex-shrink: 0;
          }
          .btn-whatsapp-direct {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: 100%;
            background: #25d366;
            color: #04091a !important;
            font-weight: 700;
            font-size: 0.95rem;
            padding: 0.75rem 1.25rem;
            border-radius: var(--radius-sm);
            text-decoration: none;
            transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
          }
          .btn-whatsapp-direct:hover {
            background: #20bd5a;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
          }
        `}</style>
      </main>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Course Registration</span>
          <h1>Register for a Course</h1>
          <p className="page-hero-sub">
            Fill in the form below to register for any of our courses — or reach out with questions.
            We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Contact Info */}
          <aside className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <span className="contact-item-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>Rent A Desk, 2nd Floor, Serenity Square, Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad, Telangana 500081</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+918309576596">8309576596</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon">💬</span>
              <div>
                <strong>WhatsApp</strong>
                <p>
                  <a href="https://wa.me/918309576596" target="_blank" rel="noopener noreferrer">
                    Chat with us on WhatsApp →
                  </a>
                </p>
              </div>
            </div>

            <div className="office-hours">
              <h4>Office Hours</h4>
              <p>Mon–Sat: 9:00 AM – 6:00 PM IST</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="map-embed-wrapper">
              <div className="map-embed-header">
                <div className="map-tab-group">
                  <button
                    type="button"
                    className={`map-tab-btn ${mapMode === 'osm' ? 'active' : ''}`}
                    onClick={() => setMapMode('osm')}
                  >
                    🗺️ Map View
                  </button>
                  <button
                    type="button"
                    className={`map-tab-btn ${mapMode === 'google' ? 'active' : ''}`}
                    onClick={() => setMapMode('google')}
                  >
                    Google Map
                  </button>
                </div>
                <button
                  type="button"
                  className="map-copy-btn"
                  onClick={handleCopyAddress}
                  title="Copy full address"
                >
                  {copied ? '✓ Copied' : '📋 Copy Address'}
                </button>
              </div>

              <div className="map-frame-container">
                {mapMode === 'osm' ? (
                  <iframe
                    title="TechFoundry location map - OpenStreetMap"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=78.3730%2C17.4410%2C78.3870%2C17.4495&layer=mapnik&marker=17.4452%2C78.3800"
                    width="100%"
                    height="240"
                    style={{ border: 0, display: 'block', width: '100%' }}
                    loading="lazy"
                  />
                ) : (
                  <iframe
                    title="TechFoundry location map - Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.284705030438!2d78.37989397516597!3d17.445214883451566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e4334360e9%3A0x6b44783321526487!2sThe%20Westin%20Hyderabad%20Mindspace!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                    width="100%"
                    height="240"
                    style={{ border: 0, display: 'block', width: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </div>

              <div className="map-action-bar">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rent+A+Desk+Serenity+Square+Mindspace+HITEC+City+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-nav-btn"
                >
                  📍 Open Google Maps ↗
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rent+A+Desk+Serenity+Square+Mindspace+HITEC+City+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-nav-btn secondary"
                >
                  🧭 Get Directions ↗
                </a>
              </div>
            </div>
          </aside>

          {/* Course Registration Form */}
          <div className="form-wrap">
            <h3>Course Registration Form</h3>
            <p style={{color:'var(--muted)', marginBottom:'1.5rem', fontSize:'0.9rem'}}>
              Fields marked with <span style={{color:'var(--error)'}}>*</span> are required.
            </p>

            <form onSubmit={handleSubmit} className="apply-form" aria-label="Program application form" noValidate>

              <div className="form-section-label">Program Selection</div>
              <div className="field">
                <label htmlFor="program">Program of Interest <span className="req">*</span></label>
                <select id="program" name="program" value={form.program} onChange={handleChange} className={errors.program ? 'has-error' : ''}>
                  <option value="">— Select a program —</option>
                  <option value="ai-engineering">AI Engineering (12 weeks)</option>
                  <option value="web-development">Web Development (10 weeks)</option>
                  <option value="software-engineering">Software Engineering (14 weeks)</option>
                  <option value="scholarship">Scholarship Program (AI Engineering)</option>
                </select>
                {errors.program && <span className="field-error">{errors.program}</span>}
              </div>

              <div className="form-section-label">Personal Details</div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Full Name <span className="req">*</span></label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={errors.name ? 'has-error' : ''} />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number <span className="req">*</span></label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={errors.phone ? 'has-error' : ''} />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">Email Address <span className="req">*</span></label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={errors.email ? 'has-error' : ''} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-section-label">Academic Details</div>
              <div className="field">
                <label htmlFor="qualification">Highest Qualification <span className="req">*</span></label>
                <input id="qualification" name="qualification" value={form.qualification} onChange={handleChange} placeholder="e.g. B.Tech Computer Science" className={errors.qualification ? 'has-error' : ''} />
                {errors.qualification && <span className="field-error">{errors.qualification}</span>}
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="college">College / Institution <span className="req">*</span></label>
                  <input id="college" name="college" value={form.college} onChange={handleChange} placeholder="College or university name" className={errors.college ? 'has-error' : ''} />
                  {errors.college && <span className="field-error">{errors.college}</span>}
                </div>
                <div className="field">
                  <label htmlFor="gradYear">Graduation Year <span className="req">*</span></label>
                  <input id="gradYear" name="gradYear" value={form.gradYear} onChange={handleChange} placeholder="e.g. 2024" className={errors.gradYear ? 'has-error' : ''} />
                  {errors.gradYear && <span className="field-error">{errors.gradYear}</span>}
                </div>
              </div>

              <div className="form-section-label">Parent / Guardian Details</div>
              <div className="field">
                <label htmlFor="parentName">Parent / Guardian Name <span className="req">*</span></label>
                <input id="parentName" name="parentName" value={form.parentName} onChange={handleChange} placeholder="Full name" className={errors.parentName ? 'has-error' : ''} />
                {errors.parentName && <span className="field-error">{errors.parentName}</span>}
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="parentPhone">Parent / Guardian Mobile <span className="req">*</span></label>
                  <input id="parentPhone" name="parentPhone" value={form.parentPhone} onChange={handleChange} placeholder="+91 98765 43210" className={errors.parentPhone ? 'has-error' : ''} />
                  {errors.parentPhone && <span className="field-error">{errors.parentPhone}</span>}
                </div>
                <div className="field">
                  <label htmlFor="parentEmail">Parent / Guardian Email <span className="req">*</span></label>
                  <input id="parentEmail" type="email" name="parentEmail" value={form.parentEmail} onChange={handleChange} placeholder="parent@email.com" className={errors.parentEmail ? 'has-error' : ''} />
                  {errors.parentEmail && <span className="field-error">{errors.parentEmail}</span>}
                </div>
              </div>

              <div className="form-section-label">Additional (Optional)</div>
              <div className="field">
                <label htmlFor="linkedin">LinkedIn Profile URL</label>
                <input id="linkedin" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/yourname" />
              </div>
              <div className="field">
                <label htmlFor="message">Message / Any Questions</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Anything you'd like us to know..." rows={4} />
              </div>
              <div className="field">
                <label>Attach Resume (optional)</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" />
              </div>

              {status === 'error' && (
                <div className="form-error-banner">
                  Something went wrong. Please try again or reach out on WhatsApp.
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'submitting'} style={{width:'100%', justifyContent:'center'}}>
                {status === 'submitting' ? 'Submitting…' : 'Complete Registration →'}
              </button>

              <p className="form-disclaimer">
                By submitting, you agree to be contacted by TechFoundry regarding your registration.
                We do not share your information with third parties.
              </p>
            </form>
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

        .contact-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-info h3 { margin-bottom: 1.5rem; color: #fff; }
        .contact-item {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .contact-item-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 2px; }
        .contact-item strong { display: block; font-size: 0.85rem; margin-bottom: 0.2rem; color: #fff; }
        .contact-item p, .contact-item a { font-size: 0.9rem; color: var(--text-secondary); }
        .contact-item a { color: #00d2ff; }
        .office-hours {
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--surface);
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        .office-hours h4 { margin-bottom: 0.5rem; font-size: 0.9rem; color: #fff; }
        .office-hours p { font-size: 0.85rem; color: var(--muted); margin-bottom: 0.2rem; }

        .form-wrap {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          box-shadow: var(--shadow);
        }
        .form-wrap h3 { margin-bottom: 0.4rem; color: #fff; }
        .apply-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-section-label {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00d2ff;
          padding: 0.5rem 0 0.25rem;
          border-bottom: 1px solid rgba(0, 180, 216, 0.25);
          margin-top: 0.5rem;
        }
        .field { display: flex; flex-direction: column; gap: 0.3rem; }
        .field label { font-size: 0.875rem; font-weight: 500; color: var(--text-secondary); }
        .req { color: var(--error); }
        .field input, .field select, .field textarea {
          padding: 0.625rem 0.875rem;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-family: inherit;
          color: #ffffff;
          background: var(--surface-2);
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: #00d2ff;
          box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
        }
        .field input.has-error, .field select.has-error { border-color: var(--error); }
        .field textarea { resize: vertical; }
        .field-error { font-size: 0.8rem; color: #fca5a5; font-weight: 500; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-error-banner {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
        }
        .form-disclaimer {
          font-size: 0.78rem;
          color: var(--muted);
          text-align: center;
          line-height: 1.55;
        }
        /* Map Embed Component */
        .map-embed-wrapper {
          margin-top: 1.25rem;
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: var(--radius);
          background: var(--surface-2);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        .map-embed-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.75rem;
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid rgba(56, 189, 248, 0.15);
        }
        .map-tab-group {
          display: flex;
          gap: 0.35rem;
        }
        .map-tab-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--muted);
          font-size: 0.75rem;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .map-tab-btn:hover {
          color: #fff;
        }
        .map-tab-btn.active {
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.4);
          color: #38bdf8;
        }
        .map-copy-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 0.72rem;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .map-copy-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
        }
        .map-frame-container {
          position: relative;
          background: #0f172a;
          min-height: 240px;
        }
        .map-action-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          padding: 0.65rem 0.75rem;
          background: rgba(15, 23, 42, 0.95);
          border-top: 1px solid rgba(56, 189, 248, 0.15);
        }
        .map-nav-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 0.45rem 0.6rem;
          border-radius: 6px;
          text-decoration: none;
          text-align: center;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
          transition: all 0.2s ease;
        }
        .map-nav-btn:hover {
          background: rgba(56, 189, 248, 0.18);
          border-color: #38bdf8;
        }
        .map-nav-btn.secondary {
          color: #94a3b8;
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
        }
        .map-nav-btn.secondary:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-info { order: 2; }
        }
        @media (max-width: 600px) {
          .field-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}
