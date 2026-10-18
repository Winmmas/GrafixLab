import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, HeartHandshake, Sparkles, Check } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { currentTheme } = useTheme();

  const pillars = [
    {
      icon: Clock,
      title: 'Puntualidad Absoluta',
      desc: 'Entendemos el valor de tu tiempo; entregamos resultados en los plazos fijados.',
    },
    {
      icon: Award,
      title: 'Calidad Comprobada',
      desc: 'Aplicamos los más altos estándares y metodologías probadas en cada proyecto.',
    },
    {
      icon: HeartHandshake,
      title: 'Trato Transparente',
      desc: 'Relaciones a largo plazo construidas sobre la honestidad y la comunicación constante.',
    },
    {
      icon: Sparkles,
      title: 'Soluciones a Medida',
      desc: 'No creemos en fórmulas genéricas. Personalizamos cada solución a tus objetivos.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-site-subtle border-y border-theme-borderSubtle text-theme-text transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-theme-accent text-xs sm:text-sm font-bold tracking-wider uppercase bg-theme-accent/10 border border-theme-accent/20 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
              Nuestra Esencia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-text mt-4 mb-4">
              Quiénes Somos
            </h2>
            <p className="text-theme-muted text-base sm:text-lg leading-relaxed">
              Somos un equipo apasionado por resolver desafíos comerciales y diseñar páginas web de alto impacto, rápidas y rentables para nuestros clientes.
            </p>
          </motion.div>
        </div>

        {/* Contenido en 2 columnas */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Historia y Compromiso */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-theme-text leading-snug">
              Transformamos retos digitales en soluciones sencillas, directas y eficaces
            </h3>
            
            <p className="text-theme-muted leading-relaxed">
              Nuestra misión es ofrecerte sitios de primer nivel eliminando complicaciones técnicas y costos ocultos. Creemos firmemente que una presencia digital atractiva con pedidos directos marca la verdadera diferencia en tus ventas.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Atención directa y asesoría especializada desde el primer día.',
                'Presupuestos transparentes sin cargos ocultos.',
                'Soporte post-entrega y garantía de satisfacción en cada etapa.',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-theme-accent/15 text-theme-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-theme-text font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={(e) => scrollToSection('contacto', e)}
                className="inline-flex items-center gap-2 text-theme-accent font-bold hover:underline transition-all group cursor-pointer"
              >
                <span>Conoce cómo podemos ayudarte</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>

          {/* Columna Derecha: 4 Pilares en Tarjetas */}
          <motion.div 
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  whileHover={{ y: -4 }}
                  className="bg-theme-card p-6 rounded-2xl border border-theme-borderSubtle hover:border-theme-border shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-theme-accent/15 text-theme-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-theme-text mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-theme-muted text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
