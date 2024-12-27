function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  function draw() {
    background(50);
    noStroke();
    for (let i = 0; i < 5; i++) {
      fill(255);
      ellipse(
        200+(sin(frameCount/(i+10))*(i+20)),
        100+(i*50),
        40,
        40);
    }
  }