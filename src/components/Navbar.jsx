import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, PhoneCall } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', target: 'hero' },
    { name: 'Quiénes Somos', target: 'nosotros' },
    { name: 'Paquetes', target: 'servicios' },
  ];

  const handleNavClick = (target, e) => {
    scrollToSection(target, e);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? currentTheme.isDark
            ? 'bg-theme-bg/90 backdrop-blur-md shadow-xl py-3 border-b border-theme-borderSubtle'
            : 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={(e) => handleNavClick('hero', e)}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-theme-accent flex items-center justify-center text-slate-950 shadow-md shadow-theme-accent/25 group-hover:scale-105 transition-transform font-bold">
              <Zap className="w-5 h-5 fill-slate-950" />
            </div>
            <span className="text-xl font-bold tracking-tight text-theme-text">
              Grafix<span className="text-theme-accent">Labs</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(link.target, e)}
                className="text-sm font-medium text-theme-muted hover:text-theme-accent transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Controls (Selector de Paleta + CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeSwitcher variant="navbar" />

            <button
              onClick={(e) => handleNavClick('contacto', e)}
              className="btn-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold active:scale-95 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contáctanos</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitcher variant="navbar" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-theme-text hover:bg-theme-card transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-theme-card/95 backdrop-blur-xl border-b border-theme-border overflow-hidden text-theme-text"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(link.target, e)}
                  className="w-full text-left px-3 py-2 text-base font-medium text-theme-text hover:text-theme-accent hover:bg-theme-bg rounded-lg transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={(e) => handleNavClick('contacto', e)}
                  className="btn-cta w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold shadow-md transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contáctanos</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
