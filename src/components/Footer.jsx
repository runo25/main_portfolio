import { personal } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--border-light)',
        padding: '3rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.4rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '26px',
                  height: '26px',
                  borderRadius: '6px',
                  background: 'var(--accent-dark)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                }}
              >
                OA
              </span>
              <span>{personal.name}</span>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} {personal.name} · Full-Stack Web Developer · {personal.location}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
            {['About', 'Services', 'Works', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === 'works' ? 'projects' : item.toLowerCase()}`}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {[
              { icon: FiGithub, href: personal.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: FiGlobe, href: personal.website, label: 'Website' },
              { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <Icon size={18} />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                marginLeft: '0.5rem',
                cursor: 'pointer',
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
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
