// Fonction asynchrone pour charger le fichier texte

async function loadText(textPath = 'text.txt') {
  try {
    const response = await fetch(textPath);
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status} pour ${textPath}`);
    }
    const data = await response.text();
    const cleaned = data.replace(/\n/g, ' ');
    const mots = cleaned.match(/\b[\wÀ-ÿ'-]+\b/g);
    console.log("🔍 Texte chargé avec succès:", mots);
    return mots || [];
  } catch (error) {
    console.error("🚨 Erreur de chargement du texte:", error);
    return [];
  }
}

export { loadText };

  