import { motion } from 'framer-motion';
import { personal, categoriesPills } from '../data/portfolio';
import sculptureImg from '../assets/abstract_sculpture.jpg';

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '4.5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative & Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.4rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.25rem',
                letterSpacing: '-0.025em',
              }}
            >
              About Me
            </h2>
            <div className="wavy-line" style={{ marginBottom: '1.5rem' }} />

            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}
            >
              As a Full-Stack Web Developer and WaaS Specialist with over 2 years of experience, 
              I build modern, responsive web applications that blend aesthetic elegance with technical rigor. 
              My expertise centers on creating responsive, app-like interfaces using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, 
              paired with robust backend architectures in <strong>Python</strong>, <strong>Django</strong>, and cloud APIs.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                marginBottom: '2.25rem',
              }}
            >
              Whether engineering Progressive Web Apps (PWAs) with offline capabilities, creating reusable component libraries 
              that cut site build time by 50%, or building document automation engines, I focus on delivering scalable, production-ready software.
            </p>

            {/* Interactive Category Pills Grid (matching reference) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {categoriesPills.map((pill) => (
                <span key={pill} className="pill-tag">
                  <span className="pill-dot" />
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: "The Value Provided" Dark Feature Card (from reference) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-dark-card)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem 2rem',
                color: '#FFFFFF',
                width: '100%',
                maxWidth: '380px',
                boxShadow: 'var(--shadow-dark)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                The Value Provided
              </h3>

              {/* 3D Abstract Sculpture Asset */}
              <div
                style={{
                  width: '190px',
                  height: '190px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '1.75rem',
                  background: '#131C2E',
                }}
              >
                <img
                  src={sculptureImg}
                  alt="Value Provided 3D Art"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: '#CBD5E1',
                  lineHeight: 1.65,
                  textAlign: 'center',
                }}
              >
                Gain insights through responsive user architecture, verified performance, and seamless API integrations. 
                Delivering reliable, conversion-focused software tailored to modern user behaviors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
