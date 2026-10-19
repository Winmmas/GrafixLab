import React, { createContext, useContext, useEffect } from 'react';

export const THEMES = {
  grafixlabs: {
    id: 'grafixlabs',
    name: 'GrafixLabs',
    subtitle: 'Azul índigo + violeta profundo',
    tag: 'Paleta oficial',
    recommended: true,
    isDark: true,
    swatches: ['#070C19', '#6265FE', '#44438E', '#B6BBFF'],
    accentHex: '#6265FE',
    ctaHex: '#6265FE',
    bgHex: '#070C19',
    description: 'Fondo oscuro, acentos índigo y tarjetas violeta para una identidad digital coherente.',
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const theme = 'grafixlabs';
  const currentTheme = THEMES[theme];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, THEMES }}>
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
