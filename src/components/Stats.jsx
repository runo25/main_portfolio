import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stats } from '../data/portfolio';
import bannerImg from '../assets/collaboration_banner.jpg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Stats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === stats.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevStat = () => {
    setCurrentIndex((prev) => (prev === 0 ? stats.length - 1 : prev - 1));
  };

  const nextStat = () => {
    setCurrentIndex((prev) => (prev === stats.length - 1 ? 0 : prev + 1));
  };

  const active = stats[currentIndex];

  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--bg-page)', paddingTop: '2rem' }}>
      <div className="container">
        {/* Full-Width Visual Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="stats-banner-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            minHeight: '420px',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '3rem',
          }}
        >
          {/* Background Image with Dark Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${bannerImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.4) 100%)',
            }}
          />

          {/* Banner Content Container */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            {/* Left Highlight Metric */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(3.2rem, 6.5vw, 5.5rem)',
                      fontWeight: 800,
                      lineHeight: 1,
                      color: '#FFFFFF',
                      letterSpacing: '-0.04em',
                      display: 'flex',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span>{active.value}</span>
                    <span style={{ fontSize: '0.6em', opacity: 0.95 }}>{active.suffix}</span>
                    <span
                      style={{
                        fontSize: '0.3em',
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginLeft: '0.3rem',
                        marginTop: '-0.1rem',
                      }}
                    >
                      ✦
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginTop: '0.4rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {active.label}
                  </div>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: '#CBD5E1',
                      marginTop: '0.25rem',
                      maxWidth: '420px',
                      lineHeight: 1.55,
                    }}
                  >
                    {active.desc}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Controls & Thumbnail indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              {/* Pagination Dots */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {stats.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to stat ${i + 1}`}
                    style={{
                      width: i === currentIndex ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: i === currentIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows (matching reference) */}
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button
                  onClick={prevStat}
                  aria-label="Previous metric"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--text-primary)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)')}
                >
                  <FiChevronLeft size={18} />
                </button>

                <button
                  onClick={nextStat}
                  aria-label="Next metric"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-primary)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-banner-card {
            padding: 1.75rem 1.25rem !important;
            min-height: 380px !important;
            border-radius: var(--radius-lg) !important;
          }
        }
      `}</style>
    </section>
  );
}
