import React from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Inicio', target: 'hero' },
    { name: 'Quiénes Somos', target: 'nosotros' },
    { name: 'Paquetes', target: 'servicios' },
    { name: 'Contacto', target: 'contacto' },
  ];

  return (
    <footer className="bg-theme-bg text-theme-muted py-12 border-t border-theme-borderSubtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-theme-borderSubtle">
          
          {/* Logo y descripción */}
          <button 
            onClick={(e) => scrollToSection('hero', e)}
            className="flex items-center gap-2.5 text-left cursor-pointer"
            aria-label="GrafixLab, ir al inicio"
          >
            <img
              src={`${import.meta.env.BASE_URL}GrafixLab.svg`}
              alt="GrafixLab"
              className="h-12 w-auto max-w-[150px] object-contain"
            />
          </button>

          {/* Enlaces rápidos sin hash en URL */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(link.target, e)}
                className="hover:text-theme-accent transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Botón Volver Arriba */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-theme-card border border-theme-borderSubtle text-theme-muted hover:text-theme-text hover:border-theme-accent transition-colors flex items-center gap-2 text-xs font-semibold cursor-pointer"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-4 h-4 text-theme-accent" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-theme-muted">
          <p>© {new Date().getFullYear()} GrafixLabs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
