import React from 'react';
import './GlassBackground.css';

/**
 * GlassBackground v3
 * Fondo gris claro + grilla técnica + plano de ingeniería.
 * Capas superiores (hero) y capas inferiores (proyectos → contacto),
 * para que la parte final de la página no quede plana.
 */
const GlassBackground = ({ children }) => {
  return (
    <div className="gbg__root">
      {/* Halos ambientales */}
      <div className="gbg__glow gbg__glow--top"    aria-hidden="true" />
      <div className="gbg__glow gbg__glow--mid"    aria-hidden="true" />
      <div className="gbg__glow gbg__glow--bottom" aria-hidden="true" />

      {/* Decoración del tramo final de la página */}
      <div className="gbg__deco gbg__deco--grid"      aria-hidden="true" />
      <div className="gbg__deco gbg__deco--blueprint" aria-hidden="true" />

      {/* Contenido */}
      <div className="gbg__content">
        {children}
      </div>
    </div>
  );
};

export default GlassBackground;
