// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLESONE = 4000; // Decide the initial number of particles.
let NUM_OF_PARTICLESTWO = 2000;
let NUM_OF_PARTICLESTHREE = 5;
let particles = [];
let angle;
let position;
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");
  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLESONE; i++) {
    angle = radians(random(360));
    let radius = random(240, 260);
    particles[i] = new ParticleONE(300 + radius * cos(angle), 300 + radius * sin(angle));

  }
  for (let i = 0; i < NUM_OF_PARTICLESTWO; i++) {
    angle = radians(random(360));
    particles.push(new ParticleTWO(300 + 200 * cos(angle), 300 + 200 * sin(angle)));
  }
}

function draw() {
  background(15, 15, 15);

  if (mouseIsPressed == true) {
    for (let i = 0; i < NUM_OF_PARTICLESTHREE; i++) {
      position = map(mouseY, 0, height, 120, 280);
      particles.push(new ParticleThree(300 + random(-10, 10), position + random(-10, 10)));
    }
  }

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
  // for(let i=particles.length;i>8000;i-=1){
  //   if(particles[i].anglethree>360){
  //     particles.splice(i,1);
  //   }
  // }

  // drawPath();
}

class ParticleONE {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 0.5;
    this.angle = 0;
    // this.dist = dist(this.x, this.y, 300, 300);
    this.speedX = 1;
    this.speedY = 1;
  }
  // methods (functions): particle's behaviors
  update() {
    this.angle += 0.1;


    // if(this.x<= 300 && this.y <=300){
    //   this.speedX = 1;
    //   this.speedY = 1;
    // }
    // if(this.x>= 300 && this.y >=300){
    //   this.speedX = -1;
    //   this.speedY = -1;
    // }
    // if(this.x<= 300 && this.y >=300){
    //   this.speedX = 1;
    //   this.speedY = -1;
    // }
    // if(this.x>= 300 && this.y <=300){
    //   this.speedX = -1;
    //   this.speedY = 1;
    // }
    // if(dist<=240){
    //   this.speedX *= -1;
    //   this.speedY *= -1;
    // }
    // if(dist>=260){
    //   this.speedX *= -1;
    //   this.speedY *= -1;
    // }
    // this.speedX = random(-1,1);
    //  this.x += this.speedX;
    //  this.y += this.speedY;



    // (add) 
  }
  display() {
    // particle's appearance
    push();
    translate(300, 300);
    rotate(radians(this.angle));
    push();
    translate(-300, -300);
    push();
    translate(this.x, this.y);
    noStroke();
    circle(0, 0, this.dia);
    pop();
    pop();
    pop();
  }
}

class ParticleTWO {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 0.5;
    this.angle = 0;
    // this.dist = dist(this.x, this.y, 300, 300);
    this.speedX = 1;
    this.speedY = 1;
  }
  // methods (functions): particle's behaviors
  update() {
    this.angle -= 0.1;
    // (add) 
  }
  display() {
    // particle's appearance
    push();
    translate(300, 300);
    rotate(radians(this.angle));
    push();
    translate(-300, -300);
    push();
    translate(this.x, this.y);
    noStroke();
    circle(0, 0, this.dia);
    pop();
    pop();
    pop();
  }
}

class ParticleThree {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 2;
    this.anglethree = 0;
    this.dist = dist(this.x, this.y, 300, 300);
    this.speedX = 1;
    this.speedY = 1;
  }
  // methods (functions): particle's behaviors
  update() {
    this.anglethree++;
    // (add) 
  }
  display() {
    // particle's appearance
    push();
    translate(300, 300);
    rotate(radians(this.anglethree));
    push();
    translate(-300, -300);
    push();
    translate(this.x, this.y);
    noStroke();
    circle(0, 0, this.dia);
    pop();
    pop();
    pop();
  }
}

function drawPath() {

  // this is the path how particles will move
  strokeWeight(3);
  stroke(120, 0, 0);
  fill(255);
  arc(width / 2, height / 2, 400, 400, PI / 2, 3 * PI / 2);
  noFill();
  push();
  translate(width / 2, height / 2 - 100);
  fill(0);
  arc(0, 0, 160, 200, PI / 2, 3 * PI / 2);
  fill(255);
  noStroke();
  circle(0, 0, 50);
  pop();
  strokeWeight(3);
  push();
  translate(width / 2, height / 2 + 100);
  fill(255);
  arc(0, 0, 160, 200, 3 * PI / 2, PI / 2);
  fill(0);
  noStroke();
  circle(0, 0, 50);
  pop();
}