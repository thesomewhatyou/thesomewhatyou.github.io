'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Presence', href: '#presence' },
  { label: 'Content', href: '#content' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    const offset = 90;
    const elementPosition = (element as HTMLElement).offsetTop;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
    setIsMobileMenuOpen(false);
  };

  const navClasses = `flex items-center justify-between gap-6 rounded-full border border-border/70 bg-card/80 px-5 py-3 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.6)] backdrop-blur-2xl transition-all duration-300 ${
    isScrolled ? 'scale-95 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.55)]' : ''
  }`;

  const renderNavItems = (isDesktop = false) => (
    <div className={`flex ${isDesktop ? 'items-center gap-6' : 'flex-col gap-2'}`}>
      {navItems.map((item) => {
        const isActive = activeSection === item.href.slice(1);
        return (
          <motion.button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className={`relative text-sm font-medium transition-colors duration-300 ${
              isActive ? 'text-primary' : 'text-muted hover:text-foreground'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {item.label}
            {isActive && (
              <motion.span
                layoutId="active-underline"
                className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-primary/80 via-primary to-accent/80"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );

  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <motion.nav
        className="mx-auto max-w-6xl px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={navClasses}>
          <button
            onClick={() => scrollToSection('#hero')}
            className="group flex items-center gap-3 rounded-full bg-background/40 px-3 py-2 text-left shadow-inner transition-all duration-300 hover:bg-background"
          >
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-accent/80 text-background"
              whileHover={{ rotate: 12 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Sparkles size={18} />
            </motion.div>
            <span className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Gabriel
              </span>
              <span className="text-sm font-semibold text-foreground">
                thes0mewhatyou
              </span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {renderNavItems(true)}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted transition-all duration-300 hover:border-primary/60 hover:text-primary"
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence initial={false} mode="wait">
                {theme === 'dark' ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted transition-colors duration-300 hover:border-primary/60 hover:text-primary lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto mt-4 max-w-6xl px-4">
              <motion.div
                className="flex flex-col gap-3 rounded-3xl border border-border/70 bg-card/90 p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.6)] backdrop-blur-2xl"
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {renderNavItems()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
