import { motion } from 'framer-motion';
import './Portrait.css';

/**
 * Professional portrait placeholder. Swap this out for a real photo by
 * replacing the contents of the `.portrait-frame` with an <img> tag —
 * see the README for instructions.
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
        <svg viewBox="0 0 200 200" role="img" aria-label="Portrait placeholder for Solomon Buwule">
          <defs>
            <linearGradient id="portraitGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-2)" />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#portraitGrad)" opacity="0.14" />
          <text x="100" y="120" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="64" fontWeight="600" fill="var(--accent)">
            SB
          </text>
        </svg>
      </div>
      <span className="portrait-badge">
        <span className="pill-dot" /> Available for opportunities
      </span>
    </motion.div>
  );
}
