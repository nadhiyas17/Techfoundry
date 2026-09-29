import React from 'react'

export default function FloatingWhatsApp() {
  const whatsappNumber = '918309576596'
  const defaultMessage = encodeURIComponent('Hi TechFoundry, I would like to inquire about your courses and admission.')
  const waUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`

  return (
    <aside className="tf-floating-wa" aria-label="WhatsApp Support">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="tf-wa-btn"
        aria-label="Chat with TechFoundry on WhatsApp at 8309576596"
        title="Chat with us on WhatsApp (+91 83095 76596)"
      >
        <span className="tf-wa-pulse" />
        <svg
          className="tf-wa-svg"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="currentColor"
        >
          <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.3-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1a9.2 9.2 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7 0-.2 0-.4-.1-.5s-.7-1.8-1-2.4c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4s-1.3 1.3-1.3 3.1 1.3 3.6 1.5 3.9c.2.2 2.6 4.1 6.5 5.7 3.8 1.7 3.8 1.1 4.5 1.1.7 0 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.5z" />
        </svg>
        <span className="tf-wa-badge">8309576596</span>
      </a>

      <style>{`
        .tf-floating-wa {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
        }
        .tf-wa-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #25d366;
          color: #ffffff;
          padding: 10px 16px 10px 12px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .tf-wa-btn:hover {
          background: #20bd5a;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.55), 0 3px 8px rgba(0, 0, 0, 0.35);
          color: #ffffff;
        }
        .tf-wa-svg {
          flex-shrink: 0;
        }
        .tf-wa-badge {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #ffffff;
          white-space: nowrap;
        }
        .tf-wa-pulse {
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          border: 2px solid #25d366;
          opacity: 0;
          animation: tf-pulse 2.2s infinite;
          pointer-events: none;
        }
        @keyframes tf-pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          60% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @media (max-width: 600px) {
          .tf-floating-wa {
            bottom: 18px;
            right: 18px;
          }
          .tf-wa-badge {
            display: none;
          }
          .tf-wa-btn {
            padding: 12px;
            border-radius: 50%;
          }
        }
      `}</style>
    </aside>
  )
}
