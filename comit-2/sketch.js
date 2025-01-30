let xpos = 0;
let ypos = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  function draw() {
    background(50);
    noFill();
    stroke(255);
    strokeWeight(8);
    ellipse(
      200+sin(xpos)*100,
      200+sin(ypos)*100,
      45, 45);
    xpos += 0.1;
    ypos += 0.04;
  }