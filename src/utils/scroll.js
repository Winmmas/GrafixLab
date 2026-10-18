/**
 * Desplaza la página de forma suave hacia la sección indicada
 * sin agregar hashtags (#) a la barra de direcciones (URL).
 */
export const scrollToSection = (sectionId, e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  
  const element = document.getElementById(sectionId);
  if (element) {
    // Compensación por el alto de la barra de navegación fija (navbar)
    const navOffset = 75;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
