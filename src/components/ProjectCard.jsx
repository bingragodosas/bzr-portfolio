import { useState } from 'react';

const TECH_COLORS = {
  React: '#61dafb',
  'Node.js': '#84ba64',
  PostgreSQL: '#336791',
  Supabase: '#3ecf8e',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  'Tailwind': '#38bdf8',
  'CSS': '#264de4',
  Firebase: '#ffca28',
  Express: '#ffffff',
  Leaflet: '#199900',
  'Leaflet.js': '#199900',
  Recharts: '#8884d8',
  'CSS Modules': '#264de4',
  HTML: '#e34f26',
  Netlify: '#00c7b7',
};

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  const techs = Array.isArray(project.tech_stack)
    ? project.tech_stack
    : typeof project.tech_stack === 'string'
      ? project.tech_stack.split(',').map(t => t.trim())
      : [];

  const gradients = [
    'linear-gradient(135deg, #0d2b1e 0%, #0a1a2e 100%)',
    'linear-gradient(135deg, #1a0d2b 0%, #0a1a2e 100%)',
    'linear-gradient(135deg, #0d1a2b 0%, #002b1a 100%)',
    'linear-gradient(135deg, #2b0d0d 0%, #0a1a2e 100%)',
  ];
  const cardGradient = gradients[index % gradients.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(10,22,35,0.80)',
        border: `1px solid ${hovered ? 'rgba(99,217,180,0.40)' : 'rgba(99,217,180,0.10)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.30s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 40px rgba(0,0,0,0.40), 0 0 0 1px rgba(99,217,180,0.15)'
          : '0 4px 16px rgba(0,0,0,0.20)',
        display: 'flex', flexDirection: 'column',
        animation: `fadeUp 0.5s ${index * 0.08}s ease both`,
      }}
    >
      {/* Card image / placeholder */}
      <div style={{
        height: '160px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: project.image_url ? 'transparent' : cardGradient,
      }}>
        {project.image_url && (
          <img
            src={project.image_url}
            alt={project.title}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        )}
        {!project.image_url && (
          <span style={{ fontSize: '48px', opacity: 0.18 }}>{'</>'}</span>
        )}
        {project.featured && (
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'rgba(99,217,180,0.15)', border: '1px solid rgba(99,217,180,0.35)',
            borderRadius: '20px', padding: '3px 10px',
            fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#63d9b4',
            zIndex: 1,
          }}>Featured</div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{
          fontFamily: "'Syne', sans-serif", fontSize: '17px', fontWeight: 700,
          color: '#f0faf6', margin: 0, lineHeight: 1.3,
        }}>{project.title}</h3>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 300,
          color: 'rgba(180,220,210,0.65)', lineHeight: 1.65, margin: 0, flex: 1,
        }}>{project.description}</p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {techs.map(tech => (
            <span key={tech} style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em',
              padding: '3px 9px', borderRadius: '20px',
              background: 'rgba(99,217,180,0.06)',
              border: `1px solid ${TECH_COLORS[tech] ? TECH_COLORS[tech] + '40' : 'rgba(99,217,180,0.20)'}`,
              color: TECH_COLORS[tech] || '#63d9b4',
            }}>{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
          {project.live_url && project.live_url !== '#' && (
            <a href={project.live_url} target="_blank" rel="noreferrer" style={{
              flex: 1, textAlign: 'center',
              padding: '8px', borderRadius: '8px',
              background: 'rgba(99,217,180,0.10)', border: '1px solid rgba(99,217,180,0.25)',
              color: '#63d9b4', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'all 0.18s',
            }}>Live Demo ↗</a>
          )}
          {project.github_url && project.github_url !== '#' && (
            <a href={project.github_url} target="_blank" rel="noreferrer" style={{
              flex: 1, textAlign: 'center',
              padding: '8px', borderRadius: '8px',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)',
              color: 'rgba(200,230,220,0.70)', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'all 0.18s',
            }}>GitHub ↗</a>
          )}
        </div>
      </div>

      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}