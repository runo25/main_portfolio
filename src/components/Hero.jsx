import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiGlobe } from 'react-icons/fi';
import { personal } from '../data/portfolio';
import portraitImg from '../assets/oruno_portrait.jpg';

const socials = [
  { icon: FiGithub, href: personal.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personal.twitter, label: 'Twitter' },
  { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
  { icon: FiGlobe, href: personal.website, label: 'Portfolio' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--bg-hero)',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
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
          {/* Left Column: Greeting & Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                marginBottom: '0.5rem',
              }}
            >
              Hello
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
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                }}
              >
                Find Me Online
              </div>
              <div className="wavy-line" style={{ marginBottom: '1.25rem' }} />

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      border: '1px solid rgba(15, 23, 42, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Column: Architectural Arch Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '320px',
                height: '420px',
                borderRadius: '160px 160px 24px 24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.12)',
                backgroundColor: '#CBD5E1',
                border: '4px solid #FFFFFF',
                position: 'relative',
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
            </div>
          </motion.div>

          {/* Right Column: Role Bio & CTA */}
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
                marginBottom: '2rem',
              }}
            >
              Building innovative web applications that blend aesthetic craft with robust engineering. 
              Specializing in component-driven React architectures, Progressive Web Apps (PWAs), 
              and reliable Python/Django cloud backends.
            </p>

            <a
              href="#projects"
              className="btn btn-dark"
              style={{
                padding: '0.85rem 1.8rem',
                fontSize: '0.9rem',
              }}
            >
              Explore Works
            </a>
          </motion.div>
        </div>

        {/* Mini Gallery / Highlight Strip underneath */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            marginTop: '3.5rem',
            padding: '1rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
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
              Open to Remote & Full-Time Roles
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['React.js', 'Python & Django', 'PWA Specialist', 'WaaS Architect', 'Tailwind CSS'].map((tag) => (
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
        }
      `}</style>
    </section>
  );
}
