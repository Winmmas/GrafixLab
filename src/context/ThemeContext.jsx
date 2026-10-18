import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  'cyber-tech': {
    id: 'cyber-tech',
    name: 'Cyber Tech',
    subtitle: 'Negro Carbón + Azul Neón + Verde Lima',
    tag: 'Recomendado',
    recommended: true,
    isDark: true,
    // Palette colors for preview swatches
    swatches: ['#0B0F17', '#00D2FF', '#10B981'],
    accentHex: '#00D2FF',
    ctaHex: '#10B981',
    bgHex: '#0B0F17',
    description: 'Estilo futurista de alto contraste con negro profundo, detalles azul neón y botones verde lima de máximo impacto en celular.',
  },
  'energia-pura': {
    id: 'energia-pura',
    name: 'Energía Pura',
    subtitle: 'Blanco / Clean + Naranja Fuego + Azul Cian',
    tag: 'Dinamismo',
    recommended: false,
    isDark: false,
    swatches: ['#F8FAFC', '#0284C7', '#F97316'],
    accentHex: '#0284C7',
    ctaHex: '#F97316',
    bgHex: '#F8FAFC',
    description: 'Sensación de rapidez y dinamismo comercial con fondo claro, estructura azul cian y llamadas a la acción naranja fuego.',
  },
  'digital-premium': {
    id: 'digital-premium',
    name: 'Digital Premium',
    subtitle: 'Gris Noche + Morado Eléctrico + Magenta Neón',
    tag: 'Exclusivo',
    recommended: false,
    isDark: true,
    swatches: ['#0A0E1A', '#A855F7', '#EC4899'],
    accentHex: '#A855F7',
    ctaHex: '#EC4899',
    bgHex: '#0A0E1A',
    description: 'Estética avanzada y elegante para agencias y startups de alto nivel, con morado eléctrico y botones magenta neón.',
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('site_theme');
      if (saved && THEMES[saved]) return saved;
    } catch (e) {
      // ignore localStorage errors
    }
    // Default is Cyber Tech (La más recomendada)
    return 'cyber-tech';
  });

  useEffect(() => {
    try {
      localStorage.setItem('site_theme', theme);
    } catch (e) {
      // ignore
    }
    // Set attribute on document element and body for global CSS variables
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const currentTheme = THEMES[theme] || THEMES['cyber-tech'];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
