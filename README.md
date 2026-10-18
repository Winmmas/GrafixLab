# Plantilla Landing Page (React + Vite + Tailwind CSS + Framer Motion)

Una plantilla de landing page vertical de **una sola página**, moderna y ultra rápida, construida con **React**, **Vite**, **Tailwind CSS**, **Framer Motion** y **Lucide Icons**.

---

## 🚀 Características

- **Una sola página vertical (Single Page)**: Estructura vertical fluida con desplazamiento suave (*smooth scrolling*).
- **Quiénes Somos**: Sección con historia, pilares de valor e impacto visual.
- **Servicios**: Tarjetas interactivas con estados destacados (*badge* de más popular) y enlace directo al formulario.
- **Mapa de Ubicación**: Mapa interactivo embebido (OpenStreetMap / Google Maps) optimizado con carga diferida (*lazy loading*), datos de contacto y botón directo.
- **Botón de Contacto y Formulario**: Formulario con validación en tiempo real, estados de carga y confirmación animada, además de accesos directos por llamada y WhatsApp.
- **Botón Flotante de WhatsApp**: Botón persistente con animación de pulso y mensaje emergente (*tooltip*).
- **Animaciones fluidas**: Desarrollado con **Framer Motion** para transiciones suaves al hacer scroll y al interactuar.
- **Diseño 100% Responsivo**: Adaptado para móviles, tablets y monitores de escritorio.

---

## 📁 Estructura del Proyecto

```text
Plantilla/
├── index.html                   # HTML base con configuración de viewport y fuentes
├── package.json                 # Dependencias y scripts del proyecto
├── vite.config.js               # Configuración del empaquetador Vite
├── tailwind.config.js           # Paleta de colores, fuentes y keyframes
├── postcss.config.js            # Configuración de PostCSS para Tailwind
├── src/
│   ├── main.jsx                 # Punto de entrada de React
│   ├── index.css                # Directivas de Tailwind CSS y scrollbar
│   ├── App.jsx                  # Componente principal que orquesta las secciones
│   └── components/
│       ├── Navbar.jsx           # Menú fijo con efecto blur y menú hamburguesa
│       ├── Hero.jsx             # Encabezado principal, estadísticas y CTAs
│       ├── About.jsx            # Sección "Quiénes Somos" con tarjetas de valor
│       ├── Services.jsx         # Sección "Servicios" con tarjetas interactivas
│       ├── MapSection.jsx       # Mapa interactivo y datos de ubicación
│       ├── ContactSection.jsx   # Formulario y accesos directos a contacto
│       ├── FloatingWhatsApp.jsx # Botón flotante animado de WhatsApp
│       └── Footer.jsx           # Pie de página y botón de regreso arriba
```

---

## 🛠️ Comandos de Ejecución

En tu terminal o PowerShell dentro de esta carpeta:

### Iniciar servidor de desarrollo (con recarga instantánea)
```bash
npm run dev
```
> Se abrirá automáticamente en tu navegador en `http://localhost:3000`.

### Generar versión de producción optimizada
```bash
npm run build
```

### Previsualizar la versión de producción
```bash
npm run preview
```

---

## ⚙️ Guía Rápida de Personalización

1. **Navegación Sin Hashes (# en URL)**:
   - Los botones usan la función [`scrollToSection`](file:///c:/Users/angel/OneDrive/Documents/Webs/Plantilla/src/utils/scroll.js) que calcula el desplazamiento suave considerando la barra fija sin modificar la barra de direcciones.
2. **Número de Teléfono / WhatsApp**:
   - Se configuró el número **`3343351186`** (`+52 33 4335 1186` / `wa.me/523343351186`) en [`FloatingWhatsApp.jsx`](file:///c:/Users/angel/OneDrive/Documents/Webs/Plantilla/src/components/FloatingWhatsApp.jsx), [`ContactSection.jsx`](file:///c:/Users/angel/OneDrive/Documents/Webs/Plantilla/src/components/ContactSection.jsx) y [`MapSection.jsx`](file:///c:/Users/angel/OneDrive/Documents/Webs/Plantilla/src/components/MapSection.jsx).
3. **Ubicación y Mapa**:
   - En [`MapSection.jsx`](file:///c:/Users/angel/OneDrive/Documents/Webs/Plantilla/src/components/MapSection.jsx), ajusta la dirección y la URL del `iframe` para centrarlo en las coordenadas de tu negocio.
4. **Servicios**:
   - En [`Services.jsx`](file:///c:/Users/angel/OneDrive/Documents/Webs/Plantilla/src/components/Services.jsx), puedes añadir, eliminar o modificar los servicios dentro del arreglo `services`.
