
let baskets = []
let readInstructions =false;
function preload(){
  kickSound = loadSound("sounds/drip.mp3");
}
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);
  for (let i = 0; i < 1; i++) {
    baskets.push(new drawEgg(random(width), random(height)));
  }

}

function draw() {
  background(120, 90, 230);
  // if(mousePressed == true){

  for (let i = 0; i < baskets.length; i++) {
    baskets[i].display();
    baskets[i].update();
  }
if(readInstructions == false){
  textAlign(CENTER);
  text("press to lay eggs", width / 2, height / 2);
}
 
}


class drawEgg {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.s = random(0.5, 1.5);
    this.c1 = random(0, 255);
    this.c2 = random(0, 255);
    this.c3 = random(0, 255);
    this.c4 = random(0, 255);
    this.c5 = random(0, 255);
    this.c6 = random(0, 255);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.showYolk = true;

  }


  display() {
    push();
    translate(this.x, this.y);
    scale(this.s)
    noStroke();
    fill(this.c1, this.c2, this.c3);
    arc(0, 0, 80, 80, 0, PI);
    arc(0, 0, 80, 130, PI, 2 * PI);
    fill(this.c4, this.c5, this.c6);
    if (this.showYolk == true) {
      circle(0, 0, 40);
    }

    pop();

  }


  update() {


    if (this.x >= 450 || this.x <= 50) {
      this.speedX = -this.speedX;
      this.showYolk = !this.showYolk;
      kickSound.play();
    }
    this.x += this.speedX;

    if (this.y >= 350 || this.y <= 50) {
      this.speedY = -this.speedY;
      this.showYolk = !this.showYolk;
      kickSound.play();
    }
    this.y += this.speedY;


  }


}
function mousePressed() {
  baskets.push(new drawEgg(mouseX, mouseY));
  readInstructions = true;
}