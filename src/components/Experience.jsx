import { motion } from 'framer-motion';
import { experience, education } from '../data/portfolio';
import { FiBriefcase, FiAward, FiCheckCircle } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="editorial-num">04 / TRACK RECORD & CREDENTIALS</div>
          <h2 className="section-title">
            Experience & <br /> Education
          </h2>
          <div className="wavy-line" style={{ marginTop: '0.5rem' }} />
        </div>

        {/* 2-Column Grid: Work Experience & Education */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="experience-grid"
        >
          {/* Left Column: Work Experience Timeline */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <FiBriefcase size={20} style={{ color: 'var(--accent-pine)' }} />
              <span>Professional Experience</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {item.role}
                      </h4>
                      <div
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: 'var(--accent-pine)',
                        }}
                      >
                        {item.company} {item.companyNote && `· ${item.companyNote}`}
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        backgroundColor: 'var(--bg-subtle)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '1rem',
                    }}
                  >
                    {item.description}
                  </p>

                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      marginBottom: '1.25rem',
                      listStyle: 'none',
                    }}
                  >
                    {item.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <FiCheckCircle
                          size={14}
                          style={{
                            color: 'var(--accent-pine)',
                            flexShrink: 0,
                            marginTop: '0.25rem',
                          }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          backgroundColor: 'var(--bg-subtle)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-sm)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Credentials */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <FiAward size={20} style={{ color: 'var(--accent-sand)' }} />
              <span>Education</span>
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '1.75rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--accent-sand)',
                  backgroundColor: 'rgba(217, 119, 6, 0.08)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '0.75rem',
                }}
              >
                {education.period}
              </span>

              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.35rem',
                }}
              >
                {education.degree}
              </h4>

              <div
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.75rem',
                }}
              >
                {education.school}
              </div>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                Rigorous computer science curriculum covering algorithms, data structures, 
                software engineering principles, relational databases, and object-oriented programming.
              </p>
            </motion.div>

            {/* Quick Skills Summary Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid var(--border-light)',
              }}
            >
              <h4
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                Core Competencies
              </h4>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  'React.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Python',
                  'Django',
                  'REST APIs',
                  'PWA Development',
                  'CI/CD Workflows',
                  'Figma to Code',
                  'State Management',
                ].map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      backgroundColor: '#FFFFFF',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
