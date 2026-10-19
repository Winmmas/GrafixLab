import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, MessageCircle, Smartphone, Sparkles, Wrench, Zap } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-theme-bg text-theme-text transition-colors duration-300">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-theme-accent/15 rounded-full blur-3xl pointer-events-none transition-colors duration-500" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-theme-card/25 rounded-full blur-3xl pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje & CTAs */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(76px,30%)] sm:grid-cols-[minmax(0,1fr)_minmax(120px,30%)] lg:block gap-3 items-start mb-6">
              <h1 className="text-left text-3xl sm:text-5xl lg:text-6xl font-black text-theme-text tracking-tight leading-[1.15]">
                Páginas web tan rápidas como tu servicio:{' '}
                <span className="text-theme-accent">
                  convierte búsquedas locales en pedidos directo a tu WhatsApp.
                </span>
              </h1>
              <img
                src={`${import.meta.env.BASE_URL}GrafixLab.svg`}
                alt="Logotipo de GrafixLab"
                className="w-full h-auto object-contain lg:hidden"
              />
            </div>

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

          {/* Logo principal */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 relative justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}GrafixLab.svg`}
              alt="Logotipo de GrafixLab"
              className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_0_45px_rgba(98,101,254,0.2)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
