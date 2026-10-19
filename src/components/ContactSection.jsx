import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-site-theme text-theme-text relative overflow-hidden transition-colors duration-300 border-t border-theme-borderSubtle">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-theme-soft rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-theme-borderSubtle rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge Superior */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full bg-accent-theme-soft text-accent-theme border border-theme-border mb-4">
            <Zap className="w-4 h-4 text-accent-theme" />
            <span>Contacto Inmediato</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
            ¿Listo para empezar? <br />
            <span className="text-theme-accent">
              Estamos a un mensaje de distancia
            </span>
          </h2>

          <p className="text-theme-muted text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Sin formularios largos ni esperas. Contáctanos de inmediato por tu canal preferido y te responderemos con una propuesta clara, rápida y sin compromiso.
          </p>
        </motion.div>

        {/* Canales de Contacto Directo */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Tarjeta WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-site-theme rounded-3xl p-8 flex flex-col justify-between text-left shadow-xl hover:border-accent-theme transition-all duration-300"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-theme-accent/15 text-theme-accent flex items-center justify-center font-bold mb-6">
                <MessageSquare className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-theme-accent">
                Canal Preferido
              </span>
              <h3 className="text-2xl font-bold text-theme-text mt-1 mb-2">
                WhatsApp Directo
              </h3>
              <p className="text-sm text-theme-muted mb-6 leading-relaxed">
                Escríbenos directamente para resolver cualquier duda, ver ejemplos o pedir tu paquete web en minutos.
              </p>
            </div>

            <a
              href="https://wa.me/523343351186?text=Hola,%20quisiera%20recibir%20información%20sobre%20sus%20paquetes%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta w-full py-4 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Chatear por WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Tarjeta Llamada Telefónica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-site-theme rounded-3xl p-8 flex flex-col justify-between text-left shadow-xl hover:border-accent-theme transition-all duration-300"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-theme-soft text-accent-theme flex items-center justify-center font-bold mb-6">
                <Phone className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-theme-muted">
                Atención Telefónica
              </span>
              <h3 className="text-2xl font-bold text-theme-text mt-1 mb-2">
                Línea Directa
              </h3>
              <p className="text-sm text-theme-muted mb-6 leading-relaxed">
                Llámanos para platicar de tu proyecto con un asesor especializado y recibir atención personalizada.
              </p>
            </div>

            <a
              href="tel:+523343351186"
              className="btn-secondary w-full py-4 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Phone className="w-5 h-5 text-accent-theme" />
              <span>+52 (33) 4335-1186</span>
            </a>
          </motion.div>
        </div>

        {/* Garantías de Servicio Directo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-theme-muted"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-theme" />
            <span>Respuesta en menos de 15 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-theme" />
            <span>Presupuesto claro y sin compromiso</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
