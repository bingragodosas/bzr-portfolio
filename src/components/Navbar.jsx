import { useState, useEffect } from 'react';

const LINKS = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('Home');

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
      for (const link of LINKS) {
        const el = document.getElementById(link.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) { setActive(link); break; }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id) {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <style>{`
        .nav-link {
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 6px 0; position: relative;
          transition: color 0.25s;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; background: #63d9b4;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.25s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover { color: #f0faf6 !important; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active-link { color: #63d9b4 !important; }
        .nav-link.active-link::after { transform: scaleX(1); }

        .mobile-link {
          background: none; border: none; cursor: pointer; text-align: left;
          font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 500;
          padding: 14px 0; width: 100%;
          border-bottom: 1px solid rgba(99,217,180,0.08);
          transition: color 0.2s, padding-left 0.2s;
        }
        .mobile-link:hover { color: #63d9b4 !important; padding-left: 8px !important; }

        @keyframes drawerIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }

        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 48px' : '22px 48px',
        background: scrolled ? 'rgba(5,10,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99,217,180,0.10)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.35s cubic-bezier(.22,1,.36,1)',
      }}>
        {/* Logo */}
        <div onClick={() => scrollTo('home')} style={{
          fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 800,
          cursor: 'pointer', color: '#f0faf6', letterSpacing: '-0.02em',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#63d9b4'}
          onMouseLeave={e => e.currentTarget.style.color = '#f0faf6'}
        >
          Benive<span style={{ color: '#63d9b4' }}>.</span>
        </div>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className={`nav-link ${active === link ? 'active-link' : ''}`}
              style={{ color: active === link ? '#63d9b4' : 'rgba(180,220,210,0.50)' }}
            >{link}</button>
          ))}
          {/* CTA pill */}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              padding: '8px 20px', borderRadius: '20px', cursor: 'pointer',
              background: 'rgba(99,217,180,0.10)', border: '1px solid rgba(99,217,180,0.30)',
              color: '#63d9b4', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,217,180,0.20)'; e.currentTarget.style.borderColor = 'rgba(99,217,180,0.60)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,217,180,0.10)'; e.currentTarget.style.borderColor = 'rgba(99,217,180,0.30)'; }}
          >Hire Me</button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="nav-hamburger"
          style={{
            display: 'none', alignItems: 'center', justifyContent: 'center',
            background: 'none', border: '1px solid rgba(99,217,180,0.25)',
            borderRadius: '8px', cursor: 'pointer', color: '#63d9b4',
            width: '38px', height: '38px', fontSize: '18px',
            transition: 'border-color 0.2s',
          }}
          aria-label="Menu"
        >{menuOpen ? '✕' : '☰'}</button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 999,
          background: 'rgba(5,10,20,0.97)', backdropFilter: 'blur(24px)',
          padding: '8px 40px 32px', borderBottom: '1px solid rgba(99,217,180,0.10)',
          animation: 'drawerIn 0.25s ease both',
        }}>
          {LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link.toLowerCase())}
              className="mobile-link"
              style={{ color: active === link ? '#63d9b4' : 'rgba(200,230,220,0.70)' }}
            >{link}</button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              marginTop: '20px', width: '100%', padding: '14px',
              borderRadius: '10px', cursor: 'pointer', border: 'none',
              background: 'linear-gradient(135deg, #63d9b4 0%, #4A90D9 100%)',
              fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
              fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#050a14',
            }}
          >Hire Me</button>
        </div>
      )}
    </>
  );
}