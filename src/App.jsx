import React, { useState, useEffect } from 'react';

export default function CartaAntigua() {
  const [stage, setStage] = useState(0);

  // Pon tu enlace de la foto aquí para que sirva tanto para verla como para descargarla
  const ENLACE_IMAGEN = "https://i.postimg.cc/Y2nngB6h/1.jpg";

  // --- Cambiar título y favicon (icono de la pestaña) ---
  useEffect(() => {
    document.title = "Invitación Boda Gemma y Miguel 2027";
    
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    // Icono de corazón rojo estilo WhatsApp
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">❤️</text></svg>';
  }, []);

  useEffect(() => {
    if (stage === 1) {
      const timer = setTimeout(() => setStage(2), 800);
      return () => clearTimeout(timer);
    } else if (stage === 2) {
      const timer = setTimeout(() => setStage(3), 150);
      return () => clearTimeout(timer);
    } else if (stage === 3) {
      const timer = setTimeout(() => setStage(4), 1200);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

    .font-script { font-family: 'Great Vibes', cursive; }
    .font-serif-classic { font-family: 'Playfair Display', serif; }

    /* Textura de papel FIJADA a Rojo Granate */
    .theme-paper {
      background-color: #2c0e12; 
      background-image: 
        radial-gradient(circle at top right, rgba(110, 30, 40, 0.5) 0%, rgba(30, 10, 15, 0.95) 100%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
    }

    /* Interior base del sobre (Blanco Pergamino profundo) */
    .envelope-inside {
      background-color: #fdfbf7;
      background-image: 
        radial-gradient(circle at center, transparent 0%, #d8cdb8 150%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
      box-shadow: inset 0 15px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.2);
    }

    /* Solapas interiores base (Blanco Pergamino iluminado) */
    .flap-inside {
      background-color: #fdfbf7;
      background-image: 
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
    }

    /* --- SELLO DE CERA FIJADO A ORO CLÁSICO --- */
    .custom-seal {
      width: 90px; 
      height: 90px;
      background: radial-gradient(circle at 35% 35%, #fdf0c0 0%, #d4af37 25%, #9a7312 60%, #4a3505 100%);
      border-radius: 43% 57% 41% 59% / 55% 45% 58% 42%;
      box-shadow: 
        4px 6px 12px rgba(0,0,0,0.7),
        inset 2px 2px 5px rgba(255,255,255,0.6),
        inset -3px -4px 8px rgba(0,0,0,0.6);
      position: relative;
    }

    @media (min-width: 768px) {
      .custom-seal { width: 110px; height: 110px; }
    }

    .custom-seal-inner {
      position: absolute;
      top: 14%; left: 14%; right: 14%; bottom: 14%;
      border-radius: 48% 52% 51% 49% / 50% 48% 52% 50%;
      background: radial-gradient(circle at 45% 45%, #b99326 0%, #7d5805 100%);
      box-shadow: 
        inset 2px 3px 6px rgba(0,0,0,0.8),
        inset -1px -1px 3px rgba(255,255,255,0.2),
        1px 1px 2px rgba(255,255,255,0.6),
        -1px -1px 2px rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .stamped-text {
      color: #5e4204;
      text-shadow: 
        -1px -1px 1px rgba(0,0,0,0.8), 
        1px 1px 1px rgba(255,255,255,0.25); 
      font-size: 1.1rem; 
      line-height: 1;
      margin-top: 2px;
      letter-spacing: -1px;
    }

    @media (min-width: 768px) {
      .stamped-text { font-size: 1.4rem; }
    }
  `;

  return (
    <div 
      className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center overflow-hidden font-serif-classic selection:bg-amber-900 selection:text-amber-100"
      style={{ perspective: '1200px' }}
    >
      <style>{customStyles}</style>

      {/* Luz focal en el fondo para destacar los elementos */}
      <div className="absolute w-[150vw] h-[150vw] md:w-[800px] md:h-[800px] bg-stone-700/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* LA IMAGEN REVELADA */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-10 ${
          stage === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ visibility: stage === 4 ? 'visible' : 'hidden' }}
      >
        <img 
          src={ENLACE_IMAGEN}
          alt="Invitación Gemma y Miguel" 
          className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        />
        
        {/* BOTÓN DE DESCARGA (Aparece un segundo después de revelar la imagen) */}
        <a 
          href={ENLACE_IMAGEN}
          download="Invitacion-Boda-Gemma-y-Miguel.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white/90 font-serif-classic text-xs sm:text-sm tracking-widest uppercase transition-all duration-1000 delay-1000 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 ${
            stage === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Icono de descarga en SVG (no requiere librerías) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" x2="12" y1="15" y2="3"/>
          </svg>
          Guardar Invitación
        </a>
      </div>

      {/* CONTENEDOR EXTERNO DE ANIMACIÓN (Maneja la caída final del sobre) */}
      <div
        className="relative z-50 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.5,0,0.2,1)]"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: stage === 4 ? 'translateY(120vh) rotate(-5deg)' : 'translateY(0) rotate(0deg)',
          opacity: stage === 4 ? 0 : 1,
          pointerEvents: stage === 4 ? 'none' : 'auto'
        }}
      >
        
        {/* EL SOBRE CON CORTE BARONIAL Y ORIENTACIÓN RESPONSIVA (Rotado solo en móvil) */}
        <div 
          className="relative aspect-[1.45/1] w-[140vw] rotate-90 sm:w-[92vw] sm:max-w-[800px] sm:rotate-0 transition-transform duration-700 mt-0 sm:mt-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 envelope-inside rounded-sm z-10"></div>

          {/* SOLAPA IZQUIERDA */}
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.3,0,0.2,1)]"
            style={{
              transformOrigin: 'left center',
              transform: stage >= 3 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
              zIndex: stage >= 3 ? 12 : 20,
              transformStyle: 'preserve-3d',
              filter: stage >= 3 ? 'none' : 'drop-shadow(3px 0px 8px rgba(0,0,0,0.5))'
            }}
          >
            <div className="absolute inset-0 theme-paper rounded-l-sm" style={{ clipPath: 'polygon(0 0, 15% 0, 46% 46%, 46% 54%, 15% 100%, 0 100%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flap-inside rounded-l-sm" style={{ transformOrigin: 'left center', transform: 'rotateY(180deg)', clipPath: 'polygon(0 0, 15% 0, 46% 46%, 46% 54%, 15% 100%, 0 100%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            </div>
          </div>

          {/* SOLAPA DERECHA */}
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.3,0,0.2,1)]"
            style={{
              transformOrigin: 'right center',
              transform: stage >= 3 ? 'rotateY(180deg)' : 'rotateY(0deg)',
              zIndex: stage >= 3 ? 12 : 20,
              transformStyle: 'preserve-3d',
              filter: stage >= 3 ? 'none' : 'drop-shadow(-3px 0px 8px rgba(0,0,0,0.5))'
            }}
          >
            <div className="absolute inset-0 theme-paper rounded-r-sm" style={{ clipPath: 'polygon(100% 0, 85% 0, 54% 46%, 54% 54%, 85% 100%, 100% 100%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flap-inside rounded-r-sm" style={{ transformOrigin: 'right center', transform: 'rotateY(180deg)', clipPath: 'polygon(100% 0, 85% 0, 54% 46%, 54% 54%, 85% 100%, 100% 100%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            </div>
          </div>

          {/* SOLAPA INFERIOR */}
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.3,0,0.2,1)]"
            style={{
              transformOrigin: 'bottom center',
              transform: stage >= 2 ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              zIndex: stage >= 2 ? 14 : 30,
              transformStyle: 'preserve-3d',
              filter: stage >= 2 ? 'none' : 'drop-shadow(0px -4px 10px rgba(0,0,0,0.6))'
            }}
          >
            <div className="absolute inset-0 theme-paper rounded-b-sm" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 85%, 56% 44%, 44% 44%, 0 85%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>
            </div>
            <div className="absolute inset-0 flap-inside rounded-b-sm" style={{ transformOrigin: 'bottom center', transform: 'rotateX(180deg)', clipPath: 'polygon(0 100%, 100% 100%, 100% 85%, 56% 44%, 44% 44%, 0 85%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            </div>
          </div>

          {/* SOLAPA SUPERIOR */}
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.3,0,0.2,1)]"
            style={{
              transformOrigin: 'top center',
              transform: stage >= 1 ? 'rotateX(180deg)' : 'rotateX(0deg)',
              zIndex: stage >= 1 ? 16 : 40,
              transformStyle: 'preserve-3d',
              filter: stage >= 1 ? 'none' : 'drop-shadow(0px 8px 15px rgba(0,0,0,0.7))'
            }}
          >
             <div className="absolute inset-0 theme-paper rounded-t-sm" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 56% 56%, 44% 56%, 0 15%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
             </div>
             <div className="absolute inset-0 flap-inside rounded-t-sm" style={{ transformOrigin: 'top center', transform: 'rotateX(180deg)', clipPath: 'polygon(0 0, 100% 0, 100% 15%, 56% 56%, 44% 56%, 0 15%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
             </div>
          </div>

          {/* SELLO DE CERA */}
          <div
            className="absolute left-1/2 z-50 transition-all duration-1000 ease-in-out cursor-pointer"
            style={{
              top: '55%',
              transform: stage >= 1 ? 'translate(-50%, -200px) scale(0.8)' : 'translate(-50%, -50%) scale(1)',
              opacity: stage >= 1 ? 0 : 1,
              pointerEvents: stage >= 1 ? 'none' : 'auto'
            }}
            onClick={() => { if (stage === 0) setStage(1); }}
          >
            <div className="custom-seal transform transition-transform duration-300 hover:scale-[1.03]">
              <div className="custom-seal-inner">
                {/* Añadimos -rotate-90 para móvil y rotate-0 para tablet/PC, así las letras siempre se leen rectas */}
                <span className="stamped-text font-script pr-1 inline-block -rotate-90 sm:rotate-0 transition-transform duration-700">
                  G<span className="text-sm md:text-lg mx-0.5">&</span>M
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}