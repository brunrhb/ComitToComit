// text.unit-motion--Xloop.js
// Comportement DOM : animation horizontale avec variation de graisse

import { animateFontWeight } from './text.unit-animestyle.js';

class Xloop {
  constructor(units, speed = 2) {
    this.units = units;
    this.speed = speed;
    this.index = 0;
    this.x = -300;
    this.element = this.createDOMElement(this.units[this.index]);
  }

  createDOMElement(text) {
    const container = document.getElementById('text-layer');
    if (!container) {
      console.error("⚠️ Conteneur #text-layer introuvable !");
      return null;
    }
    
    const el = document.createElement('div');
    el.textContent = text;
  
    el.classList.add('variable-style0');
    el.style.position = 'absolute';
    el.style.top = '50%';
    el.style.left = `${this.x}px`;
    el.style.transform = 'translateY(-50%)';
    el.style.whiteSpace = 'nowrap';
  
    container.appendChild(el);
  
    console.log(`🆕 [Xloop] Affichage mot : "${text}"`);
    return el;
  }
  

  update() {
    this.x += this.speed;
    this.element.style.left = `${this.x}px`;

    // Variation dynamique de graisse en fonction de X
    animateFontWeight(this.element, this.x);

    console.log(`🟡 [Xloop] Mot "${this.element.textContent}" → x=${this.x}`);

    if (this.x > window.innerWidth) {
      this.nextWord();
    }
  }

  nextWord() {
    console.log(`🔁 [Xloop] Sortie de "${this.element.textContent}"`);

    this.element.remove();
    this.index = (this.index + 1) % this.units.length;
    this.x = -300;
    this.element = this.createDOMElement(this.units[this.index]);

    // Reset style
    this.element.style.fontVariationSettings = `"wght" 300, "slnt" 0, "CASL" 0, "CRSV" 0, "MONO" 0`;

    console.log(`✅ [Xloop] Nouveau mot : "${this.element.textContent}"`);
  }
}

export { Xloop }; // ✅ Export explicite
