import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './ContributionGrid.css';

const COLS = 24;
const ROWS = 9;

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/**
 * Ambient, decorative signature element — a GitHub-style contribution grid,
 * a nod to the thing that actually defines an open-source contributor's
 * portfolio: the commit history. Purely atmospheric, aria-hidden.
 */
export default function ContributionGrid() {
  const cells = useMemo(() => {
    const arr = [];
    for (let i = 0; i < COLS * ROWS; i++) {
      const r = seededRandom(i * 7.13);
      const level = r > 0.86 ? 3 : r > 0.68 ? 2 : r > 0.45 ? 1 : 0;
      arr.push(level);
    }
    return arr;
  }, []);

  return (
    <div className="contrib-grid" aria-hidden="true">
      {cells.map((level, i) => (
        <motion.span
          key={i}
          className={`contrib-cell lvl-${level}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 + (i % COLS) * 0.012 + Math.floor(i / COLS) * 0.03 }}
        />
      ))}
    </div>
  );
}
