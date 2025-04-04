// Importe le texte brut comme une string JS depuis text.js
//import texte from './text.js';
import texte from './text.js?v=1.0';


// Fonction pour découper le texte en unités (mots)
function loadText() {
  try {
    const cleaned = texte.replace(/\n/g, ' ');
    const mots = cleaned.match(/\b[\wÂ-ÿ—’]+\b/g); // mots avec accents & tirets longs
    console.log("✅ Texte chargé avec succès :", mots);
    return mots || [];
  } catch (error) {
    console.error("❌ Erreur de traitement du texte :", error);
    return [];
  }
}

export { loadText };
