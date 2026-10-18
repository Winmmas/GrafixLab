import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, X, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher({ variant = 'floating' }) {
  const { theme, setTheme, THEMES } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeList = Object.values(THEMES);

  // Variante Navbar (Compacta / Dropdown)
  if (variant === 'navbar') {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-theme-card/80 border-theme-border/60 hover:border-theme-accent text-theme-text shadow-sm"
          title="Cambiar paleta de colores"
          aria-label="Cambiar estilo y paleta de colores"
        >
          <Palette className="w-3.5 h-3.5 text-theme-accent" />
          <span className="hidden lg:inline">{THEMES[theme]?.name}</span>
          <div className="flex items-center -space-x-1">
            {THEMES[theme]?.swatches.map((color, idx) => (
              <span
                key={idx}
                className="w-2.5 h-2.5 rounded-full border border-black/20"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-72 p-3 rounded-2xl shadow-2xl z-50 bg-theme-card border border-theme-border text-theme-text"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-theme-borderSubtle">
                <span className="text-[11px] font-bold uppercase tracking-wider text-theme-muted flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-theme-accent" />
                  <span>Modo de Diseño</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-theme-muted hover:text-theme-text p-1 rounded-lg"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                {themeList.map((t) => {
                  const isSelected = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer border ${
                        isSelected
                          ? 'border-theme-accent bg-theme-accent/10 shadow-sm'
                          : 'border-transparent hover:bg-theme-cardHover'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-theme-text">{t.name}</span>
                          {t.recommended && (
                            <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-theme-accent/20 text-theme-accent border border-theme-accent/30">
                              Top
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-theme-muted leading-tight">{t.subtitle}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center -space-x-1">
                          {t.swatches.map((color, i) => (
                            <span
                              key={i}
                              className="w-3 h-3 rounded-full border border-black/30 shadow-xs"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-theme-accent" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Variante Flotante (Botón en esquina inferior izquierda)
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 p-4 rounded-3xl shadow-2xl backdrop-blur-xl bg-theme-card/95 border border-theme-border text-theme-text"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-theme-borderSubtle">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-theme-accent/15 text-theme-accent flex items-center justify-center font-bold">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-theme-text leading-tight">
                    Elige el Estilo Visual
                  </h4>
                  <p className="text-[11px] text-theme-muted">3 paletas de alto impacto</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-theme-muted hover:text-theme-text p-1.5 rounded-lg transition-colors cursor-pointer"
                aria-label="Cerrar selector"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              {themeList.map((t) => {
                const isSelected = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                    }}
                    className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'border-theme-accent bg-theme-accent/15 ring-2 ring-theme-accent/20 shadow-md'
                        : 'border-theme-borderSubtle hover:border-theme-border hover:bg-theme-cardHover/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-extrabold text-theme-text">{t.name}</span>
                        {t.recommended && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Recomendado
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center -space-x-1.5">
                          {t.swatches.map((color, i) => (
                            <span
                              key={i}
                              className="w-3.5 h-3.5 rounded-full border border-black/30 shadow-xs"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-theme-accent shrink-0 ml-1" />}
                      </div>
                    </div>
                    <p className="text-[11px] text-theme-muted leading-snug">{t.description}</p>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante para abrir el panel */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full font-bold text-xs shadow-xl backdrop-blur-md border transition-all cursor-pointer bg-theme-card/90 border-theme-border hover:border-theme-accent text-theme-text"
        aria-label="Abrir selector de temas"
      >
        <Palette className="w-4 h-4 text-theme-accent" />
        <span className="hidden sm:inline">Paleta: {THEMES[theme]?.name}</span>
        <div className="flex items-center -space-x-1">
          {THEMES[theme]?.swatches.map((color, idx) => (
            <span
              key={idx}
              className="w-2.5 h-2.5 rounded-full border border-black/30"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </motion.button>
    </div>
  );
}
