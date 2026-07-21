import { motion } from 'framer-motion';
import './Portrait.css';
import portraitImg from '../assets/portrait.png';

/**
 * Professional portrait — real photo, swapped in for the initial placeholder.
 */
export default function Portrait() {
  return (
    <motion.div
      className="portrait-wrap"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="portrait-ring" aria-hidden="true" />
      <div className="portrait-frame">
        <img src={portraitImg} alt="Solomon Buwule" />
      </div>
      <span className="portrait-badge">
        <span className="pill-dot" /> Available for opportunities
      </span>
    </motion.div>
  );
}