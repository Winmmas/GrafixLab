import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip de ayuda */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="hidden sm:flex items-center gap-2 bg-theme-card text-theme-text text-xs font-semibold py-2 px-3.5 rounded-full shadow-xl border border-theme-borderSubtle"
          >
            <span>¿Tienes dudas? ¡Escríbenos ahora!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-theme-muted hover:text-theme-text transition-colors cursor-pointer"
              aria-label="Cerrar mensaje"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante pulsante hacia 3343351186 */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/523343351186?text=Hola,%20quisiera%20recibir%20más%20información"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="btn-cta relative group w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors"
      >
        {/* Anillo de pulso animado */}
        <span className="absolute -inset-1 rounded-full bg-theme-accent/40 animate-ping -z-10" />
        
        <MessageCircle className="w-7 h-7 fill-white" />
      </motion.a>
    </div>
  );
}
