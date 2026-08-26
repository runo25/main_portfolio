import { useState, useEffect, useCallback } from 'react';
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

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      // Small timeout ensures mobile drawer animation doesn't jitter the scroll
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
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
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(233, 239, 239, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.1rem 2rem',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            zIndex: 102,
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
                onClick={(e) => handleNavClick(e, link.href)}
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

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 102 }}>
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

          {/* Mobile Menu Button with larger touch target */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '0.6rem',
              marginRight: '-0.4rem',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              touchAction: 'manipulation',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '2.5px',
                borderRadius: '2px',
                background: 'var(--text-primary)',
                display: 'block',
                transition: 'all 0.25s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5.5px)' : 'none',
              }}
            />
            <span
              style={{
                width: '24px',
                height: '2.5px',
                borderRadius: '2px',
                background: 'var(--text-primary)',
                display: 'block',
                transition: 'all 0.2s ease',
                opacity: mobileMenuOpen ? 0 : 1,
                transform: mobileMenuOpen ? 'translateX(10px)' : 'none',
              }}
            />
            <span
              style={{
                width: '24px',
                height: '2.5px',
                borderRadius: '2px',
                background: 'var(--text-primary)',
                display: 'block',
                transition: 'all 0.25s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5.5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid rgba(15, 23, 42, 0.08)',
              overflow: 'hidden',
              boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
            }}
          >
            <ul
              style={{
                padding: '1.5rem 1.75rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                listStyle: 'none',
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'block',
                      padding: '0.75rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      touchAction: 'manipulation',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ paddingTop: '1rem' }}>
                <a
                  href={`mailto:${personal.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-dark"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    fontSize: '0.95rem',
                  }}
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
