import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Crown, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Smartphone, 
  MessageCircle, 
  Store, 
  UtensilsCrossed, 
  ShoppingBag, 
  Mail, 
  CheckCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Services({ onSelectService }) {
  const packages = [
    {
      id: 'paquete-1',
      number: 'Paquete 1',
      title: 'Página de Presentación',
      price: '$5,000',
      currency: 'MXN',
      period: 'pago único',
      subtitle: 'Una página de internet rápida y moderna para el celular.',
      icon: Smartphone,
      recommended: false,
      badgeText: null,
      features: [
        {
          text: 'Sección con la información de tu negocio, lo que vendes y tus servicios.',
          icon: Store,
        },
        {
          text: 'Botón directo para que te marquen o manden WhatsApp.',
          icon: MessageCircle,
        },
      ],
      whatsappMsg: 'Hola, me interesa el Paquete 1: Página de Presentación ($5,000 MXN). ¿Podrían darme más detalles?',
    },
    {
      id: 'paquete-2',
      number: 'Paquete 2',
      title: 'Menú y Pedidos',
      price: '$7,500',
      currency: 'MXN',
      period: 'pago único',
      subtitle: 'Una página de internet con tu menú completo y sistema de pedidos directos.',
      icon: Rocket,
      recommended: true,
      badgeText: 'El más recomendado',
      features: [
        {
          text: 'Todo lo del paquete anterior.',
          icon: CheckCheck,
          highlight: true,
        },
        {
          text: 'Menú digital interactivo con fotos reales de tus platillos.',
          icon: UtensilsCrossed,
        },
        {
          text: 'Botón de pedidos inteligente que le manda la orden directa a tu WhatsApp.',
          icon: ShoppingBag,
        },
      ],
      whatsappMsg: 'Hola, me interesa el Paquete 2: Menú y Pedidos ($7,500 MXN). ¿Podrían darme más detalles?',
    },
    {
      id: 'paquete-3',
      number: 'Paquete 3',
      title: 'Agencia Total',
      price: '$12,000',
      currency: 'MXN',
      period: 'pago único',
      subtitle: 'Tu negocio completamente optimizado en internet y listo para delegar.',
      icon: Crown,
      recommended: false,
      badgeText: 'Solución Completa',
      features: [
        {
          text: 'Todo lo del paquete de Menú y Pedidos.',
          icon: CheckCheck,
          highlight: true,
        },
        {
          text: 'Correo electrónico de la empresa configurado.',
          icon: Mail,
        },
      ],
      whatsappMsg: 'Hola, me interesa el Paquete 3: Agencia Total ($12,000 MXN). ¿Podrían darme más detalles?',
    },
  ];

  const handleSelect = (pkgId, e) => {
    if (e && e.preventDefault) e.preventDefault();
    const pkg = packages.find((p) => p.id === pkgId);
    if (pkg) {
      window.open(
        `https://wa.me/523343351186?text=${encodeURIComponent(pkg.whatsappMsg)}`,
        '_blank'
      );
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-theme-bg text-theme-text relative overflow-hidden transition-colors duration-300">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-theme-accent/10 rounded-full blur-3xl pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-1.5 text-theme-accent text-xs sm:text-sm font-bold tracking-wider uppercase bg-theme-accent/10 border border-theme-accent/20 px-4 py-1.5 rounded-full shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-theme-accent" />
              <span>Planes & Soluciones Web</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-theme-text tracking-tight mt-2 mb-4 leading-tight">
              Paquetes diseñados para{' '}
              <span className="text-theme-accent">
                hacer crecer tus ventas
              </span>
            </h2>

            <p className="text-theme-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Elige el paquete perfecto para tu negocio. Sitios modernos, optimizados para celulares y preparados para recibir pedidos y clientes desde el primer día.
            </p>
          </motion.div>
        </div>

        {/* Rejilla de Paquetes en 3 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const isFeatured = pkg.recommended;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-theme-card border-2 border-theme-accent shadow-2xl shadow-theme-accent/15 lg:-translate-y-2 ring-1 ring-theme-accent/30'
                    : 'bg-theme-card border border-theme-borderSubtle shadow-lg hover:shadow-2xl hover:border-theme-border'
                }`}
              >
                {/* Glow decorativo de fondo en hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 ${
                  isFeatured
                    ? 'bg-theme-accent/10 blur-xl'
                    : 'bg-theme-borderSubtle blur-xl'
                }`} />

                {/* Badge Superior */}
                {isFeatured ? (
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-theme-accent text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded-full shadow-lg shadow-theme-accent/30 flex items-center gap-1.5 border border-theme-accent tracking-wide uppercase"
                  >
                    <Star className="w-3.5 h-3.5 fill-theme-accent text-theme-accent" />
                    <span>El más recomendado</span>
                  </motion.div>
                ) : pkg.badgeText ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-theme-card border border-theme-border text-theme-text text-xs font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <span>{pkg.badgeText}</span>
                  </div>
                ) : null}

                {/* Contenido Principal */}
                <div>
                  {/* Encabezado de la Tarjeta */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isFeatured
                          ? 'bg-theme-accent text-theme-text font-bold shadow-lg shadow-theme-accent/30'
                          : 'bg-theme-accent/15 text-theme-accent'
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-theme-muted">
                          {pkg.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-theme-text tracking-tight leading-tight">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-theme-bg border border-theme-borderSubtle text-theme-muted">
                      {pkg.number}
                    </span>
                  </div>

                  {/* Precio */}
                  <div className="py-4 my-2 border-y border-theme-borderSubtle">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-theme-text tracking-tight">
                        {pkg.price}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-theme-muted uppercase tracking-wider">
                          {pkg.currency}
                        </span>
                        <span className="text-[11px] font-medium text-theme-muted">
                          {pkg.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-theme-muted text-sm mt-3 leading-relaxed">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Qué incluye */}
                  <div className="pt-4 pb-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-theme-muted mb-4 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-theme-accent" />
                      <span>Qué incluye:</span>
                    </p>

                    <ul className="space-y-3.5">
                      {pkg.features.map((feat, i) => {
                        const FeatIcon = feat.icon;
                        return (
                          <motion.li 
                            key={i} 
                            whileHover={{ x: 3 }}
                            className="flex items-start gap-3 text-sm group/item"
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              feat.highlight
                                ? 'bg-theme-accent/20 text-theme-accent font-bold'
                                : 'bg-theme-bg text-theme-accent group-hover/item:bg-theme-accent/15'
                            }`}>
                              <FeatIcon className="w-4 h-4" />
                            </div>
                            <span className={`leading-snug ${feat.highlight ? 'font-bold text-theme-text' : 'text-theme-muted'}`}>
                              {feat.text}
                            </span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>

                </div>

                {/* Botones de Acción */}
                <div className="mt-8 space-y-3 pt-4 border-t border-theme-borderSubtle">
                  {/* Botón Principal (Solicitar / Preseleccionar) */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => handleSelect(pkg.id, e)}
                    className="btn-cta w-full py-3.5 px-5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Seleccionar {pkg.number}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>

                  {/* Botón WhatsApp directo */}
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/523343351186?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 text-theme-accent bg-theme-accent/10 hover:bg-theme-accent/20 border border-theme-accent/30 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-theme-accent fill-theme-accent/20" />
                    <span>Pedir directo por WhatsApp</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Garantías de Confianza al pie de los paquetes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-theme-card border border-theme-borderSubtle shadow-sm text-center md:text-left transition-colors duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-theme-accent/15 text-theme-accent flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-theme-text">Sin mensualidades forzosas</p>
              <p className="text-xs text-theme-muted">Un solo pago transparente por tu sitio.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-theme-cta/15 text-theme-cta flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-theme-text">Entrega rápida</p>
              <p className="text-xs text-theme-muted">Tu web lista y funcionando en tiempo récord.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-theme-accent/15 text-theme-accent flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-theme-text">Soporte personalizado</p>
              <p className="text-xs text-theme-muted">Atención directa vía WhatsApp y llamada.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
