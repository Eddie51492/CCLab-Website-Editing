
let swarm1;
let SWARM = [];






function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  swarm1 = new Swarm(width / 2, height / 2);
  for(let i = 0 ; i <20 ; i ++){
    SWARM.push(new Swarm(width / 2, height / 2));
  }

}

function draw() {
  background(220, 34, 85);

  swarm1.update();
  swarm1.display();

  for(let i = 0 ; i <20 ; i ++){
    SWARM[i].display();
    SWARM[i].update();
  }

  noFill();
  stroke(0);
  circle(width / 2, height / 2, height);




}


class Swarm {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dia = 100;
    this.speedX = 0;
    this.speedY = 0;

    this.noiseXoffset = random(100);
    this.noiseYoffset = random(100);

    this.birds = [];
    this.numBird = floor(random(10, 70));
    for (let i = 0; i < this.numBird; i++) {


      let ranAngle = random(2 * PI);
      let birdX = cos(ranAngle) * random(0, this.dia / 2)//random(this.dia);
      let birdY = sin(ranAngle) * random(0, this.dia / 2)//random(this.dia);
      this.birds.push(new Bird(birdX, birdY, this.dia/2 ));
    }
  }

  update() {
    let noiseValX = noise((frameCount + this.noiseXoffset) * 0.01);
    let noiseValY = noise((frameCount + this.noiseYoffset) * 0.01);
    this.speedY = map(noiseValY, 0, 1, -1, 1);
    this.speedX = map(noiseValX, 0, 1, -1, 1);

    let wouldBeX = this.x + this.speedX;
    let wouldBeY = this.y + this.speedY;

    let distFromCenter = dist(width / 2, height / 2, wouldBeX, wouldBeY);
    if (distFromCenter < height / 2) {
      this.x += this.speedX;
      this.y += this.speedY;
    }





    // text(noiseValX, 100, 100);
  }


  display() {
    push();
    translate(this.x, this.y);
    noFill();
    stroke(0);
    circle(0, 0, this.dia);


    for (let i = 0; i < 5; i++) {
      this.birds[i].display();
      this.birds[i].update();
    }




    pop();
  }



}


class Bird {
  constructor(srartX, startY,moveAllowence) {
    this.x = srartX;
    this.y = startY;
    this.speedX = 0;
    this.speedY = 0;
    this.boundary = moveAllowence;

    this.noiseXoffset = random(100);
    this.noiseYoffset = random(100);
  }

  update() {
    let noiseValX = noise((frameCount + this.noiseXoffset) * 0.01);
    let noiseValY = noise((frameCount + this.noiseYoffset) * 0.01);
    this.speedY = map(noiseValY, 0, 1, -10, 10);
    this.speedX = map(noiseValX, 0, 1, -10, 10);

    let wouldBeX = this.x + this.speedX;
    let wouldBeY = this.y + this.speedY;

    let distFromCenter = dist(0,0, wouldBeX, wouldBeY);
    if (distFromCenter < this.boundary) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(0);
    circle(0, 0, 10);

    pop();
  }
}




























function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}