import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Gift, MessageCircle, ShieldCheck, Smartphone, Sparkles, Wrench, Zap } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  // Gradientes específicos por cada modo
  const titleGradients = {
    'cyber-tech': 'from-cyan-400 via-sky-300 to-emerald-400',
    'energia-pura': 'from-sky-600 via-blue-600 to-orange-500',
    'digital-premium': 'from-violet-400 via-purple-300 to-pink-400',
  };

  const glowColors = {
    'cyber-tech': {
      glow1: 'bg-cyan-500/15',
      glow2: 'bg-emerald-500/15',
    },
    'energia-pura': {
      glow1: 'bg-sky-500/15',
      glow2: 'bg-orange-500/15',
    },
    'digital-premium': {
      glow1: 'bg-purple-500/15',
      glow2: 'bg-pink-500/15',
    },
  };

  const activeGradient = titleGradients[theme] || titleGradients['cyber-tech'];
  const activeGlows = glowColors[theme] || glowColors['cyber-tech'];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-theme-bg text-theme-text transition-colors duration-300">
      {/* Luces de ambiente dinámicas según la paleta activa */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] ${activeGlows.glow1} rounded-full blur-3xl pointer-events-none transition-colors duration-500`} />
      <div className={`absolute top-1/3 -right-20 w-[450px] h-[450px] ${activeGlows.glow2} rounded-full blur-3xl pointer-events-none transition-colors duration-500`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje & CTAs */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-card border border-theme-border text-theme-accent text-xs sm:text-sm font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span>Calidad Garantizada & Atención Inmediata</span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-theme-text tracking-tight leading-[1.15] mb-6">
              Páginas web tan rápidas como tu servicio:{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeGradient}`}>
                convierte búsquedas locales en pedidos directo a tu WhatsApp.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-theme-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Creamos sitios web modernos y ligeros que eliminan complicaciones técnicas, muestran tus productos o menú al instante y multiplican tus ventas sin cobros sorpresa.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => scrollToSection('servicios', e)}
                className="btn-cta w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold cursor-pointer"
              >
                <span>Ver Paquetes y Precios</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/523343351186?text=Hola%2C%20quisiera%20cotizar%20una%20p%C3%A1gina%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Cotizar por WhatsApp</span>
              </motion.a>
            </div>

            {/* Beneficios rápidos */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-6 border-t border-theme-borderSubtle sm:grid-cols-4">
              <div className="flex items-center gap-2 text-left">
                <Zap className="w-5 h-5 text-theme-accent shrink-0" />
                <span className="text-xs sm:text-sm text-theme-muted font-medium">Listo en tiempo récord</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Gift className="w-5 h-5 text-theme-accent shrink-0" />
                <span className="text-xs sm:text-sm text-theme-muted font-medium">Dominio gratis por 1 año</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Wrench className="w-5 h-5 text-theme-accent shrink-0" />
                <span className="text-xs sm:text-sm text-theme-muted font-medium">1er mes de mantenimiento incluido</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Smartphone className="w-5 h-5 text-theme-accent shrink-0" />
                <span className="text-xs sm:text-sm text-theme-muted font-medium">Optimizado para cualquier dispositivo</span>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjeta Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Tarjeta principal adaptada a la paleta */}
              <div className="bg-theme-card rounded-3xl p-7 sm:p-8 shadow-2xl border border-theme-border relative z-10 transition-colors duration-300">
                <div className="flex items-center justify-between pb-6 border-b border-theme-borderSubtle">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-theme-accent/15 text-theme-accent flex items-center justify-center font-bold">
                      <ShieldCheck className="w-6 h-6 text-theme-accent" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-theme-text leading-tight">Servicio Garantizado</h2>
                      <p className="text-xs text-theme-muted">Respaldo profesional 100%</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Activo
                  </span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-theme-muted">
                      <strong className="text-theme-text">Respuesta ágil:</strong> Atendemos tus consultas en tiempo récord.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-theme-muted">
                      <strong className="text-theme-text">Presupuesto claro:</strong> Sin cobros sorpresa ni letra pequeña.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-theme-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-theme-muted">
                      <strong className="text-theme-text">Solución integral:</strong> Te acompañamos en todo el proceso.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-theme-borderSubtle">
                  <button
                    onClick={(e) => scrollToSection('contacto', e)}
                    className="block w-full py-3.5 px-4 text-center text-sm font-bold text-theme-accent bg-theme-accent/10 hover:bg-theme-accent/20 border border-theme-accent/20 rounded-xl transition-all cursor-pointer"
                  >
                    Hablar con un asesor hoy mismo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
