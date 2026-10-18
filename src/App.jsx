import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-site-theme text-theme-text font-sans selection:bg-theme-accent selection:text-slate-950 relative transition-colors duration-300">
        {/* Barra de Navegación Fija con selector integrado */}
        <Navbar />

        {/* Contenido Principal Vertical */}
        <main>
          {/* 1. Hero / Inicio */}
          <Hero />

          {/* 2. Quiénes Somos */}
          <About />

          {/* 3. Paquetes Web */}
          <Services />

          {/* 4. Contacto Directo */}
          <ContactSection />
        </main>

        {/* Pie de Página */}
        <Footer />

        {/* Botón Flotante de Contacto / WhatsApp (Abajo a la derecha) */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
