import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { FiArrowUpRight, FiGithub, FiLink, FiCheck, FiCpu, FiActivity, FiShield } from 'react-icons/fi';

const filterCategories = [
  { id: 'all', label: 'All Works' },
  { id: 'flagship', label: 'Flagship Platforms' },
  { id: 'pwa', label: 'PWAs & Social' },
  { id: 'systems', label: 'Automation & Tools' },
];

export default function Projects({ onShowToast }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'flagship') return project.id === 1 || project.id === 2;
    if (activeCategory === 'pwa') return project.tag.includes('PWA') || project.tag.includes('Social') || project.tag.includes('Booking');
    if (activeCategory === 'systems') return project.tag.includes('Automation') || project.tag.includes('SaaS') || project.tag.includes('CMS');
    return true;
  });

  const handleCopyLink = (e, project) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.url && project.url !== '#') {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(project.url);
        if (onShowToast) onShowToast(`✓ Copied link for ${project.name}`);
      }
    }
  };

  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: 'var(--bg-subtle)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div className="editorial-num">03 / SELECTED REPERTOIRE</div>
            <h2 className="section-title">
              Featured Platforms & <br /> Digital Products
            </h2>
            <div className="wavy-line" style={{ marginTop: '0.5rem' }} />
          </div>

          <a
            href="https://github.com/runo25"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{
              padding: '0.7rem 1.4rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#FFFFFF',
            }}
          >
            <FiGithub size={16} />
            <span>More Code on GitHub</span>
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  border: isActive ? '1px solid var(--accent-dark)' : '1px solid var(--border-light)',
                  backgroundColor: isActive ? 'var(--accent-dark)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Flagship Highlight Spotlight: Penxxaflor Atelier (Special Artwork Card) */}
        {activeCategory === 'all' || activeCategory === 'flagship' ? (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: '#0F1624',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3.25rem)',
              marginBottom: '3rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.3)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}
          >
            {/* Ambient gold/cyan telemetry glow */}
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0, 242, 254, 0.05) 50%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#D4AF37',
                    backgroundColor: 'rgba(212, 175, 55, 0.12)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>✦</span>
                  <span>Flagship Showcase Repertoire</span>
                </span>

                <span
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    color: '#00F2FE',
                    backgroundColor: 'rgba(0, 242, 254, 0.1)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                  }}
                >
                  Live Production Platform
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <button
                  type="button"
                  onClick={(e) => handleCopyLink(e, projects[0])}
                  aria-label="Copy Atelier URL"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                >
                  <FiLink size={15} />
                </button>

                <a
                  href="https://penxxaflor-atelier-main.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#07080A',
                    fontWeight: 700,
                    padding: '0.55rem 1.25rem',
                    fontSize: '0.84rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 4px 16px rgba(212, 175, 55, 0.25)',
                  }}
                >
                  <span>Launch Platform</span>
                  <FiArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                marginBottom: '0.5rem',
                color: '#FFFFFF',
              }}
            >
              Penxxaflor Atelier
            </h3>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#C5A880',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              Luxury Automotive Restoration & Motorsport Race-Engineering Platform
            </p>

            <p
              style={{
                fontSize: '0.94rem',
                color: '#CBD5E1',
                lineHeight: 1.75,
                maxWidth: '780px',
                marginBottom: '2rem',
              }}
            >
              Bespoke digital platform bridging artisan coachbuilding with precision motorsport engineering. 
              Features live RPM/Lambda telemetry HUDs, interactive SVG dyno power curves, a 6-stage build tracking portal 
              with CMM micrometer tolerance ledgers, and a real-time commission configurator with instant pricing synthesis.
            </p>

            {/* Atelier Technical Highlight Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginBottom: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '1.5rem',
              }}
              className="atelier-spec-grid"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <FiActivity size={18} style={{ color: '#00F2FE', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>Live Dyno Visualizer</div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8' }}>Interactive SVG Telemetry HUD</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <FiCpu size={18} style={{ color: '#D4AF37', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>100/100 Core Web Vitals</div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8' }}>Sub-100ms Micro-Interactions</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <FiShield size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>CMM Build Ledger</div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8' }}>6-Stage Restoration Tracker</div>
                </div>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Telemetry HUD', 'Dynamic Configurator'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#E2E8F0',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ) : null}

        {/* Remaining Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects
            .filter((p) => p.id !== 1 || activeCategory !== 'all')
            .map((project, index) => (
              <motion.article
                key={project.id + project.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-smooth)',
                  position: 'relative',
                }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--border-active)' }}
              >
                <div>
                  {/* Header Tag Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: 'var(--accent-pine)',
                        }}
                      >
                        {String(index + 2).padStart(2, '0')} //
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-dark)',
                          backgroundColor: 'var(--bg-subtle)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {project.tag}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      {project.url !== '#' && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => handleCopyLink(e, project)}
                            aria-label={`Copy link for ${project.name}`}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--bg-subtle)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--text-muted)',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--accent-dark)';
                              e.currentTarget.style.color = '#FFFFFF';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                              e.currentTarget.style.color = 'var(--text-muted)';
                            }}
                          >
                            <FiLink size={14} />
                          </button>

                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.name}`}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--bg-subtle)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--text-primary)',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--accent-dark)';
                              e.currentTarget.style.color = '#FFFFFF';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                          >
                            <FiArrowUpRight size={16} />
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      marginBottom: '0.35rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {project.url !== '#' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--text-primary)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <span>{project.name}</span>
                      </a>
                    ) : (
                      <span style={{ color: 'var(--text-primary)' }}>{project.name}</span>
                    )}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-pine)',
                      marginBottom: '1rem',
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills & Link */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--bg-subtle)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid rgba(15, 23, 42, 0.04)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .atelier-spec-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
