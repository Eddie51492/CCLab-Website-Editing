let confettis = [];
let numConfetti = 10;
let backgroundHug;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasContainer");

  colorMode(HSB);
  backgroundHug = random(360);
}

function draw() {
  background(backgroundHug, 10, 190);

  if (mouseIsPressed == true ){
    for (let i = 0; i < numConfetti; i++) {
      confettis.push(new Confetti(mouseX, mouseY));
    }
    console.log(confettis.length);
  }


  for (let i = 0; i < confettis.length; i++) {
    confettis[i].update();
    confettis[i].display();
  }


  for (let i = confettis.length-1; i>=0; i-=1){
    if(confettis[i].OnCanvas == false){
      confettis.splice(i, 1)
    }

  }

}

class Confetti {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);

    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);
    this.c = color(random(255), 255, 50);
    this.OnCanvas = true; 

  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY += 0.1;
    this.speedX *= 0.99;

    if (this.y > 300){
      this.OnCanvas = false; 
    }


  }
  display() {
    push();
    translate(this.x, this.y);

    fill(this.c);
    noStroke();
    circle(0, 0, this.size);

    pop();
  }

}