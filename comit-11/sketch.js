import { loadText } from './text.unit-maker.js';
import { Xloop } from './text.unit-motion--Xloop.js';

let xloop;
let texteUnites = [];

async function preload() {
  console.log("⚡ preload démarré ⚡");
  try {
    const result = await loadText('text.txt');
    texteUnites = result;
    console.log("✅ Mots chargés : ", texteUnites);
  } catch (err) {
    console.error("❌ Erreur preload : ", err);
  }
}


function setup() {
  // désactive le canvas de p5 (tout avec le DOM)
    noCanvas(); 

  // Lance le comportement Xloop avec les mots chargés
  xloop = new Xloop(texteUnites);
}

function draw() {
  // Met à jour les positions DOM des mots animés
  xloop.update();
}
