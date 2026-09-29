import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const PROGRAMS = [
  {
    id: 'ai-engineering',
    title: 'AI Engineering Program',
    duration: '16 Weeks • Full-Time Immersive',
    icon: '🤖',
  },
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    duration: '14 Weeks • Hands-on Project Driven',
    icon: '🌐',
  },
  {
    id: 'software-engineering',
    title: 'Software Systems Engineering',
    duration: '12 Weeks • Production Systems',
    icon: '⚙️',
  },
]

export default function PayFeePage() {
  const [searchParams] = useSearchParams()
  const initialProgram = searchParams.get('program') || 'ai-engineering'

  const [selectedProgId, setSelectedProgId] = useState(initialProgram)

  // Form fields
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [referredBy, setReferredBy] = useState('')
  const [transactionId, setTransactionId] = useState('')

  // UI state
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [successReceipt, setSuccessReceipt] = useState(null)
  const [showUtrHelp, setShowUtrHelp] = useState(false)

  useEffect(() => {
    document.title = 'Pay Fee Online - TechFoundry'
    window.scrollTo(0, 0)
  }, [])

  const selectedProgram = PROGRAMS.find(p => p.id === selectedProgId) || PROGRAMS[0]

  const validate = () => {
    const errs = {}
    if (!selectedProgId) errs.program = 'Please select a program'
    if (!name.trim()) errs.name = 'Full Name is required'
    if (!number.trim()) {
      errs.number = 'Mobile number is required'
    } else if (!/^[0-9]{10}$/.test(number.trim().replace(/\D/g, ''))) {
      errs.number = 'Enter a valid 10-digit mobile number'
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      errs.email = 'Enter a valid email address'
    }
    if (!transactionId.trim()) {
      errs.transactionId = 'UPI Transaction ID / UTR is compulsory after scanning QR'
    } else if (transactionId.trim().length < 6) {
      errs.transactionId = 'Enter a valid UPI Reference / UTR Number'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmitPayment = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    const receiptData = {
      receiptNo: 'TF-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      name: name.trim(),
      number: number.trim(),
      email: email.trim() || 'Not Provided',
      programTitle: selectedProgram.title,
      referredBy: referredBy.trim() || 'None',
      paymentMethod: 'UPI QR Code Scanner (PhonePe)',
      payeeName: 'TechFoundry',
      transactionId: transactionId.trim().toUpperCase(),
      status: 'Submitted & Under Verification',
    }

    const waMsg = [
      '💳 *New Fee Payment Submission - TechFoundry*',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      `🧾 *Receipt No:* ${receiptData.receiptNo}`,
      `👤 *Candidate:* ${receiptData.name}`,
      `📱 *Mobile / WhatsApp:* ${receiptData.number}`,
      `✉️ *Email:* ${receiptData.email}`,
      `🎓 *Enrolled Program:* ${receiptData.programTitle}`,
      `💳 *Payment Method:* ${receiptData.paymentMethod}`,
      `🏷️ *Transaction ID / UTR:* ${receiptData.transactionId}`,
      `🏢 *Merchant / Payee:* ${receiptData.payeeName}`,
      `🤝 *Referred By:* ${receiptData.referredBy}`,
      `📅 *Date & Time:* ${receiptData.date}`,
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Please verify my payment and confirm batch enrollment.'
    ].join('\n')

    const waUrl = `https://wa.me/918309576596?text=${encodeURIComponent(waMsg)}`
    receiptData.waUrl = waUrl

    // Launch WhatsApp notification in new tab
    try {
      window.open(waUrl, '_blank')
    } catch (_) {}

    try {
      await fetch('/api/pay-fee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(receiptData),
      }).catch(() => {})
    } catch (err) {}

    setTimeout(() => {
      setSubmitting(false)
      setSuccessReceipt(receiptData)
      window.scrollTo({ top: 150, behavior: 'smooth' })
    }, 700)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="pay-fee-page">
      {/* Top Hero Banner */}
      <section className="pay-hero">
        <div className="container">
          <div className="pay-hero-badge">💳 Official Fee Payment Portal</div>
          <h1 className="pay-hero-title">TechFoundry Fee Payment</h1>
          <p className="pay-hero-desc">
            Complete your admission and secure your batch enrollment. Scan the official PhonePe UPI QR Code and enter your Transaction ID below.
          </p>
        </div>
      </section>

      <section className="pay-content-section">
        <div className="container">
          {successReceipt ? (
            /* ---- SUCCESS RECEIPT VIEW ---- */
            <div className="receipt-wrapper reveal-in">
              <div className="receipt-card" id="printable-receipt">
                <div className="receipt-header">
                  <div className="receipt-logo">
                    <img src="/assets/logo-transparent.png" alt="TechFoundry" className="receipt-logo-img" />
                    <div>
                      <h2 className="receipt-org">TechFoundry</h2>
                      <p className="receipt-sub">Forging Future Tech Talent</p>
                    </div>
                  </div>
                  <div className="receipt-tag">
                    <span className="receipt-status-badge">✓ PAYMENT RECORDED</span>
                    <span className="receipt-number">Receipt #{successReceipt.receiptNo}</span>
                  </div>
                </div>

                <div className="receipt-divider" />

                <div className="receipt-grid">
                  <div className="receipt-item">
                    <span className="label">Candidate Name:</span>
                    <strong className="value">{successReceipt.name}</strong>
                  </div>
                  <div className="receipt-item">
                    <span className="label">Mobile Number:</span>
                    <span className="value">{successReceipt.number}</span>
                  </div>
                  <div className="receipt-item">
                    <span className="label">Enrolled Program:</span>
                    <strong className="value text-cyan">{successReceipt.programTitle}</strong>
                  </div>
                  <div className="receipt-item">
                    <span className="label">Payment Mode:</span>
                    <span className="value">{successReceipt.paymentMethod}</span>
                  </div>
                  <div className="receipt-item">
                    <span className="label">Transaction Reference / UTR:</span>
                    <strong className="value font-mono">{successReceipt.transactionId}</strong>
                  </div>
                  <div className="receipt-item">
                    <span className="label">Beneficiary / Payee:</span>
                    <span className="value">{successReceipt.payeeName}</span>
                  </div>
                  <div className="receipt-item">
                    <span className="label">Date & Timestamp:</span>
                    <span className="value">{successReceipt.date}</span>
                  </div>
                  <div className="receipt-item">
                    <span className="label">Referred By:</span>
                    <span className="value">{successReceipt.referredBy}</span>
                  </div>
                </div>

                <div className="receipt-status-box">
                  <div className="status-indicator">
                    <span className="status-dot">●</span>
                    <div>
                      <strong>Status: {successReceipt.status}</strong>
                      <p>Your enrollment details and transaction reference have been recorded in the admissions ledger.</p>
                    </div>
                  </div>
                </div>

                <div className="receipt-footer-notes">
                  <p>📍 <strong>Official Address:</strong> Rent A Desk, 2nd Floor, Serenity Square, Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad, Telangana 500081</p>
                  <p>✉️ <strong>Accounts Support:</strong> support@techfoundry.info | 📞 +91 83095 76596</p>
                  <p className="receipt-legal">This is a system-generated official payment acknowledgement receipt issued by TechFoundry.</p>
                </div>
              </div>

              <div className="receipt-actions">
                <button onClick={handlePrint} className="btn btn-primary">
                  🖨️ Print / Download Receipt
                </button>
                <a
                  href={successReceipt.waUrl || `https://wa.me/918309576596?text=${encodeURIComponent(`Hi TechFoundry, I have submitted fee payment for ${successReceipt.programTitle}. Transaction ID: ${successReceipt.transactionId}. Receipt #${successReceipt.receiptNo}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  💬 Send Notification on WhatsApp (+91 83095 76596)
                </a>
                <button onClick={() => setSuccessReceipt(null)} className="btn btn-outline">
                  Make Another Payment
                </button>
              </div>
            </div>
          ) : (
            /* ---- MAIN PAYMENT FORM ---- */
            <form onSubmit={handleSubmitPayment} className="pay-layout-grid" noValidate>
              {/* Left Column: Enrollment Details & UTR Section */}
              <div className="pay-form-column">
                
                {/* ENROLLMENT & CANDIDATE DETAILS CARD */}
                <div className="pay-step-card">
                  <div className="pay-step-header">
                    <span className="pay-step-num">1</span>
                    <div>
                      <h2 className="pay-step-title">Candidate Details</h2>
                      <p className="pay-step-subtitle">Select your program and enter your contact details</p>
                    </div>
                  </div>

                  <div className="form-fields-grid">
                    {/* Select Program Dropdown */}
                    <div className="form-field full-width">
                      <label className="field-label">Select Program <span className="req">*</span></label>
                      <div className="select-wrapper">
                        <select
                          className={`form-input form-select${errors.program ? ' input-err' : ''}`}
                          value={selectedProgId}
                          onChange={e => setSelectedProgId(e.target.value)}
                        >
                          <option value="" disabled>-- Choose a Program --</option>
                          {PROGRAMS.map(prog => (
                            <option key={prog.id} value={prog.id}>
                              {prog.icon} {prog.title} ({prog.duration})
                            </option>
                          ))}
                        </select>
                        <span className="select-arrow">▼</span>
                      </div>
                      {errors.program && <span className="err-msg">{errors.program}</span>}
                    </div>

                    {/* Name */}
                    <div className="form-field">
                      <label className="field-label">Full Name <span className="req">*</span></label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className={`form-input${errors.name ? ' input-err' : ''}`}
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                      {errors.name && <span className="err-msg">{errors.name}</span>}
                    </div>

                    {/* Number */}
                    <div className="form-field">
                      <label className="field-label">Mobile Number / WhatsApp <span className="req">*</span></label>
                      <div className="input-with-prefix">
                        <span className="input-prefix">+91</span>
                        <input
                          type="tel"
                          maxLength="10"
                          placeholder="98765 43210"
                          className={`form-input prefixed${errors.number ? ' input-err' : ''}`}
                          value={number}
                          onChange={e => setNumber(e.target.value.replace(/\D/g, ''))}
                        />
                      </div>
                      {errors.number && <span className="err-msg">{errors.number}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-field">
                      <label className="field-label">Email Address (Optional)</label>
                      <input
                        type="email"
                        placeholder="rahul.sharma@example.com"
                        className={`form-input${errors.email ? ' input-err' : ''}`}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      {errors.email && <span className="err-msg">{errors.email}</span>}
                    </div>

                    {/* Referred By */}
                    <div className="form-field">
                      <div className="field-label-row">
                        <label className="field-label">Referred By</label>
                        <span className="badge-optional">Optional</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Friend, Mentor, College, or Code"
                        className="form-input"
                        value={referredBy}
                        onChange={e => setReferredBy(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* TRANSACTION ID / UTR CONFIRMATION CARD */}
                <div className="pay-step-card">
                  <div className="pay-step-header">
                    <span className="pay-step-num">2</span>
                    <div>
                      <h2 className="pay-step-title">UPI Payment Confirmation</h2>
                      <p className="pay-step-subtitle">Scan the QR scanner on the right and enter the Transaction Reference</p>
                    </div>
                  </div>

                  <div className="qr-instructions-banner">
                    <span className="icon">ℹ️</span>
                    <span>
                      Scan the official PhonePe QR code with any UPI app (PhonePe, Google Pay, Paytm, etc.). After payment, enter your <strong>Transaction ID / 12-Digit UTR</strong> below to confirm.
                    </span>
                  </div>

                  {/* Transaction ID Input (COMPULSORY) */}
                  <div className="transaction-id-section">
                    <div className="field-label-row">
                      <label className="field-label">
                        UPI Transaction ID / 12-Digit UTR <span className="req">* Compulsory</span>
                      </label>
                      <button
                        type="button"
                        className="utr-help-link"
                        onClick={() => setShowUtrHelp(v => !v)}
                      >
                        ❓ Where to find UTR?
                      </button>
                    </div>

                    <div className="utr-input-wrapper">
                      <input
                        type="text"
                        placeholder="e.g. 426189034512 or T240919123456"
                        className={`form-input utr-input${errors.transactionId ? ' input-err' : ''}`}
                        value={transactionId}
                        onChange={e => setTransactionId(e.target.value)}
                      />
                      <span className="utr-tag">Compulsory from UPI</span>
                    </div>
                    {errors.transactionId && <span className="err-msg">{errors.transactionId}</span>}

                    {showUtrHelp && (
                      <div className="utr-help-card">
                        <strong>Where is my UPI Transaction ID?</strong>
                        <ul>
                          <li><strong>PhonePe:</strong> Open the payment receipt → copy the 12-digit <em>UTR / Transaction ID</em> (e.g., `T2409...` or `4261...`).</li>
                          <li><strong>Google Pay:</strong> Tap the transaction → find the 12-digit <em>UPI Transaction ID</em>.</li>
                          <li><strong>Paytm:</strong> In payment details, look for <em>UPI Ref No. / UTR</em>.</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="submit-btn-wrap">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary btn-submit-pay"
                    >
                      {submitting ? 'Verifying...' : 'Submit & Confirm Payment'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: QR Scanner Preview & Program Summary */}
              <div className="pay-summary-column">
                {/* Official QR Scanner Card */}
                <div className="qr-scanner-card">
                  <div className="qr-card-header">
                    <span className="badge badge-success">Official Scanner</span>
                    <h3 className="qr-card-title">PhonePe UPI Scanner</h3>
                    <p className="qr-card-sub">Scan using any UPI App</p>
                  </div>

                  <div className="qr-image-frame">
                    <img
                      src="/assets/techfoundry-qr-scanner.png"
                      alt="TechFoundry Official Payment Scanner"
                      className="qr-scanner-img"
                    />
                  </div>

                  <div className="qr-beneficiary-info">
                    <div className="beneficiary-row">
                      <span className="b-label">Merchant / Institute:</span>
                      <strong className="b-val">TechFoundry</strong>
                    </div>
                    <div className="beneficiary-row">
                      <span className="b-label">Payment Purpose:</span>
                      <span className="b-val text-cyan">Course Admission Fee</span>
                    </div>
                  </div>

                  <div className="qr-apps-supported">
                    <span>Accepted via:</span>
                    <div className="upi-app-badges">
                      <span className="upi-badge">PhonePe</span>
                      <span className="upi-badge">Google Pay</span>
                      <span className="upi-badge">Paytm</span>
                      <span className="upi-badge">BHIM UPI</span>
                    </div>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="fee-summary-card">
                  <h4 className="summary-title">Selected Program</h4>
                  <div className="summary-line">
                    <span>Program:</span>
                    <strong>{selectedProgram.title}</strong>
                  </div>
                  <div className="summary-line">
                    <span>Duration:</span>
                    <span>{selectedProgram.duration.split('•')[0]}</span>
                  </div>
                  <div className="summary-line">
                    <span>Format:</span>
                    <span className="text-cyan">Full-Time Immersive</span>
                  </div>
                  <div className="summary-divider" />
                  <div className="summary-note-line">
                    <span>📌 Scan the PhonePe QR code above with any UPI app, then submit your Transaction ID to complete enrollment.</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Embedded CSS for Pay Fee Page */}
      <style>{`
        .pay-fee-page {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          padding-bottom: 5rem;
        }
        .pay-hero {
          background: linear-gradient(180deg, rgba(2, 16, 39, 0.95) 0%, rgba(4, 18, 44, 0.75) 100%);
          border-bottom: 1px solid var(--border);
          padding: 3.5rem 0 2.5rem;
          text-align: center;
        }
        .pay-hero-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 20px;
          padding: 0.3rem 0.9rem;
          margin-bottom: 1rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .pay-hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .pay-hero-desc {
          max-width: 650px;
          margin: 0 auto;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pay-content-section {
          padding: 2.5rem 0;
        }
        .pay-layout-grid {
          display: grid;
          grid-template-columns: 1.45fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 992px) {
          .pay-layout-grid { grid-template-columns: 1fr; }
        }

        /* Step Card */
        .pay-step-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          margin-bottom: 1.75rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .pay-step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .pay-step-num {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284c7, #00b4d8);
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(2, 132, 199, 0.4);
          flex-shrink: 0;
        }
        .pay-step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.15rem;
        }
        .pay-step-subtitle {
          font-size: 0.85rem;
          color: var(--muted);
        }

        /* Form Fields */
        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 640px) {
          .form-fields-grid { grid-template-columns: 1fr; }
        }
        .form-field.full-width {
          grid-column: 1 / -1;
        }
        .field-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 0.4rem;
        }
        .field-label .req {
          color: #f43f5e;
        }
        .field-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }
        .badge-optional {
          font-size: 0.72rem;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.06);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }
        .form-input {
          width: 100%;
          background: rgba(4, 15, 38, 0.9);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 0.92rem;
          color: #ffffff;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          box-sizing: border-box;
        }
        .form-input:focus {
          border-color: #00d2ff;
          box-shadow: 0 0 0 3px rgba(0, 210, 255, 0.18);
        }
        .form-input.input-err {
          border-color: #f43f5e;
          box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.2);
        }
        
        /* Select styling */
        .select-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .form-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 600;
          color: #38bdf8;
          padding-right: 2.5rem;
        }
        .form-select option {
          background: #07132b;
          color: #ffffff;
          padding: 0.5rem;
        }
        .select-arrow {
          position: absolute;
          right: 14px;
          color: #38bdf8;
          font-size: 0.75rem;
          pointer-events: none;
        }

        .input-with-prefix {
          display: flex;
          align-items: center;
        }
        .input-prefix {
          background: rgba(15, 32, 67, 0.9);
          border: 1px solid var(--border);
          border-right: none;
          padding: 0.75rem 0.85rem;
          color: #38bdf8;
          font-weight: 600;
          font-size: 0.92rem;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        .form-input.prefixed {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .err-msg {
          display: block;
          font-size: 0.78rem;
          color: #fb7185;
          margin-top: 0.35rem;
        }

        /* QR Instructions & UTR */
        .qr-instructions-banner {
          background: rgba(2, 132, 199, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 8px;
          padding: 0.85rem 1rem;
          display: flex;
          gap: 0.65rem;
          font-size: 0.84rem;
          color: #e0f2fe;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        .transaction-id-section {
          background: rgba(4, 15, 38, 0.75);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 12px;
          padding: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .utr-help-link {
          background: none;
          border: none;
          color: #38bdf8;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }
        .utr-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .utr-input {
          font-family: monospace;
          font-size: 1.05rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .utr-tag {
          position: absolute;
          right: 12px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .utr-help-card {
          margin-top: 0.85rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 8px;
          padding: 0.85rem 1rem;
          font-size: 0.8rem;
          color: #cbd5e1;
        }
        .utr-help-card ul {
          margin: 0.4rem 0 0 1.2rem;
          padding: 0;
        }
        .utr-help-card li {
          margin-bottom: 0.35rem;
        }

        .submit-btn-wrap {
          display: flex;
          justify-content: flex-start;
          margin-top: 0.5rem;
        }

        .btn-submit-pay {
          width: auto;
          min-width: 190px;
          padding: 0.55rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        @media (max-width: 640px) {
          .btn-submit-pay {
            width: 100%;
          }
        }

        /* Right Column: QR Scanner Card */
        .qr-scanner-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .qr-card-header {
          margin-bottom: 1.25rem;
        }
        .qr-card-title {
          font-size: 1.3rem;
          color: #ffffff;
          margin-top: 0.5rem;
          margin-bottom: 0.15rem;
        }
        .qr-card-sub {
          font-size: 0.82rem;
          color: var(--muted);
          margin: 0;
        }
        .qr-image-frame {
          background: #ffffff;
          border-radius: 14px;
          padding: 1.25rem;
          display: inline-block;
          margin: 0 auto 1.25rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          max-width: 260px;
        }
        .qr-scanner-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 6px;
        }
        .qr-beneficiary-info {
          background: rgba(6, 18, 42, 0.8);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.85rem 1rem;
          margin-bottom: 1rem;
          text-align: left;
        }
        .beneficiary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          padding: 0.35rem 0;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
        }
        .beneficiary-row:last-child {
          border-bottom: none;
        }
        .b-label { color: var(--muted); }
        .b-val { color: #ffffff; }
        .qr-apps-supported {
          font-size: 0.78rem;
          color: var(--muted);
        }
        .upi-app-badges {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 0.4rem;
          flex-wrap: wrap;
        }
        .upi-badge {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          font-size: 0.72rem;
          color: #cbd5e1;
        }

        /* Summary Card */
        .fee-summary-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
        .summary-title {
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 1rem;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.86rem;
          color: var(--text-secondary);
          margin-bottom: 0.65rem;
        }
        .summary-line strong { color: #fff; }
        .summary-divider {
          height: 1px;
          background: var(--border);
          margin: 1rem 0;
        }
        .summary-note-line {
          font-size: 0.82rem;
          color: #38bdf8;
          line-height: 1.5;
        }

        /* Success Receipt */
        .receipt-wrapper {
          max-width: 720px;
          margin: 0 auto;
        }
        .receipt-card {
          background: #ffffff;
          color: #0f172a;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        .receipt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .receipt-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .receipt-logo-img {
          height: 48px;
          width: auto;
        }
        .receipt-org {
          font-size: 1.4rem;
          font-weight: 800;
          color: #07132b;
          margin: 0;
        }
        .receipt-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin: 0;
        }
        .receipt-tag {
          text-align: right;
        }
        .receipt-status-badge {
          display: inline-block;
          background: #dcfce7;
          color: #15803d;
          font-weight: 800;
          font-size: 0.75rem;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }
        .receipt-number {
          display: block;
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 0.3rem;
          font-family: monospace;
        }
        .receipt-divider {
          height: 2px;
          background: #e2e8f0;
          margin: 1.5rem 0;
        }
        .receipt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.5rem;
          margin-bottom: 1.5rem;
        }
        .receipt-item .label {
          display: block;
          font-size: 0.75rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .receipt-item .value {
          font-size: 0.95rem;
          color: #0f172a;
        }
        .receipt-item .text-cyan {
          color: #0284c7;
        }
        .receipt-item .font-mono {
          font-family: monospace;
          font-size: 1rem;
          letter-spacing: 0.05em;
        }
        .receipt-status-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
        }
        .status-indicator {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .status-dot {
          color: #16a34a;
          font-size: 1.2rem;
          line-height: 1;
        }
        .status-indicator strong {
          display: block;
          color: #15803d;
          font-size: 0.92rem;
          margin-bottom: 0.2rem;
        }
        .status-indicator p {
          margin: 0;
          font-size: 0.8rem;
          color: #166534;
        }
        .receipt-footer-notes {
          font-size: 0.76rem;
          color: #64748b;
          border-top: 1px dashed #cbd5e1;
          padding-top: 1rem;
          line-height: 1.6;
        }
        .receipt-footer-notes p { margin: 0.2rem 0; }
        .receipt-legal {
          font-style: italic;
          margin-top: 0.5rem !important;
          color: #94a3b8;
        }

        .receipt-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }
        .btn-whatsapp {
          background: #25d366;
          color: #ffffff;
          border: none;
          font-weight: 700;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-whatsapp:hover {
          background: #22c55e;
          color: #fff;
        }

        /* Print styling */
        @media print {
          body * { visibility: hidden; }
          #printable-receipt, #printable-receipt * { visibility: visible; }
          #printable-receipt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
          }
          .receipt-actions, .site-header, .site-footer { display: none !important; }
        }
      `}</style>
    </main>
  )
}
