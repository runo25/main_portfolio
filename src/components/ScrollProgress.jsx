import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useAnimations';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        backgroundColor: 'var(--accent-dark)',
        zIndex: 9999,
        transformOrigin: 'left',
        scaleX: progress,
      }}
    />
  );
}
