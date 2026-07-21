import { motion } from 'framer-motion';
import { PenLine, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons';
import Portrait from '../components/Portrait';
import ContributionGrid from '../components/ContributionGrid';
import { profile } from '../utils/data';
import './Hero.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>
      <ContributionGrid />

      <div className="container hero-grid">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
          <motion.span className="pill" variants={item}>
            <span className="pill-dot" /> Open Source Contributor · OpenMRS
          </motion.span>

          <motion.h1 className="hero-name" variants={item}>
            {profile.name}
          </motion.h1>

          <motion.p className="hero-role" variants={item}>
            {profile.role}
          </motion.p>

          <motion.p className="hero-desc" variants={item}>
            I build interfaces and systems for open-source software that reaches real people —
            currently contributing frontend and backend work to OpenMRS, a medical record
            platform used in clinics across the developing world.
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <a className="btn btn-primary" href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon size={17} /> View GitHub
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={17} /> View LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.medium} target="_blank" rel="noreferrer">
              <PenLine size={17} /> Read My Articles
            </a>
          </motion.div>

          <motion.div className="hero-meta" variants={item}>
            <span className="eyebrow" style={{ marginBottom: 0 }}>{profile.location}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <Portrait />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll-cue"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
