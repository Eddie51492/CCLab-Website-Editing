let NumTallBuilding = 10;
let Tallbuilding = [];
let NumAirplanes = 4;
let Airplane = [];
let NumLowBuilding = 20;
let Lowbuilding = [];
let Board;
let move = false;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  for (let i = 0; i < NumTallBuilding; i++) {
    Tallbuilding.push(new TallBuildings(random(windowWidth - 80), windowHeight - 2));
  }

  for (let i = 0; i < NumAirplanes; i++) {
    Airplane.push(new ariplanes(random(windowWidth + 20, windowWidth + 170), random(windowHeight * 0.05, windowHeight * 0.2)));
  }

  for (let i = 0; i < NumLowBuilding; i++) {
    Lowbuilding.push(new LowBuildings(random(windowWidth - 80), windowHeight - 2));
  }

  Board = random(windowWidth * 0.3, windowWidth * 0.4);
}

function draw() {
  background(18, 49, 80);

  for (let i = 0; i < NumAirplanes; i++) {
    Airplane[i].display();
    Airplane[i].update();
  }

  for (let i = NumAirplanes - 1; i > 0; i -= 1) {
    if (Airplane[i].x < -80) {
      Airplane.splice(i, 1);
    }
  }

  if (Airplane.length < NumAirplanes) {
    Airplane.push(new ariplanes(random(windowWidth + 20, windowWidth + 170), random(windowHeight * 0.05, windowHeight * 0.2)));
  }

  for (let i = 0; i < NumTallBuilding; i++) {
    Tallbuilding[i].display();
    Tallbuilding[i].update();
    Tallbuilding[i].light();
    Tallbuilding[i].windowsInBuilding();
    Tallbuilding[i].AdSingsAtTop();
  }

  for (let i = Tallbuilding.length - 1; i > 0; i -= 1) {
    if (Tallbuilding[i].onCanvas == false) {
      Tallbuilding.splice(i, 1);
    }
  }

  if (Tallbuilding.length < NumTallBuilding) {
    Tallbuilding.push(new TallBuildings(random(-200, -80), windowHeight - 2));
  }

  for (let i = 0; i < NumLowBuilding; i++) {
    Lowbuilding[i].display();
    Lowbuilding[i].update();
    Lowbuilding[i].AdSingsAtTwoSides();
    Lowbuilding[i].Windows();
  }

  for (let i = Lowbuilding.length - 1; i > 0; i -= 1) {
    if (Lowbuilding[i].onCanvas == false) {
      Lowbuilding.splice(i, 1);
    }
  }

  if (Lowbuilding.length < NumLowBuilding) {
    Lowbuilding.push(new LowBuildings(random(-300, -100), windowHeight - 2));
  }

  // Board: welcome to night city
  push()
  translate(Board, windowHeight);
  noStroke();
  fill(100);
  rect(0, 0, 20, -50);
  rect(windowWidth * 0.2, 0, 20, -50);
  strokeWeight(4)
  stroke(184, 14, 18);
  fill(49, 169, 166);
  rect(-windowWidth * 0.05, -50, windowWidth * 0.3 + 20, -100, 5, 5, 5, 5);
  noStroke();
  fill(255, 165, 0);

  // play
  circle(0, -130, 20);
  fill(0, 90, 255);
  triangle(-4.5, -122.5, -4.5, -137.5, 8.5, -130);
  if (mouseIsPressed === true && dist(mouseX - Board, mouseY - windowHeight, 0, -130) < 10) {
    move = true;
  }

  // pause
  fill(255, 165, 0);
  circle(30, -130, 20);
  stroke(0, 90, 255);
  strokeWeight(2);
  line(27, -136, 27, -124);
  line(33, -136, 33, -124);
  if (mouseIsPressed === true && dist(mouseX - Board, mouseY - windowHeight, 30, -130) < 10) {
    move = false;
  }

  noStroke();
  fill(255, 165, 0);
  textAlign(CENTER);
  textFont("Courier New");
  textSize(18);
  text("Welcome To Future City", windowWidth * 0.1 + 10, -100);
  pop();

}


class TallBuildings {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.buildingH = random(windowHeight * 0.70, windowHeight * 0.9);
    this.buildingW = random(50, 100);
    this.color = random(1, 2);
    this.onCanvas = true;

  }

  update() {
    if (this.x > windowWidth) {
      this.onCanvas = false;
    }
    if (move == true) {
      this.x += 0.1;
    }


  }

  display() {
    push();
    translate(this.x, this.y);
    if (this.color < 1.5) {
      stroke(12, 203, 12);
    } else {
      stroke(243, 101, 241);
    }
    fill(4, 16, 43);
    rect(0, 0, this.buildingW, -this.buildingH, 0, 0, 5, 5);
    pop();
  }

  // only certain buildings will have lights on the top
  light() {
    if (this.buildingH > windowHeight * 0.85) {
      push();
      translate(this.x, this.y);
      push();
      translate(this.buildingW / 2, -this.buildingH);
      if (this.color < 1.5) {
        fill(5, 251, 252);
      } else {
        fill(205, 193, 253);
      }
      noStroke();
      triangle(-5, -1, 5, -1, 0, -200);
      pop();
      pop();
    }
  }

  windowsInBuilding() {
    push();
    translate(this.x, this.y);
    stroke(96, 159, 200);
    strokeWeight(3);
    for (let i = 0; i < 10; i++) {
      line(this.buildingW, -this.buildingH + i * 30 + 40, this.buildingW / 2, -this.buildingH + i * 30 + 40);
      rect(this.buildingW, -this.buildingH + i * 30 + 40, -this.buildingW / 8, 3);
    }
    pop();
  }

  // only exists if the building is wide enough
  AdSingsAtTop() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(163, 86, 235);
    if (this.buildingW > 70) {
      rect(this.buildingW / 5, -this.buildingH + 1, 2, 5);
      rect(this.buildingW * 4 / 5, -this.buildingH + 1, 2, 5);
      rect(this.buildingW / 16, -this.buildingH + 6, this.buildingW * 7 / 8, 20);
      fill(255);
      textFont("Courier New");
      textAlign(CENTER);
      text("X S W L", this.buildingW / 2, -this.buildingH + 20);
    }
    pop();
  }
}


class ariplanes {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.speedX = 0;

  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(86, 103, 110);

    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(60, 0);
    curveVertex(65, -10);
    curveVertex(15, -10);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();

    if (millis() % 4000 > 2000) {
      fill(255, 6, 27);
    } else {
      fill(86, 103, 110);
    }
    circle(20, -3, 3);

    if (millis() % 4000 > 2000) {
      fill(255, 246, 6);
    } else {
      fill(86, 103, 110);
    }
    rect(45, -10, 25, 2);
    fill(255, 255, 255, 100);
    circle(65, -5, 3);
    pop();
  }

  update() {

    if (this.y < 0.1 * windowHeight) {
      this.speedX = -1;
    } else {
      this.speedX = -0.7;
    }

    // if (this.x < -100) {
    //   this.x = windowWidth + random(100, 200);
    // }

    this.x += this.speedX;
  }
}


class LowBuildings {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.buildingH = random(windowHeight * 0.3, windowHeight * 0.5);
    this.buildingW = random(80, 150);
    this.color = random(1, 2);
    this.R = random(0, 255);
    this.G = random(0, 255);
    this.B = random(0, 255);
    this.onCanvas = true;

  }
  update() {
    if (this.x > windowWidth) {
      this.onCanvas = false;
    }
    if (move == true) {
      this.x += 0.3;
    }

  }
  display() {
    push();
    translate(this.x, this.y);
    stroke(this.R, this.G, this.B);
    fill(4, 16, 43);
    rect(0, 0, this.buildingW, -this.buildingH, 0, 0, 5, 5);
    pop();
  }

  AdSingsAtTwoSides() {
    push();
    translate(this.x, this.y);
    push();
    translate(this.buildingW, -this.buildingH + 50);
    fill(255);
    noStroke();
    if (this.buildingW > 120) {
      fill(1, 43, 42);
      rect(1, 0, this.buildingW / 12 - 1, 4);
      rect(1, 90, this.buildingW / 12 - 1, 4);
      stroke(this.R, this.G, this.B);
      fill(33, 233, 187);
      rect(this.buildingW / 12 + 1, -10, 23, 110, 3, 3, 3, 3);
    }
    pop();
    pop();
  }

  Windows() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(250, 209, 61);
    for (let j = 0; j < (this.buildingH - windowHeight * 0.15) / 40; j++) {
      for (let i = 0; i < this.buildingW / 20; i++) {
        // let lightOn=random(0,10);
        // if(lightOn < 3){
        //   fill(250, 209, 61);
        // }else{
        //   noFill();
        // }
        rect(10 + 15 * i, -this.buildingH + 10 + 30 * j, 3, 3);
      }
    }
    pop();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}