import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Work', href: '#work' },
  // { label: 'Figma', href: '#figma-work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') !== 'light'
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDark]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className="navigation"
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <a href="#about" className="nav-logo" aria-label="Rory Tanton — back to top">RT</a>

      {/* desktop nav links */}
      <ul className="nav-links" role="list">
        {navItems.map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
          >
            <a href={item.href}>{item.label}</a>
          </motion.li>
        ))}
      </ul>

      <div className="nav-controls">
        <motion.button
          className="theme-toggle"
          onClick={() => setIsDark(prev => !prev)}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDark ? '☀' : '☾'}
        </motion.button>

        {/* hamburger, mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <ul role="list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={closeMenu}>{item.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
