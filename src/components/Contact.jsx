import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiGlobe, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ backgroundColor: 'var(--bg-hero)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4.5rem',
            alignItems: 'center',
          }}
          className="contact-grid"
        >
          {/* Left Column: Heading & Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Get In Touch</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              Let's Build <br />
              Something Remarkable.
            </h2>
            <div className="wavy-line" style={{ marginBottom: '1.5rem' }} />

            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '480px',
              }}
            >
              Whether you have an upcoming web application, a full-time role, or want to discuss a custom Website-as-a-Service architecture, my inbox is always open.
            </p>

            {/* Direct Contact List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href={`mailto:${personal.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                  }}
                >
                  <FiMail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Email Directly
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {personal.email}
                  </div>
                </div>
                <FiArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>

              <a
                href={`tel:${personal.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                  }}
                >
                  <FiPhone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Call / WhatsApp
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {personal.phone}
                  </div>
                </div>
                <FiArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem 2.5rem',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(5, 150, 105, 0.08)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--accent-emerald)',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-emerald)' }} />
                <span>Available for New Roles & Projects</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Start a Conversation
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                }}
              >
                Based in Nigeria with open availability for Remote, Hybrid (Lagos), and Contract positions worldwide.
              </p>

              <a
                href={`mailto:${personal.email}?subject=Project%20Inquiry%20-%20Oruno%20Awhie`}
                className="btn btn-dark"
                style={{
                  width: '100%',
                  padding: '0.9rem 1.5rem',
                  fontSize: '0.95rem',
                  marginBottom: '1.25rem',
                }}
              >
                Send Email Message
              </a>

              {/* Social links row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                {[
                  { icon: FiGithub, href: personal.github, label: 'GitHub' },
                  { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
                  { icon: FiGlobe, href: personal.website, label: 'Portfolio Website' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: '38px',
                      height: '38px',
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
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
