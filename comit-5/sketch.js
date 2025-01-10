let textElement;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("myCanvas");

    // Créer un élément HTML
    textElement = createDiv("Follow me!");
    textElement.addClass("p"); // Appliquer la classe CSS
}

function draw() {
    background(220);

    // Mettre à jour la position du texte HTML
    textElement.position(mouseX + 10, mouseY + 10);
}
