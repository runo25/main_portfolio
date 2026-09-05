import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiMessageCircle, FiMail, FiGithub, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { personal } from '../data/portfolio';

export default function RecruiterDossierModal({ isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9990,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              overflowY: 'auto',
              padding: '2.5rem',
              color: 'var(--text-primary)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar / Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '1.75rem',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '1.25rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    color: 'var(--accent-emerald)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.6rem',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-emerald)',
                    }}
                  />
                  <span>Recruiter Fast-Track Dossier</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                  }}
                >
                  {personal.name}
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  Full-Stack Web Developer · React & Python Specialist · Lagos, NG (Open to Remote Worldwide)
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Dossier"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                  marginLeft: '1rem',
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
                <FiX size={18} />
              </button>
            </div>

            {/* 60-Second Executive Summary */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                }}
              >
                60-Second Executive Summary
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                Oruno specializes in building <strong>production-grade React web applications</strong> and <strong>high-precision Python/Django backends</strong>.
                With a proven track record of launching platforms from scratch—including the luxury motorsport platform <strong>Penxxaflor Atelier</strong>, 
                campus AI platform <strong>Visible App</strong>, and high-speed media PWA <strong>Remina App</strong>.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '1rem' }} className="dossier-metrics-grid">
                <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-dark)' }}>98%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Satisfaction & Lighthouse</div>
                </div>
                <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-pine)' }}>50%</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Faster Build Velocity</div>
                </div>
                <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-sand)' }}>&lt;100ms</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Sub-100ms UI Latency</div>
                </div>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                }}
              >
                Production Competencies
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { title: 'Frontend Architecture', desc: 'React 19, TypeScript, Modern ES6+, Tailwind CSS, Framer Motion, PWA Service Workers' },
                  { title: 'Backend & APIs', desc: 'Python, Django REST Framework, FastAPI, PostgreSQL, Firebase Auth & Firestore' },
                  { title: 'Engineering Principles', desc: 'Component Reusability, Web Vitals Optimization, CI/CD Cloud Deployments, Automated PDF Generators' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                    <FiCheckCircle size={15} style={{ color: 'var(--accent-pine)', marginTop: '0.2rem', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>{item.title}:</strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.85rem',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1.5rem',
              }}
              className="dossier-actions-grid"
            >
              <a
                href="/Oruno_Awhie_Resume.pdf"
                download="Oruno_Awhie_Resume.pdf"
                className="btn btn-dark"
                style={{
                  padding: '0.85rem 1rem',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <FiDownload size={16} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="https://wa.me/2349155541159"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  padding: '0.85rem 1rem',
                  fontSize: '0.88rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  border: 'none',
                }}
              >
                <FiMessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`mailto:${personal.email}?subject=Interview%20Invitation%20-%20Oruno%20Awhie`}
                className="btn btn-outline"
                style={{
                  padding: '0.85rem 1rem',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <FiMail size={16} />
                <span>Email Oruno</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  padding: '0.85rem 1rem',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <FiGithub size={16} />
                <span>Verify GitHub Code</span>
              </a>
            </div>
          </motion.div>

          <style>{`
            @media (max-width: 600px) {
              .dossier-metrics-grid {
                grid-template-columns: 1fr !important;
              }
              .dossier-actions-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}
