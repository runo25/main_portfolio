import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export default function Toast({ message, onClose }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '0.75rem 1.4rem',
            borderRadius: '9999px',
            boxShadow: '0 12px 32px -4px rgba(15, 23, 42, 0.35), 0 4px 12px rgba(0, 0, 0, 0.1)',
            fontSize: '0.86rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            pointerEvents: 'auto',
          }}
          onClick={onClose}
        >
          <span
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '11px',
              flexShrink: 0,
            }}
          >
            <FiCheck strokeWidth={3} />
          </span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
