import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, FileUser } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { profile } from '../utils/data';
import { scrollToSection } from '../utils/scrollToSection';
import './Navbar.css';

const SCROLL_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'connect', label: 'Blog & Contact' },
];

const DOC_LINKS = [
  { to: '/cv', label: 'CV', Icon: FileText },
  { to: '/resume', label: 'Resume', Icon: FileUser },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={(e) => { scrollToSection(e, 'top'); handleNavClick(); }}>
          <span className="nav-logo-mark">&gt;_</span>
          {profile.handle}
        </a>

        <nav className="nav-links" aria-label="Primary">
          {SCROLL_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="nav-scroll-link" onClick={(e) => scrollToSection(e, link.id)}>
              {link.label}
            </a>
          ))}
          <span className="nav-divider" aria-hidden="true" />
          {DOC_LINKS.map((link) => (
            <Link key={link.to} to={link.to} target="_blank" rel="noreferrer" className="nav-doc-link">
              <link.Icon size={14} /> {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile"
          >
            {SCROLL_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-scroll-link"
                onClick={(e) => { scrollToSection(e, link.id); handleNavClick(); }}
              >
                {link.label}
              </a>
            ))}
            {DOC_LINKS.map((link) => (
              <Link key={link.to} to={link.to} target="_blank" rel="noreferrer" onClick={handleNavClick}>
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}