function setup() {
    createCanvas(700, 500);
    background("yellow")
  }
  
  function draw() {
    stroke("black");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }