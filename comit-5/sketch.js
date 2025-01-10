let canvas;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.parent("myCanvas"); // Place le canvas dans un conteneur
}

function draw() {
    background(220);
    fill(0);
    ellipse(mouseX, mouseY, 50, 50);

    // Mettre à jour le texte HTML selon la position de la souris
    let htmlContent = document.querySelector("#htmlContent p");
    htmlContent.innerText = `Mouse: (${mouseX}, ${mouseY})`;
}
