// text.unit-animestyle.js
// Animation dynamique des styles typographiques (variation de graisse)

export function animateFontWeight(element, x, minX = 0, maxX = window.innerWidth) {
    // Mapper la position x entre 300 et 1000
    const minWeight = 300;
    const maxWeight = 1000;
  
    // Clamp & map
    const t = Math.max(0, Math.min(1, (x - minX) / (maxX - minX)));
    const wght = Math.round(minWeight + t * (maxWeight - minWeight));
  
    // Appliquer dynamiquement le style
    element.style.fontVariationSettings = `"wght" ${wght}, "slnt" 0, "CASL" 0, "CRSV" 0, "MONO" 0`;
  
    // Debug
    console.log(`🎚️ wght = ${wght} (x = ${x})`);
  }
  