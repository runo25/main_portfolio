import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          <div>
            <span className="section-label">Selected Works</span>
            <h2 className="section-title">
              Featured Projects & <br /> Digital Products
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
            }}
          >
            <FiGithub size={16} />
            <span>More on GitHub</span>
          </a>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
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

                  {project.url !== '#' && (
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
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.name}
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
    </section>
  );
}
