import { useState, useRef, useEffect } from 'react';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';

function SkeletonCard() {
  return (
    <div style={{
      background: 'rgba(10,22,35,0.60)', border: '1px solid rgba(99,217,180,0.07)',
      borderRadius: '16px', overflow: 'hidden', height: '380px', width: '100%',
      animation: 'shimmer 1.6s ease-in-out infinite',
    }}>
      <div style={{ height: '200px', background: 'rgba(99,217,180,0.04)' }} />
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ height: '18px', width: '60%', borderRadius: '6px', background: 'rgba(99,217,180,0.06)' }} />
        <div style={{ height: '12px', width: '90%', borderRadius: '4px', background: 'rgba(99,217,180,0.04)' }} />
        <div style={{ height: '12px', width: '75%', borderRadius: '4px', background: 'rgba(99,217,180,0.04)' }} />
      </div>
      <style>{`@keyframes shimmer { 0%,100%{opacity:0.6;}50%{opacity:1;} }`}</style>
    </div>
  );
}

// Returns the CSS transform + style for each card based on its offset from current
function getCardStyle(offset, total) {
  const abs = Math.abs(offset);

  // Only show up to 2 cards on each side
  if (abs > 2) return null;

  const isActive = offset === 0;

  // Fan parameters
  const rotateY   = offset * 42;           // degrees of Y-rotation per step
  const translateX = offset * 200;          // px horizontal spread
  const translateZ = isActive ? 0 : -120 - abs * 60; // depth push
  const scale      = isActive ? 1 : 1 - abs * 0.12;
  const opacity    = isActive ? 1 : 1 - abs * 0.28;
  const zIndex     = 10 - abs;

  return {
    position: 'absolute',
    top: 0, left: '50%',
    width: '340px',
    marginLeft: '-170px',           // center the card
    height: '420px',
    borderRadius: '16px',
    overflow: 'hidden',
    zIndex,
    opacity,
    cursor: isActive ? 'default' : 'pointer',
    transform: `perspective(1000px) rotateY(${rotateY}deg) translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
    transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.55s ease',
    transformOrigin: 'center center',
    boxShadow: isActive
      ? '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,217,180,0.12)'
      : '0 16px 40px rgba(0,0,0,0.35)',
    // Dim side cards with an overlay (pointer-events off so clicks fall through)
    filter: isActive ? 'none' : `brightness(${1 - abs * 0.25})`,
  };
}

export default function ProjectsPage() {
  const { projects, loading, usingFallback } = useProjects();
  const [current, setCurrent] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const autoRef = useRef(null);

  const total = loading ? 0 : projects.length;

  useEffect(() => {
    if (loading || total <= 1) return;
    autoRef.current = setInterval(() => goTo('next'), 4500);
    return () => clearInterval(autoRef.current);
  }, [loading, total]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    if (!loading && total > 1) {
      autoRef.current = setInterval(() => goTo('next'), 4500);
    }
  };

  const goTo = (dir) => {
    setCurrent(c => dir === 'next' ? (c + 1) % total : (c - 1 + total) % total);
    resetAuto();
  };

  const goToIndex = (i) => { setCurrent(i); resetAuto(); };

  const onPointerDown = (e) => setDragStartX(e.clientX);
  const onPointerUp   = (e) => {
    if (dragStartX === null) return;
    const diff = e.clientX - dragStartX;
    if (diff < -60) goTo('next');
    else if (diff > 60) goTo('prev');
    setDragStartX(null);
  };

  return (
    <section id="projects" style={{
      minHeight: '100vh', padding: '100px 40px 140px',
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes shimmer { 0%,100%{opacity:0.6;}50%{opacity:1;} }
        .fan-nav-btn { transition: background 0.2s, border-color 0.2s, transform 0.2s !important; }
        .fan-nav-btn:hover { background: rgba(99,217,180,0.14) !important; border-color: rgba(99,217,180,0.5) !important; transform: translateY(-50%) scale(1.1) !important; }
      `}</style>

      {/* Divider */}
      <div style={{
        position: 'absolute', top: 0, left: '40px', right: '40px', height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(99,217,180,0.15), transparent)',
      }} />

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ marginBottom: '60px' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#63d9b4',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
          }}>
            <span style={{ width: '28px', height: '1px', background: '#63d9b4', opacity: 0.7 }} />
            Projects
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800, color: '#f0faf6', margin: '0 0 12px', letterSpacing: '-0.02em',
          }}>My Work</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 300,
            color: 'rgba(180,220,210,0.50)', maxWidth: '460px',
          }}>
            Projects loaded dynamically from{' '}
            <span style={{ color: '#3ecf8e', fontWeight: 500 }}>Supabase</span>.
            {usingFallback && (
              <span style={{ color: 'rgba(99,217,180,0.45)', fontSize: '12px', display: 'block', marginTop: '4px' }}>
                ℹ️ Showing local data — connect Supabase in{' '}
                <code style={{ color: '#63d9b4' }}>src/services/supabaseClient.js</code> to load live data.
              </span>
            )}
          </p>
        </div>

        {/* Fan carousel stage */}
        <div style={{ position: 'relative' }}>

          {/* 3D stage — needs overflow visible for side cards to show */}
          <div
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            style={{
              position: 'relative',
              height: '440px',
              perspective: '1000px',
              perspectiveOrigin: '50% 50%',
              cursor: 'grab',
              userSelect: 'none',
            }}
          >
            {loading ? (
              <div style={{ position: 'absolute', top: 0, left: '50%', width: '340px', marginLeft: '-170px' }}>
                <SkeletonCard />
              </div>
            ) : projects.map((project, i) => {
              // Compute shortest-path offset (wraps around)
              let offset = i - current;
              if (offset > total / 2)  offset -= total;
              if (offset < -total / 2) offset += total;

              const cardStyle = getCardStyle(offset, total);
              if (!cardStyle) return null;

              return (
                <div
                  key={project.id}
                  style={cardStyle}
                  onClick={() => offset !== 0 && goToIndex(i)}
                >
                  {/* Uniform card wrapper */}
                  <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '16px' }}>
                    <ProjectCard project={project} index={i} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev / Next buttons */}
          {!loading && total > 1 && (
            <>
              {[
                { dir: 'prev', label: '‹', pos: { left: '0px' } },
                { dir: 'next', label: '›', pos: { right: '0px' } },
              ].map(({ dir, label, pos }) => (
                <button
                  key={dir}
                  className="fan-nav-btn"
                  onClick={() => goTo(dir)}
                  aria-label={dir === 'prev' ? 'Previous project' : 'Next project'}
                  style={{
                    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                    zIndex: 20, ...pos,
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'rgba(10,22,35,0.85)', border: '1px solid rgba(99,217,180,0.2)',
                    color: '#63d9b4', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px', lineHeight: 1,
                  }}
                >{label}</button>
              ))}
            </>
          )}
        </div>

        {/* Dots + counter */}
        {!loading && total > 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '36px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '8px', borderRadius: '4px', border: 'none', padding: 0,
                    background: i === current ? '#63d9b4' : 'rgba(99,217,180,0.2)',
                    cursor: 'pointer',
                    transition: 'width 0.3s ease, background 0.3s ease',
                  }}
                />
              ))}
            </div>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
              color: 'rgba(99,217,180,0.35)', letterSpacing: '0.12em',
            }}>
              {current + 1} / {total}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
