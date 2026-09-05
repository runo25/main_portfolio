import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiGlobe, FiFileText, FiCode, FiTrendingUp, FiArrowDown } from 'react-icons/fi';
import { personal } from '../data/portfolio';
import portraitImg from '../assets/oruno_portrait.jpg';

const socials = [
  { icon: FiGithub, href: personal.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personal.twitter, label: 'Twitter' },
  { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email', copyText: personal.email },
  { icon: FiGlobe, href: personal.website, label: 'Portfolio' },
];

export default function Hero({ onOpenDossier, onShowToast }) {
  const [lagosTime, setLagosTime] = useState('');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Live Lagos, Nigeria Clock (Africa/Lagos WAT)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Lagos',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        }).format(now);
        setLagosTime(formatted);
      } catch {
        setLagosTime('WAT (Lagos)');
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 3D Tilt calculation on mouse move over arch portrait
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleSocialClick = (e, item) => {
    if (item.copyText) {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(item.copyText);
        if (onShowToast) onShowToast(`✓ Copied ${item.copyText} to clipboard`);
      }
    }
  };

  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--bg-hero)',
        paddingTop: '8.5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient drifting luminous halos for depth */}
      <div
        className="ambient-glow"
        style={{
          top: '-10%',
          left: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(15, 118, 110, 0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="ambient-glow"
        style={{
          top: '30%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Live Telemetry & Availability Pill (First 3 Seconds WOW) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            padding: '0.45rem 1rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(255, 255, 255, 0.95)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-emerald)',
                boxShadow: '0 0 0 3px rgba(5, 150, 105, 0.2)',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
            >
              Lagos, Nigeria
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>•</span>
            <span
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: 'var(--accent-pine)',
              }}
            >
              {lagosTime || 'WAT'}
            </span>
          </div>

          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>|</span>

          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Available for Q3/Q4 Senior & Contract Roles
          </span>
        </motion.div>

        {/* Main 3-Column Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Greeting, Name & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="editorial-num">01 / MASTER REPERTOIRE</div>
            <span
              style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                marginBottom: '0.5rem',
              }}
            >
              Hello,
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(3.5rem, 5.5vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: 'var(--text-primary)',
                marginBottom: '2.5rem',
              }}
            >
              I Am <br />
              {personal.firstName}
            </h1>

            {/* Find Me Online */}
            <div>
              <div
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                }}
              >
                Direct Channels
              </div>
              <div className="wavy-line" style={{ marginBottom: '1.25rem' }} />

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socials.map((item) => {
                  const { icon: Icon, href, label } = item;
                  return (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="hero-social-btn"
                      onClick={(e) => handleSocialClick(e, item)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: '1px solid rgba(15, 23, 42, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-primary)',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'all 0.2s ease',
                        touchAction: 'manipulation',
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Center Column: Architectural Arch Portrait with 3D Tilt & Floating Spec Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              perspective: 1000,
            }}
          >
            {/* Floating Orbital Badge 1 (Top Left) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '12%',
                left: '-28px',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(10px)',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.76rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                pointerEvents: 'none',
              }}
              className="hero-orbit-badge"
            >
              <FiCode size={14} style={{ color: 'var(--accent-pine)' }} />
              <span>React 19 & PWA Craft</span>
            </motion.div>

            {/* Floating Orbital Badge 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '12%',
                right: '-24px',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(10px)',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.76rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                pointerEvents: 'none',
              }}
              className="hero-orbit-badge"
            >
              <FiTrendingUp size={14} style={{ color: 'var(--accent-sand)' }} />
              <span>98% Lighthouse · Sub-100ms</span>
            </motion.div>

            {/* Arch Frame with 3D Tilt */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                width: '320px',
                height: '420px',
                borderRadius: '160px 160px 24px 24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
                backgroundColor: '#CBD5E1',
                border: '4px solid #FFFFFF',
                position: 'relative',
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
                cursor: 'pointer',
              }}
            >
              <img
                src={portraitImg}
                alt={personal.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />

              {/* Artisan Light Sheen Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Role Bio & Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.3,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Full-Stack Developer & React Specialist
            </h2>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '1.75rem',
              }}
            >
              Building innovative web applications that blend aesthetic craft with robust engineering. 
              Specializing in component-driven React architectures, Progressive Web Apps (PWAs), 
              and reliable Python/Django cloud backends.
            </p>

            {/* Dual CTA Buttons (Explore Works + 60s Recruiter Dossier) */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="#projects"
                className="btn btn-dark"
                style={{
                  padding: '0.85rem 1.8rem',
                  fontSize: '0.9rem',
                }}
              >
                <span>Explore Works</span>
                <FiArrowDown size={14} />
              </a>

              {onOpenDossier && (
                <button
                  type="button"
                  onClick={onOpenDossier}
                  className="btn btn-white"
                  style={{
                    padding: '0.85rem 1.4rem',
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <FiFileText size={15} style={{ color: 'var(--accent-pine)' }} />
                  <span>60s Recruiter Dossier</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Mini Highlight Strip underneath */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            marginTop: '3.5rem',
            padding: '1rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(255, 255, 255, 0.95)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Open to Remote & Full-Time Global Roles
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {['React.js 19', 'Python & Django', 'PWA Specialist', 'WaaS Architecture', 'Tailwind CSS'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  background: '#FFFFFF',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-light)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            align-items: center !important;
            text-align: center;
          }
          .hero-grid > div:first-child > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-orbit-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
