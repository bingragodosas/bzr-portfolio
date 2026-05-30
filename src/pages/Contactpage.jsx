import { useContactForm } from '../hooks/useContactForm';

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/bingragodosas',        icon: '⌥' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/beniveragodo', icon: '◈' },
  { label: 'Email',    href: 'https://mail.google.com/mail/?view=cm&to=bedakaheart@gmail.com', icon: '✉' },
];

const CONTACT_INFO = [
  {
    icon: '✉',
    label: 'Email',
    value: 'bedakaheart@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=bedakaheart@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+63 936 532 3298',
    href: 'tel:+639365323298',
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'Boloc-boloc, Sibulan, Negros Oriental',
    href: null,
  },
];

export default function ContactPage() {
  const { form, status, errMsg, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" style={{
      minHeight: '80vh', padding: '100px 40px 80px',
      position: 'relative',
    }}>
      {/* Top divider */}
      <div style={{
        position: 'absolute', top: 0, left: '40px', right: '40px',
        height: '1px', background: 'linear-gradient(to right, transparent, rgba(99,217,180,0.15), transparent)',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: '56px' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#63d9b4',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
          }}>
            <span style={{ width: '28px', height: '1px', background: '#63d9b4', opacity: 0.7 }} />
            Contact
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800, color: '#f0faf6', margin: '0 0 12px', letterSpacing: '-0.02em',
          }}>Get In Touch</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 300,
            color: 'rgba(180,220,210,0.50)', maxWidth: '440px', lineHeight: 1.7,
          }}>
            Feel free to reach out for collaborations or opportunities.
            Messages are stored in{' '}
            <span style={{ color: '#3ecf8e', fontWeight: 500 }}>Supabase</span>.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px', alignItems: 'start' }} className="contact-grid">

          {/* ── Left: Info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* Bio */}
            <div style={{
              padding: '24px', borderRadius: '14px',
              background: 'rgba(10,22,35,0.60)',
              border: '1px solid rgba(99,217,180,0.08)',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(99,217,180,0.18), rgba(74,144,217,0.14))',
                border: '1px solid rgba(99,217,180,0.20)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', marginBottom: '16px',
              }}>👨‍💻</div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontSize: '17px', fontWeight: 700,
                color: '#f0faf6', margin: '0 0 6px',
              }}>Benive Ragodo</h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 300,
                color: 'rgba(180,220,210,0.55)', lineHeight: 1.7, margin: 0,
              }}>
                Junior Web Developer<br />
                Open for internships, freelance, or entry-level positions.
              </p>
            </div>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {CONTACT_INFO.map(item => (
                item.href ? (
                  <a key={item.label} href={item.href} style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '13px 16px', borderRadius: '10px',
                    background: 'rgba(99,217,180,0.04)',
                    border: '1px solid rgba(99,217,180,0.10)',
                    textDecoration: 'none', transition: 'all 0.18s',
                    color: 'rgba(180,220,210,0.80)',
                  }}>
                    <span style={{ fontSize: '15px', width: '20px', textAlign: 'center', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(99,217,180,0.55)', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 400, color: 'rgba(180,220,210,0.85)' }}>{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '13px 16px', borderRadius: '10px',
                    background: 'rgba(99,217,180,0.04)',
                    border: '1px solid rgba(99,217,180,0.10)',
                  }}>
                    <span style={{ fontSize: '15px', width: '20px', textAlign: 'center', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(99,217,180,0.55)', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 400, color: 'rgba(180,220,210,0.85)' }}>{item.value}</div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(99,217,180,0.45)', margin: '0 0 4px',
              }}>Find me on</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '7px', padding: '10px 12px', borderRadius: '10px',
                    background: 'rgba(99,217,180,0.04)',
                    border: '1px solid rgba(99,217,180,0.10)',
                    textDecoration: 'none', transition: 'all 0.18s',
                    color: 'rgba(180,220,210,0.70)',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 500,
                  }}>
                    <span style={{ color: '#63d9b4', fontSize: '14px' }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div style={{
            padding: '32px', borderRadius: '16px',
            background: 'rgba(10,22,35,0.60)',
            border: '1px solid rgba(99,217,180,0.08)',
          }}>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700,
              color: '#f0faf6', margin: '0 0 6px',
            }}>Send a Message</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 300,
              color: 'rgba(180,220,210,0.40)', margin: '0 0 24px',
            }}>I usually respond within 24 hours.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'name',  label: 'Your Name',     type: 'text',  placeholder: 'e.g. Juan dela Cruz' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.name}>
                  <label style={{
                    display: 'block', fontFamily: "'DM Sans', sans-serif",
                    fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'rgba(99,217,180,0.55)',
                    marginBottom: '6px',
                  }}>{field.label}</label>
                  <input
                    type={field.type} name={field.name}
                    value={form[field.name]} onChange={handleChange}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%', background: 'rgba(5,10,20,0.80)',
                      border: '1px solid rgba(99,217,180,0.12)',
                      borderRadius: '8px', padding: '11px 14px',
                      fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
                      color: '#e0f2ec', outline: 'none',
                      caretColor: '#63d9b4', boxSizing: 'border-box',
                    }}
                  />
                </div>
              ))}

              <div>
                <label style={{
                  display: 'block', fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'rgba(99,217,180,0.55)',
                  marginBottom: '6px',
                }}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={5} placeholder="What's on your mind?"
                  style={{
                    width: '100%', background: 'rgba(5,10,20,0.80)',
                    border: '1px solid rgba(99,217,180,0.12)',
                    borderRadius: '8px', padding: '11px 14px',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
                    color: '#e0f2ec', outline: 'none', resize: 'vertical',
                    caretColor: '#63d9b4', boxSizing: 'border-box',
                  }}
                />
              </div>

              {errMsg && (
                <p style={{ fontSize: '12px', color: '#f87171', margin: 0 }}>{errMsg}</p>
              )}

              {status === 'success' && (
                <div style={{
                  padding: '12px 16px', borderRadius: '8px',
                  background: 'rgba(99,217,180,0.08)', border: '1px solid rgba(99,217,180,0.25)',
                  color: '#63d9b4', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '14px', borderRadius: '8px', cursor: 'pointer', border: 'none',
                  background: status === 'loading'
                    ? 'rgba(99,217,180,0.30)'
                    : 'linear-gradient(135deg, #63d9b4 0%, #4A90D9 100%)',
                  color: '#050a14',
                  boxShadow: '0 4px 20px rgba(99,217,180,0.22)',
                  transition: 'all 0.2s',
                  marginTop: '4px',
                }}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus {
          border-color: rgba(99,217,180,0.35) !important;
          box-shadow: 0 0 0 3px rgba(99,217,180,0.06);
          background: rgba(99,217,180,0.02) !important;
        }
        a[href]:hover {
          border-color: rgba(99,217,180,0.25) !important;
          background: rgba(99,217,180,0.07) !important;
        }
      `}</style>
    </section>
  );
}