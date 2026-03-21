import React from 'react';
import './GlassBackground.css';

/**
 * GlassBackground v2
 * Dark teal background with animated radial glows.
 * Dot grid is handled in body CSS (index.css).
 *
 * Usage — wrap everything in App.js:
 *   <GlassBackground>
 *     <Navbar/>  <Header/>  ...
 *   </GlassBackground>
 */
const GlassBackground = ({ children }) => {
  return (
    <div className="gbg__root">
      {/* Ambient glow blobs */}
      <div className="gbg__glow gbg__glow--top"    aria-hidden="true" />
      <div className="gbg__glow gbg__glow--mid"    aria-hidden="true" />
      <div className="gbg__glow gbg__glow--bottom" aria-hidden="true" />

      {/* Content */}
      <div className="gbg__content">
        {children}
      </div>
    </div>
  );
};

export default GlassBackground;