let textElement;

function setup() {
    let canvas = createCanvas(0,0);
    canvas.parent("myCanvas");

    // Créer un élément HTML
    textElement = createDiv("Follow me!");
    textElement.addClass("p"); // Appliquer la classe CSS
}

function draw() {
    background(0);

    // Mettre à jour la position du texte HTML
    textElement.position(mouseX + 10, mouseY + 10);
}
