import { motion } from 'framer-motion';
import { services } from '../data/portfolio';
import { 
  FiLayers, 
  FiSmartphone, 
  FiCode, 
  FiCpu, 
  FiLayout, 
  FiRepeat 
} from 'react-icons/fi';

const iconList = [
  FiLayers,
  FiSmartphone,
  FiCode,
  FiCpu,
  FiLayout,
  FiRepeat,
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '4rem',
            marginBottom: '4rem',
          }}
          className="services-header-grid"
        >
          <div>
            <span className="section-label">Capabilities</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              Services <br /> Provided
            </h2>
            <div className="wavy-line" style={{ marginTop: '0.5rem' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p className="section-subtitle">
              Comprehensive web engineering and product design services tailored to modern startups, SMEs, 
              and enterprise platforms. From prototype to production deployment.
            </p>
          </div>
        </div>

        {/* Services Grid (Clean matching reference aesthetic) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem 2rem',
          }}
          className="services-grid"
        >
          {services.map((service, index) => {
            const Icon = iconList[index % iconList.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-card-subtle)',
                  border: '1px solid var(--border-light)',
                  transition: 'all var(--transition-smooth)',
                }}
                whileHover={{ y: -4, backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-md)' }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-dark)',
                    marginBottom: '1.25rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <Icon size={20} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .services-header-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
