let NumCars = 3;
let car = [];
let people = ["🧑‍⚕️"];
let angle = 0;
let carDown = [];
let cloudX;
let NumResident = 100;
let resident = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");

  for (let i = 0; i < NumCars; i++) {
    car.push(new Car(random(400, 500) * i + windowWidth, windowHeight * 7 / 8 - 20, people[floor(random(0, people.length))]));
  }

  for (let i = 0; i < 10; i++) {
    carDown.push(new StillCar(160 * i, windowHeight - 20, people[floor(random(0, people.length))]));
  }

  for (let i = 0; i < NumResident; i++) {
    resident.push(new Resident(random(windowWidth), windowHeight * 0.75 - 10));
  }

  cloudX = windowWidth / 2;
}

function draw() {
  background(135, 206, 235);
  // road part
  noStroke();
  fill(64);
  rect(0, windowHeight * 3 / 4, windowWidth, windowHeight / 4);
  fill(255);
  rect(0, windowHeight * 7 / 8 - 5, windowWidth, 10);

  for (let i = 0; i < NumCars; i++) {
    car[i].display();
    car[i].update();
  }

  for (let i = car.length - 1; i > 0; i -= 1) {
    if (car[i].onCanvas == false) {
      car.splice(i, 1);
    }
  }

  if (car.length < NumCars) {
    car.push(new Car(windowWidth + random(0, 300), windowHeight * 7 / 8 - 20, people[floor(random(0, people.length))]));
  }

  for (let i = 0; i < 10; i++) {
    carDown[i].display();
  }

  // now only the first 75% of the canvas is usable
  fill(0, 200, 0);
  rect(0, windowHeight * 0.75, windowWidth, -10);
  fill(120);
  rect(0, windowHeight * 0.75 - 10, windowWidth, -10);
  fill(255, 255, 0);
  circle(0, 0, 150);

  // moving cloud
  push();
  translate(cloudX, windowHeight * 0.3);
  fill(255);
  rect(10, 0, 180, -50);
  circle(10, -40, 80);
  circle(190, -40, 80);
  ellipse(100, -50, 160, 100)
  pop();

  if (cloudX > windowWidth + 100) {
    cloudX = -500;
  }

  // only 30% ---   75%-10

  // Shanghai World Financial Center
  noStroke();
  fill(168, 186, 207);
  rect(windowWidth * 5 / 6, windowHeight * 0.75 - 10, 40, -windowHeight * 0.4);
  triangle(windowWidth * 5 / 6 - 6, windowHeight * 0.75 - 10, windowWidth * 5 / 6 + 1, windowHeight * 0.75 - 10, windowWidth * 5 / 6 + 1, windowHeight * 0.35 - 10);
  triangle(windowWidth * 5 / 6 + 44, windowHeight * 0.75 - 10, windowWidth * 5 / 6 + 39, windowHeight * 0.75 - 10, windowWidth * 5 / 6 + 39, windowHeight * 0.35 - 10);
  fill(135, 206, 235);
  rect(windowWidth * 5 / 6 + 10, windowHeight * 0.39, 20, -20, 3, 3, 0, 0);

  fill(103, 127, 165);
  triangle(windowWidth * 5 / 6, windowHeight * 0.35, windowWidth * 5 / 6 - 6, windowHeight * 0.75 - 10, windowWidth * 5 / 6 + 20, windowHeight * 0.75 - 10);
  triangle(windowWidth * 5 / 6 + 40, windowHeight * 0.35, windowWidth * 5 / 6 + 44, windowHeight * 0.75 - 10, windowWidth * 5 / 6 + 20, windowHeight * 0.75 - 10);

  // oriental pearl tv tower
  rect(windowWidth * 5 / 6 - 103, windowHeight * 0.75 - 10, 20, -30);
  circle(windowWidth * 5 / 6 - 93, windowHeight * 0.75 - 65, 80);
  rect(windowWidth * 5 / 6 - 105.5, windowHeight * 0.75 - 90, 25, -100);
  circle(windowWidth * 5 / 6 - 93, windowHeight * 0.75 - 200, 60);
  rect(windowWidth * 5 / 6 - 96, windowHeight * 0.75 - 225, 6, -30);
  circle(windowWidth * 5 / 6 - 93, windowHeight * 0.75 - 255, 20);
  stroke(103, 127, 165);
  strokeWeight(2);
  line(windowWidth * 5 / 6 - 93, windowHeight * 0.75 - 265, windowWidth * 5 / 6 - 93, windowHeight * 0.75 - 280);



  for (let i = 0; i < NumResident; i++) {
    resident[i].display();
    resident[i].Windows();
  }



  cloudX += 0.5;
  angle -= 1;
}

class Car {
  constructor(startX, startY, person) {
    this.x = startX;
    this.y = startY;
    this.occupation = person;
    this.rfactor = random(0, 255);
    this.gfactor = random(0, 255);
    this.bfactor = random(0, 255);
    this.speed = random(-8, -5);
    this.onCanvas = true;
  }

  update() {
    this.x += this.speed;
    if (this.x < -200) {
      this.onCanvas = false;
    }

  }

  display() {
    push();
    translate(this.x, this.y);

    // car itself
    fill(this.rfactor, this.gfactor, this.bfactor);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-8, -2);
    curveVertex(0, -20);
    curveVertex(35, -23);
    curveVertex(50, -40);
    curveVertex(80, -45);
    curveVertex(110, -40);
    curveVertex(130, 0);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();

    // decorations on cars
    fill(220);
    beginShape();
    curveVertex(38, -22);
    curveVertex(38, -22);
    curveVertex(65, -23);
    curveVertex(65, -41);
    curveVertex(50, -39);
    curveVertex(43, -29);
    curveVertex(38, -22);
    curveVertex(38, -22);
    endShape();

    // wheels
    fill(64);
    circle(30, 0, 25);
    circle(110, 0, 25);

    push();
    translate(30, 0);
    rotate(radians(angle * 2));
    fill(34, 48, 3);
    circle(0, 0, 20);
    stroke(255);
    line(0, 0, 10 * cos(PI / 3), 10 * sin(PI / 3));
    line(0, 0, 10 * cos(PI * 2 / 3), 10 * sin(PI * 2 / 3));
    line(0, 0, 10 * cos(PI), 10 * sin(PI));
    line(0, 0, 10 * cos(PI * 4 / 3), 10 * sin(PI * 4 / 3));
    line(0, 0, 10 * cos(PI * 5 / 3), 10 * sin(PI * 5 / 3));
    line(0, 0, 10 * cos(PI * 2), 10 * sin(PI * 2));
    pop();

    push();
    translate(110, 0);
    rotate(radians(angle * 2));
    fill(34, 48, 3);
    circle(0, 0, 20);
    stroke(255);
    line(0, 0, 10 * cos(PI / 3), 10 * sin(PI / 3));
    line(0, 0, 10 * cos(PI * 2 / 3), 10 * sin(PI * 2 / 3));
    line(0, 0, 10 * cos(PI), 10 * sin(PI));
    line(0, 0, 10 * cos(PI * 4 / 3), 10 * sin(PI * 4 / 3));
    line(0, 0, 10 * cos(PI * 5 / 3), 10 * sin(PI * 5 / 3));
    line(0, 0, 10 * cos(PI * 2), 10 * sin(PI * 2));
    pop();


    // lights
    noStroke();
    fill(255, 255, 0);
    rect(-5, -10, -3, 5);
    fill(255, 0, 0);
    rect(133, -10, 3, 5);
    // circle(-6,-10,6);
    push();
    translate(49, -25);
    scale(1.5)
    text(this.occupation, 0, 0);
    pop();
    pop();
  }
}

class StillCar {
  constructor(startX, startY, person) {
    this.x = startX;
    this.y = startY;
    this.occupation = person;
    this.rfactor = random(0, 255);
    this.gfactor = random(0, 255);
    this.bfactor = random(0, 255);
  }

  update() {
  }

  display() {
    push();
    translate(this.x, this.y);

    // car itself
    fill(this.rfactor, this.gfactor, this.bfactor);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-8, -2);
    curveVertex(0, -20);
    curveVertex(35, -23);
    curveVertex(50, -40);
    curveVertex(80, -45);
    curveVertex(110, -40);
    curveVertex(130, 0);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();

    // decorations on cars
    fill(220);
    beginShape();
    curveVertex(38, -22);
    curveVertex(38, -22);
    curveVertex(65, -23);
    curveVertex(65, -41);
    curveVertex(50, -39);
    curveVertex(43, -29);
    curveVertex(38, -22);
    curveVertex(38, -22);
    endShape();

    // wheels
    fill(64);
    circle(30, 0, 25);
    circle(110, 0, 25);

    push();
    translate(30, 0);
    fill(34, 48, 3);
    circle(0, 0, 20);
    stroke(255);
    line(0, 0, 10 * cos(PI / 3), 10 * sin(PI / 3));
    line(0, 0, 10 * cos(PI * 2 / 3), 10 * sin(PI * 2 / 3));
    line(0, 0, 10 * cos(PI), 10 * sin(PI));
    line(0, 0, 10 * cos(PI * 4 / 3), 10 * sin(PI * 4 / 3));
    line(0, 0, 10 * cos(PI * 5 / 3), 10 * sin(PI * 5 / 3));
    line(0, 0, 10 * cos(PI * 2), 10 * sin(PI * 2));
    pop();

    push();
    translate(110, 0);
    fill(34, 48, 3);
    circle(0, 0, 20);
    stroke(255);
    line(0, 0, 10 * cos(PI / 3), 10 * sin(PI / 3));
    line(0, 0, 10 * cos(PI * 2 / 3), 10 * sin(PI * 2 / 3));
    line(0, 0, 10 * cos(PI), 10 * sin(PI));
    line(0, 0, 10 * cos(PI * 4 / 3), 10 * sin(PI * 4 / 3));
    line(0, 0, 10 * cos(PI * 5 / 3), 10 * sin(PI * 5 / 3));
    line(0, 0, 10 * cos(PI * 2), 10 * sin(PI * 2));
    pop();


    // lights
    noStroke();
    fill(255, 255, 0);
    rect(-5, -10, -3, 5);
    fill(255, 0, 0);
    rect(133, -10, 3, 5);
    // circle(-6,-10,6);
    push();
    translate(49, -25);
    scale(1.5)
    text(this.occupation, 0, 0);
    pop();
    pop();
  }
}

class Resident {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.buildingH = random(windowHeight * 0.05, windowHeight * 0.1);
    this.buildingW = random(15, 25);
  }
  update() {
  }

  display() {
    push();
    translate(this.x, this.y);
    stroke(78, 51, 50);
    strokeWeight(1);
    fill(183, 179, 171);
    rect(0, 0, this.buildingW, -this.buildingH, 0, 0, 5, 5);
    pop();
  }

  Windows() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(75, 56, 55);
    for (let i = 0; i < this.buildingH / 4 - 3; i++) {
      for (let j = 0; j < this.buildingW / 3 - 2; j++) {
        circle(3 + j * 3, -this.buildingH + 4 + 4 * i, 1);
      }
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}