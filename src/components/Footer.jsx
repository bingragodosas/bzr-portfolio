export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home',     id: 'home'     },
    { label: 'About',    id: 'about'    },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact',  id: 'contact'  },
  ];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/bingragodosas',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/beniveragodo',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&to=bedakaheart@gmail.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @keyframes footerLineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(99,217,180,0.4); }
          50%      { opacity: 0.7; box-shadow: 0 0 0 5px rgba(99,217,180,0); }
        }
        @keyframes sectionGlow {
          0%,100% { text-shadow: 0 0 8px rgba(99,217,180,0.0); }
          50%      { text-shadow: 0 0 18px rgba(99,217,180,0.55), 0 0 40px rgba(74,144,217,0.25); }
        }

        .footer-logo-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: 'Syne', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #f0faf6;
          letter-spacing: -0.02em;
          line-height: 1;
          transition: opacity 0.2s ease;
        }
        .footer-logo-btn:hover { opacity: 0.75; }

        /* Nav section heading with glow */
        .footer-section-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(99,217,180,0.70);
          margin-bottom: 16px;
          display: block;
          animation: sectionGlow 3s ease-in-out infinite;
        }

        /* CTA section heading with glow */
        .footer-cta-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(99,217,180,0.70);
          margin-bottom: 14px;
          display: block;
          animation: sectionGlow 3s ease-in-out infinite 1s;
        }

        .footer-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(180,220,210,0.40);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
          position: relative;
          transition: color 0.2s ease, text-shadow 0.2s ease;
          text-align: left;
          display: block;
        }
        .footer-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1px;
          background: #63d9b4;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .footer-nav-link:hover {
          color: #63d9b4;
          text-shadow: 0 0 12px rgba(99,217,180,0.60), 0 0 28px rgba(99,217,180,0.25);
        }
        .footer-nav-link:hover::after { transform: scaleX(1); }

        .footer-social {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(99,217,180,0.14);
          background: rgba(99,217,180,0.04);
          display: flex; align-items: center; justify-content: center;
          color: rgba(180,220,210,0.40);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .footer-social:hover {
          border-color: rgba(99,217,180,0.50);
          background: rgba(99,217,180,0.10);
          color: #63d9b4;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(99,217,180,0.20);
        }

        .footer-availability {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(99,217,180,0.20);
          background: rgba(99,217,180,0.06);
          width: fit-content;
        }
        .footer-availability-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #63d9b4;
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .footer-cta-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.10em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 8px;
          cursor: pointer; border: none;
          background: linear-gradient(135deg, #63d9b4 0%, #4A90D9 100%);
          color: #050a14;
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(99,217,180,0.20);
          display: inline-block;
          width: 100%;
          text-align: center;
        }
        .footer-cta-btn:hover {
          box-shadow: 0 0 24px rgba(99,217,180,0.55), 0 0 60px rgba(74,144,217,0.25), 0 8px 32px rgba(99,217,180,0.35);
          transform: translateY(-2px);
        }

        /* Glowing project title text */
        .footer-project-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          line-height: 1.25;
          color: #f0faf6;
          margin: 0 0 20px;
          transition: text-shadow 0.3s ease;
        }
        .footer-project-title:hover {
          text-shadow: 0 0 20px rgba(99,217,180,0.40), 0 0 50px rgba(74,144,217,0.20);
        }

        @media (max-width: 768px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-brand-col { align-items: center !important; }
          .footer-nav-col   { align-items: center !important; }
          .footer-nav-link  { text-align: center !important; }
          .footer-cta-col   { align-items: center !important; }
          .footer-bottom-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
            gap: 12px !important;
          }
        }
      `}</style>

      <footer style={{
        background: '#030810',
        borderTop: '1px solid rgba(99,217,180,0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* background glow */}
        <div style={{
          position: 'absolute', bottom: '-60px', left: '50%',
          transform: 'translateX(-50%)',
          width: '600px', height: '200px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(99,217,180,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* top accent line */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(99,217,180,0.35), rgba(74,144,217,0.25), transparent)',
          transformOrigin: 'left',
          animation: 'footerLineGrow 1.2s ease both',
        }} />

        {/* main content */}
        <div style={{ padding: 'clamp(48px,6vw,72px) clamp(24px,6vw,80px) 0' }}>
          <div
            className="footer-main-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 1.2fr',
              gap: '48px',
              alignItems: 'start',
            }}
          >

            {/* ── Brand col ── */}
            <div className="footer-brand-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <button
                  className="footer-logo-btn"
                  onClick={() => scrollTo('home')}
                  title="Back to top"
                >
                  Benive<span style={{ color: '#63d9b4' }}>.</span>
                </button>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13.5px', fontWeight: 300, lineHeight: 1.75,
                  color: 'rgba(180,220,210,0.42)',
                  margin: '12px 0 0', maxWidth: '280px',
                }}>
                  Building modern, responsive web experiences with React &amp; Supabase.
                  Open to freelance and entry-level opportunities.
                </p>
              </div>

              <div className="footer-availability">
                <div className="footer-availability-dot" />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#63d9b4',
                }}>Available for work.</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="footer-social"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Nav col ── */}
            <div className="footer-nav-col" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* Glowing "NAVIGATION" heading */}
              <span className="footer-section-heading">Navigation</span>

              {navLinks.map(link => (
                <button
                  key={link.id}
                  className="footer-nav-link"
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* ── CTA col ── */}
            <div className="footer-cta-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Glowing "LET'S WORK TOGETHER" heading */}
              <span className="footer-cta-heading">Let's work together</span>

              <p
                className="footer-project-title"
                style={{ fontSize: 'clamp(18px,2.2vw,24px)' }}
              >
                Have a project<br />
                <span style={{
                  background: 'linear-gradient(135deg, #63d9b4 0%, #4A90D9 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>in mind?</span>
              </p>

              {/* Scrolls to #contact */}
              <button
                className="footer-cta-btn"
                onClick={() => scrollTo('contact')}
              >
                Get In Touch →
              </button>

              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px', fontWeight: 300,
                color: 'rgba(180,220,210,0.28)',
              }}>
                bedakaheart@gmail.com
              </span>
            </div>

          </div>
        </div>

        {/* divider */}
        <div style={{
          margin: 'clamp(32px,4vw,52px) clamp(24px,6vw,80px) 0',
          height: '1px',
          background: 'rgba(99,217,180,0.07)',
        }} />

        {/* bottom bar — IPTECH removed */}
        <div
          className="footer-bottom-row"
          style={{
            padding: '20px clamp(24px,6vw,80px) 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px', fontWeight: 300,
            color: 'rgba(180,220,210,0.22)',
            letterSpacing: '0.04em',
          }}>
            © {currentYear} Benive Ragodo · All rights reserved
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px', fontWeight: 300,
              color: 'rgba(180,220,210,0.22)',
              letterSpacing: '0.04em',
            }}>Built with</span>
            {['React', 'Supabase'].map((tech) => (
              <span key={tech} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.10em', textTransform: 'uppercase',
                color: 'rgba(99,217,180,0.45)',
                padding: '3px 8px',
                border: '1px solid rgba(99,217,180,0.12)',
                borderRadius: '4px',
                background: 'rgba(99,217,180,0.04)',
              }}>{tech}</span>
            ))}
          </div>
        </div>

      </footer>
    </>
  );
}