import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import { personal } from '../data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.03)' : 'none',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 2rem',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: 'var(--accent-dark)',
              color: '#FFFFFF',
              fontSize: '0.8rem',
              fontWeight: 800,
            }}
          >
            OA
          </span>
          <span>Oruno Awhie</span>
        </a>

        {/* Desktop Links */}
        <ul
          className="desktop-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            listStyle: 'none',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={`mailto:${personal.email}`}
            className="btn btn-white desktop-cta"
            style={{
              padding: '0.6rem 1.3rem',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: '#FFFFFF',
              border: '1px solid rgba(15, 23, 42, 0.12)',
            }}
          >
            <span>Let's talk</span>
            <FiMessageSquare size={13} style={{ color: 'var(--text-muted)' }} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '0.4rem',
              flexDirection: 'column',
              gap: '5px',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                display: 'block',
                transition: 'transform 0.2s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                display: 'block',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }}
            />
            <span
              style={{
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                display: 'block',
                transition: 'transform 0.2s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid rgba(15, 23, 42, 0.08)',
              overflow: 'hidden',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
            }}
          >
            <ul
              style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                listStyle: 'none',
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'block',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ paddingTop: '0.5rem' }}>
                <a
                  href={`mailto:${personal.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-dark"
                  style={{ width: '100%' }}
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-links, .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
