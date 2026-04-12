import React, { useState, useEffect } from 'react';

export default function CartaAntigua() {
  const [stage, setStage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // --- IMPORTANTE: El simulador web no lee archivos locales. ---
  // 1. Sube tu precioso collage a https://postimages.org/
  // 2. Copia el "Enlace directo" (debe terminar en .jpg)
  // 3. Pégalo aquí abajo entre las comillas sustituyendo al de prueba:
  const ENLACE_IMAGEN = "https://i.postimg.cc/XNw9G4mr/Gemini-Generated-Image-5rucma5rucma5ruc.png";

  // --- Cambiar título y favicon (icono de la pestaña) ---
  useEffect(() => {
    document.title = "Invitación Boda Gemma y Miguel";
    
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    // Icono de corazón rojo estilo WhatsApp
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">❤️</text></svg>';
  }, []);

  // --- ESPERAR A QUE LAS FUENTES CARGUEN PARA EVITAR EL "SALTO" VISUAL ---
  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsLoaded(true);
    });
  }, []);

  // --- SECUENCIA DE APERTURA LENTA Y CINEMATOGRÁFICA ---
  useEffect(() => {
    if (stage === 1) {
      // La solapa tarda ahora 4s en abrirse (mucho más lento). 
      // La pantalla blanca tarda un poco más en rellenarse para acompañar.
      // Total de la secuencia = 4.5 segundos (4500ms).
      const timer = setTimeout(() => setStage(2), 4500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // --- FUNCIÓN: Forzar descarga de la imagen ---
  const descargarImagen = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(ENLACE_IMAGEN);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = "Invitacion Boda Gemma y Miguel 24-04-2027.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      window.open(ENLACE_IMAGEN, '_blank');
    }
  };

  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

    .font-script { font-family: 'Great Vibes', cursive; }
    .font-serif-classic { font-family: 'Playfair Display', serif; }

    .theme-paper {
      background-color: #2c0e12; 
      background-image: 
        radial-gradient(circle at top right, rgba(110, 30, 40, 0.5) 0%, rgba(30, 10, 15, 0.95) 100%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
    }

    .envelope-inside {
      background-color: #fdfbf7;
      background-image: 
        radial-gradient(circle at center, transparent 0%, #d8cdb8 150%),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
      box-shadow: inset 0 15px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.2);
    }

    .flap-inside {
      background-color: #fdfbf7;
      background-image: 
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
    }

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
      color: #3d2b02; /* Color ligeramente más oscuro para mayor contraste */
      text-shadow: 
        -0.5px -0.5px 0px rgba(0,0,0,0.9), /* Desenfoque a 0px para máxima nitidez */
        0.5px 0.5px 0px rgba(255,255,255,0.4); /* Desenfoque a 0px para máxima nitidez */
      font-size: 1.1rem; 
      line-height: 1;
      margin-top: 2px;
      letter-spacing: -1px;
    }

    /* --- SISTEMA TOTALMENTE RESPONSIVE (Cálculo matemático exacto) --- */
    
    /* 1. MÓVILES (Por defecto) - Scale 2.2 */
    .macro-zoom { transform: scale(2.2); }
    .invite-text-container { top: 68%; }
    .invite-text-1 { font-size: 1.1rem; } /* Letra más grande y presente */
    .invite-text-2 { font-size: 0.85rem; margin-top: 2px; } 
    .custom-seal { width: 70px; height: 70px; } /* Sello más realista y delicado */
    .stamped-text { font-size: 0.9rem; }
    
    /* 2. MÓVILES GRANDES / TABLETS VERTICALES - Scale 2.5 */
    @media (min-width: 480px) {
      .macro-zoom { transform: scale(2.5); } 
      .custom-seal { width: 65px; height: 65px; }
      .stamped-text { font-size: 0.85rem; }
      .invite-text-container { top: 66%; } 
      .invite-text-1 { font-size: 1rem; } 
      .invite-text-2 { font-size: 0.75rem; margin-top: 2px; } 
    }

    /* 3. TABLETS (Landscape) / PANTALLAS PEQUEÑAS - Scale 2.8 */
    @media (min-width: 768px) {
      .macro-zoom { transform: scale(2.8); } 
      .custom-seal { width: 55px; height: 55px; }
      .stamped-text { font-size: 0.75rem; }
      .invite-text-container { top: 64%; } 
      .invite-text-1 { font-size: 0.85rem; } 
      .invite-text-2 { font-size: 0.65rem; margin-top: 3px; } 
    }
    
    /* 4. PORTÁTILES Y ESCRITORIOS ESTÁNDAR - Scale 3.5 */
    @media (min-width: 1024px) {
      .macro-zoom { transform: scale(3.5); } 
      .custom-seal { width: 45px; height: 45px; }
      .stamped-text { font-size: 0.6rem; }
      .invite-text-container { top: 61%; } 
      .invite-text-1 { font-size: 0.7rem; } 
      .invite-text-2 { font-size: 0.5rem; margin-top: 4px; } 
    }

    /* 5. MONITORES 1440p / MACBOOKS - Scale 4.5 */
    @media (min-width: 1440px) {
      .macro-zoom { transform: scale(4.5); } 
      .custom-seal { width: 36px; height: 36px; }
      .stamped-text { font-size: 0.5rem; }
      .invite-text-container { top: 59%; } 
      .invite-text-1 { font-size: 0.55rem; } 
      .invite-text-2 { font-size: 0.4rem; margin-top: 5px; } 
    }
    
    /* 6. MONITORES 4K Y ULTRAWIDE - Scale 5.5 */
    @media (min-width: 1920px) {
      .macro-zoom { transform: scale(5.5); } 
      .custom-seal { width: 30px; height: 30px; }
      .stamped-text { font-size: 0.4rem; }
      .invite-text-container { top: 57%; } 
      .invite-text-1 { font-size: 0.45rem; } 
      .invite-text-2 { font-size: 0.35rem; margin-top: 6px; } 
    }

    /* 7. PROTECCIÓN PARA MÓVILES EN HORIZONTAL (Landscape) */
    /* Evita que el texto se salga por el borde inferior si la pantalla tiene muy poca altura */
    @media (max-height: 500px) and (orientation: landscape) {
      .invite-text-container { top: 56%; } 
      .invite-text-1 { font-size: 0.8rem; }
      .invite-text-2 { font-size: 0.6rem; }
    }
  `;

  return (
    <div 
      className={`fixed inset-0 bg-white flex items-center justify-center overflow-hidden font-serif-classic selection:bg-stone-200 selection:text-stone-800 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ perspective: '1200px' }}
    >
      <style>{customStyles}</style>

      {/* Luz focal en el fondo claro para dar volumen */}
      <div className="absolute w-[150vw] h-[150vw] md:w-[800px] md:h-[800px] bg-stone-50 rounded-full blur-[90px] pointer-events-none"></div>

      {/* PANTALLA BLANCA DE TRANSICIÓN (FADE TO WHITE) */}
      <div 
        className="fixed inset-0 bg-white z-[60] pointer-events-none"
        style={{
          opacity: stage >= 1 ? 1 : 0,
          /* Se enciende progresivamente más tarde (2000ms) y tarda más en rellenarse (2500ms) */
          transition: stage >= 1 ? 'opacity 2500ms ease-in-out 2000ms' : 'opacity 500ms ease-out',
        }}
      ></div>

      {/* LA IMAGEN REVELADA */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-[70] ${
          stage === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ visibility: stage === 2 ? 'visible' : 'hidden' }}
      >
        <div className="relative group max-w-full max-h-[75vh] sm:max-h-[85vh]">
          <img 
            src={ENLACE_IMAGEN}
            alt="Invitación Gemma y Miguel" 
            className="max-w-full max-h-full object-contain rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          />
        </div>
        
        {/* BOTÓN DE DESCARGA */}
        <button 
          onClick={descargarImagen}
          className={`mt-6 group flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-stone-50 border border-stone-200 rounded-full text-stone-600 hover:text-stone-800 font-serif-classic text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-700 delay-[1000ms] shadow-md hover:scale-105 active:scale-95 cursor-pointer ${
            stage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="relative overflow-hidden w-3.5 h-3.5">
            <svg 
              className="absolute transition-transform duration-500 group-hover:translate-y-full"
              xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            <svg 
              className="absolute -translate-y-full transition-transform duration-500 group-hover:translate-y-0"
              xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
          </div>
          <span>Guardar Invitación</span>
        </button>
      </div>

      {/* CONTENEDOR EXTERNO DEL SOBRE */}
      <div
        className="absolute inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.5,0,0.2,1)]"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: stage === 2 ? 'translateY(120vh) rotate(-5deg)' : 'translateY(0) rotate(0deg)',
          opacity: stage === 2 ? 0 : 1,
          pointerEvents: stage >= 1 ? 'none' : 'auto',
          visibility: stage === 2 ? 'hidden' : 'visible'
        }}
      >
        <div 
          className="relative aspect-[1.45/1] w-[92vw] min-w-[75vh] max-w-[800px] transition-transform duration-1000 macro-zoom"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 envelope-inside rounded-sm z-10"></div>

          {/* SOLAPA IZQUIERDA (Inmóvil, la dejamos estática en rotateY 0) */}
          <div
            className="absolute inset-0"
            style={{
              transformOrigin: 'left center',
              transform: 'rotateY(0deg)',
              zIndex: 20,
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(3px 0px 8px rgba(0,0,0,0.5))'
            }}
          >
            <div className="absolute inset-0 theme-paper rounded-l-sm" style={{ clipPath: 'polygon(-1% -1%, 50.5% 50%, -1% 101%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* SOLAPA DERECHA (Inmóvil) */}
          <div
            className="absolute inset-0"
            style={{
              transformOrigin: 'right center',
              transform: 'rotateY(0deg)',
              zIndex: 20,
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(-3px 0px 8px rgba(0,0,0,0.5))'
            }}
          >
            <div className="absolute inset-0 theme-paper rounded-r-sm" style={{ clipPath: 'polygon(101% -1%, 49.5% 50%, 101% 101%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* SOLAPA INFERIOR (Inmóvil pero incorpora la sombra dinámica de la apertura) */}
          <div
            className="absolute inset-0"
            style={{
              transformOrigin: 'bottom center',
              transform: 'rotateX(0deg)',
              zIndex: 30,
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(0px -4px 10px rgba(0,0,0,0.6))'
            }}
          >
            <div className="absolute inset-0 theme-paper rounded-b-sm" style={{ clipPath: 'polygon(-1% 101%, 101% 101%, 50% 49.5%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Sombra dinámica de apertura que crece fluidamente junto a la tapa (ahora más lento: 4000ms) */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"
                style={{
                  opacity: stage === 1 ? 1 : 0,
                  transition: 'opacity 4000ms ease-out'
                }}
              ></div>

              {/* TEXTO CALIGRÁFICO ANCLADO AL CENTRO */}
              <div className="absolute left-0 right-0 flex flex-col items-center justify-center pointer-events-none invite-text-container" style={{ transform: 'rotate(-1.5deg)' }}>
                <span className="font-script text-[#d4af37] opacity-80 invite-text-1" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.7)' }}>
                  Te invitamos a nuestro gran día
                </span>
                <span className="font-script text-[#d4af37] opacity-80 invite-text-2 tracking-wide" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.7)' }}>
                  24 . 04 . 2027
                </span>
              </div>

            </div>
          </div>

          {/* SOLAPA SUPERIOR (Apertura fluida hacia delante y Sello acoplado) */}
          <div
            className="absolute inset-0 cursor-pointer"
            style={{
              transformOrigin: 'top center',
              transform: stage >= 1 ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              zIndex: 40,
              transformStyle: 'preserve-3d',
              /* Se ha ralentizado la apertura a 4000ms (4 segundos) */
              transition: 'transform 4000ms ease-out',
              filter: 'drop-shadow(0px 8px 15px rgba(0,0,0,0.6))'
            }}
            onClick={() => { if (stage === 0) setStage(1); }}
          >
             {/* Cara Frontal de la Solapa */}
             <div className="absolute inset-0 theme-paper rounded-t-sm" style={{ clipPath: 'polygon(-1% -1%, 101% -1%, 50% 50.5%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
             </div>
             
             {/* Cara Interior de la Solapa */}
             <div className="absolute inset-0 flap-inside rounded-t-sm" style={{ transformOrigin: 'top center', transform: 'rotateX(180deg)', clipPath: 'polygon(-1% -1%, 101% -1%, 50% 50.5%)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
             </div>

             {/* EL SELLO VIAJA FÍSICAMENTE PEGADO A LA SOLAPA FRONTAL */}
             <div
               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
               style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
             >
                <div className="custom-seal transform transition-transform duration-300 hover:scale-[1.03]">
                  <div className="custom-seal-inner">
                    <span className="stamped-text font-script pr-1">
                      G<span className="text-[0.8em] mx-0.5">&</span>M
                    </span>
                  </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}