let textElement;

function setup() {
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.parent("myCanvas");

    // Créer un élément HTML
    textElement = createDiv("Follow me!");
    textElement.addClass("p"); // Appliquer la classe CSS
}

function draw() {
    background(220);
}
let x = 0;
let speed = 5;

function moveText() {
    // Update x position
    x += speed;
    
    // When text reaches right edge, reset to left
    if (x > width) {
        x = -100;
    }
    
    // Set text position
    textElement.position(x, mouseY);
}

// Call moveText() every 16ms (approximately 60fps)
setInterval(moveText, 16);
