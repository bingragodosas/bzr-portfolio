import { useEffect, useState } from 'react';
import heroBg from '../assets/herobg.jpg';
import profileImg from '../assets/BzRItBg.png';

const ROLES = ['Junior Web Developer', 'React Enthusiast', 'IT Student', 'UI/UX Learner'];

export default function HomePage() {
  const [roleIdx, setRoleIdx]     = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping]       = useState(true);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let i = typing ? displayed.length : displayed.length - 1;
    let timeout;
    if (typing) {
      if (i < target.length) timeout = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 80);
      else timeout = setTimeout(() => setTyping(false), 1800);
    } else {
      if (i >= 0) timeout = setTimeout(() => setDisplayed(target.slice(0, i)), 40);
      else { setRoleIdx(prev => (prev + 1) % ROLES.length); setTyping(true); }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeUp      { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes orbFloat    { 0%,100% { transform:translateY(0) scale(1); } 50% { transform:translateY(-30px) scale(1.05); } }
        @keyframes scrollPulse { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
        @keyframes fadeIn      { from { opacity:0; } to { opacity:1; } }
        @keyframes profileFloat {
          0%,100% { transform: translateX(-50%) translateY(-50%) translateY(0px); }
          50%      { transform: translateX(-50%) translateY(-50%) translateY(-12px); }
        }

        .cta-primary { transition: all 0.2s ease; }
        .cta-primary:hover { box-shadow: 0 8px 32px rgba(99,217,180,0.45) !important; transform: translateY(-1px); }
        .cta-ghost { transition: all 0.2s ease; }
        .cta-ghost:hover { background: rgba(99,217,180,0.12) !important; border-color: rgba(99,217,180,0.55) !important; transform: translateY(-1px); }

        .split-right {
          clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        .profile-center {
          animation: profileFloat 6s ease-in-out infinite;
        }

        @media (max-width: 900px) {
          .split-right  { clip-path: none !important; min-height: 50vh !important; }
          .hero-grid    { grid-template-columns: 1fr !important; }
          .profile-center { display: none !important; }
        }
      `}</style>

      <div style={{ position: 'relative' }}>
        <section
          id="home"
          className="hero-grid"
          style={{
            minHeight: '100vh',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            overflow: 'hidden',
          }}
        >
          {/* LEFT */}
          <div style={{
            background: '#050a14',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(90px,12vw,130px) clamp(80px,10vw,140px) 60px clamp(40px,6vw,80px)',
            position: 'relative',
            zIndex: 2,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px',
              animation: 'fadeUp 0.6s 0.1s ease both',
            }}>
              <div style={{ width: '32px', height: '1px', background: '#63d9b4', opacity: 0.7 }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.24em',
                textTransform: 'uppercase', color: '#63d9b4',
              }}>Portfolio · 2026</span>
            </div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em',
              color: '#f0faf6', margin: '0 0 10px',
              animation: 'fadeUp 0.6s 0.2s ease both',
            }}>
              Hi, I'm{' '}
              <span style={{
                background: 'linear-gradient(135deg, #63d9b4 0%, #4A90D9 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Benive</span>
              <br />
              <span style={{ color: '#f0faf6' }}>Ragodo</span>
              <span style={{ color: '#63d9b4' }}>.</span>
            </h1>

            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(14px, 1.8vw, 20px)', fontWeight: 300,
              color: 'rgba(180,220,210,0.70)', marginBottom: '28px', minHeight: '30px',
              animation: 'fadeUp 0.6s 0.3s ease both',
            }}>
              {displayed}<span style={{ color: '#63d9b4', opacity: 0.85 }}>|</span>
            </div>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14.5px', fontWeight: 300, lineHeight: 1.85,
              color: 'rgba(180,220,210,0.55)', maxWidth: '340px', margin: '0 0 40px',
              animation: 'fadeUp 0.6s 0.4s ease both',
            }}>
              A Diploma of IT student at Dumaguete Campus passionate about building
              modern, responsive web applications with React and Supabase.
              Currently seeking opportunities to grow and contribute.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.5s ease both' }}>
              <button
                className="cta-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase', padding: '13px 30px',
                  borderRadius: '8px', cursor: 'pointer', border: 'none',
                  background: 'linear-gradient(135deg, #63d9b4 0%, #4A90D9 100%)',
                  color: '#050a14',
                  boxShadow: '0 4px 20px rgba(99,217,180,0.25)',
                }}
              >View Projects</button>

              <button
                className="cta-ghost"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase', padding: '13px 30px',
                  borderRadius: '8px', cursor: 'pointer',
                  background: 'rgba(99,217,180,0.06)',
                  border: '1px solid rgba(99,217,180,0.30)',
                  color: '#63d9b4',
                  backdropFilter: 'blur(4px)',
                }}
              >Get In Touch</button>
            </div>

            <div style={{ marginTop: '60px', display: 'flex', alignItems: 'center', gap: '10px', animation: 'fadeUp 0.6s 0.7s ease both' }}>
              <div style={{
                width: '1px', height: '36px',
                background: 'linear-gradient(to bottom, transparent, rgba(99,217,180,0.50))',
                animation: 'scrollPulse 2s ease-in-out infinite',
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'rgba(99,217,180,0.38)',
              }}>Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="split-right"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              minHeight: '100vh',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(5,10,20,0.80) 0%, rgba(5,10,20,0.30) 50%, transparent 75%)',
              pointerEvents: 'none', zIndex: 1,
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
              background: 'linear-gradient(to top, #050a14 0%, transparent 100%)',
              pointerEvents: 'none', zIndex: 2,
            }} />
            <div style={{
              position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,217,180,0.08) 0%, transparent 70%)',
              top: '15%', right: '-40px', pointerEvents: 'none',
              animation: 'orbFloat 8s ease-in-out infinite', zIndex: 1,
            }} />
            <div style={{
              position: 'absolute', bottom: '40px', right: '36px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.20em',
              textTransform: 'uppercase', color: 'rgba(99,217,180,0.55)',
              display: 'flex', alignItems: 'center', gap: '8px',
              animation: 'fadeIn 1s 1s ease both', zIndex: 4,
            }}>
              <span style={{ width: '20px', height: '1px', background: 'rgba(99,217,180,0.40)' }} />
              Dumaguete, PH
            </div>
          </div>
        </section>

        {/* PROFILE IMAGE — large, prominent, centered on the split */}
        <div
          className="profile-center"
          style={{
            position: 'absolute',
            left: '52%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            zIndex: 10,
            width: 'clamp(360px, 34vw, 560px)',
          }}
        >
          <img
            src={profileImg}
            alt="Benive Ragodo"
            style={{
              width: '100%',
              height: 'clamp(560px, 85vh, 820px)',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              borderRadius: '0',
              mixBlendMode: 'luminosity',
              filter: 'contrast(1.1) brightness(1.08) drop-shadow(0 28px 70px rgba(0,0,0,0.95))',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 74%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 74%, transparent 100%)',
              opacity: 0.97,
            }}
          />
        </div>

      </div>
    </>
  );
}