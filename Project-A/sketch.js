
let angle;
let rad;
let randompointx;
let randompointy;
let distancetocenter;
let creatureNum = 1;
let speedx = [];
let speedy = [];
let creaturex = [400];
let creaturey = [300];
let distances = [];
let dropperposition;
let rfactor = 173;
let gfactor = 255;
let bfactor = 47;
let day = false;
let size = 1;

function setup() {
  for (let i = 0; i < creaturex.length; i++) {
    distances.push([]);
    speedx.push(random(-1, 1));
    speedy.push(random(-1, 1));
  }
  noCursor();
  let cnv = createCanvas(800, 600);
  cnv.parent("p5-canvas-container")
  drawbackground();
  drawinstructions();
}
function drawbackground() {
  if (day == false) {
    background(3, 15, 106);
  } else {
    background(252, 240, 149);
  }
  //   color the boundary with different colors
  for (let i = 1; i < 9; i++) {
    angle = random(360);
    rad = radians(angle);
    noFill();
    strokeWeight(5);
    stroke(
      25 * noise(frameCount * 0.01) + 100,
      255 * noise(frameCount * 0.01),
      random(25)
    );
    arc(
      width / 2,
      height / 2,
      550,
      550,
      (i * 2 * PI) / 8,
      ((i + 1) * PI * 2) / 8
    );
  }

  //   random points outside of the petri dish
  if (day == false) {
    strokeWeight(1);
    stroke(0, 127, 255);
    for (let i = 0; i < 10000; i++) {
      randompointx = random(width);
      randompointy = random(height);
      distancetocenter = dist(
        randompointx,
        randompointy,
        width / 2,
        height / 2
      );
      if (distancetocenter > 277.5) {
        point(randompointx, randompointy);
      }
    }
  }

  //   a fliter of the petri dish
  fill(252, 240, 149);
  circle(400, 300, 550);
  fill(10, 100, 200, 30);
  noStroke();
  circle(width / 2, height / 2, 550);

  // some decorations outside of the petri dish
  fill(255, 69, 0);
  noStroke();
  rect(700, 20, 80, 80);
  fill(0, 255, 255);
  textSize(25);
  text("PH", 705, 50);

  //   scientist's hands
  fill(255, 218, 185);
  push();
  translate(20, 540);
  rect(0, 0, 15, 60, 20, 20, 0, 0);
  rect(15, -15, 15, 75, 20, 20, 0, 0);
  rect(30, -25, 15, 85, 20, 20, 0, 0);
  rect(45, -15, 15, 75, 20, 20, 0, 0);
  rect(60, 25, 15, 35, 20, 20, 0, 0);
  pop();
  push();
  translate(705, 540);
  rect(60, 0, 15, 60, 20, 20, 0, 0);
  rect(15, -15, 15, 75, 20, 20, 0, 0);
  rect(30, -25, 15, 85, 20, 20, 0, 0);
  rect(45, -15, 15, 75, 20, 20, 0, 0);
  rect(0, 25, 15, 35, 20, 20, 0, 0);
  pop();

  //    a set of concentric circles as a measurement
  noFill();
  strokeWeight(1);
  stroke(0, 30);
  for (let i = 4; i > 0; i -= 1) {
    circle(width / 2, height / 2, i * 100);
  }
  strokeWeight(20);
  point(width / 2, height / 2);
  textSize(15);
  strokeWeight(1);
  text("50", 350, height / 2 + 15);
  text("100", 400, height / 2 + 15);
  text("150", 450, height / 2 + 15);
  text("200", 500, height / 2 + 15);
}
function draw() {
  angle = noise(frameCount) * 360;
  drawrefreshingbackground();
  detecttime();
  drawsunandmoon();
  for (let i = 0; i < creaturex.length; i++) {
    calculatedistance();
    changespeed();
    changecolor();
    drawcreatures(creaturex[i], creaturey[i]);
    creaturex[i] += speedx[i];
    creaturey[i] += speedy[i];
  }
  drawdroppers();
  explode();
}
function drawrefreshingbackground() {
  //   a fliter of the petri dish
  fill(224, 224, 155);
  noStroke();
  circle(width / 2, height / 2, 545);

  //    a set of concentric circles as a measurement
  noFill();
  strokeWeight(1);
  stroke(0, 30);
  for (let i = 4; i > 0; i -= 1) {
    circle(width / 2, height / 2, i * 100);
  }
  strokeWeight(20);
  point(width / 2, height / 2);
  textSize(15);
  strokeWeight(1);
  text("50", 350, height / 2 + 15);
  text("100", 400, height / 2 + 15);
  text("150", 450, height / 2 + 15);
  text("200", 500, height / 2 + 15);
}
function detecttime() {
  if (key === "s") {
    day = true;
  } else if (key === "m") {
    day = false;
  }
}
function drawsunandmoon() {
  if (day == true) {
    background(252, 240, 149);
    drawbackground();
    noStroke();
    fill(255, 153, 51);
    circle(0, 0, 200);
    fill(255, 255, 0, 50);
    circle(0, 0, 100);
  } else {
    drawbackground();
    noStroke();
    fill(192, 192, 192);
    circle(0, 0, 200);
    noFill();
    stroke(150);
    strokeWeight(2);
    circle(20, 20, 25);
    strokeWeight(3);
    circle(70, 30, 35);
    circle(15, 80, 30);
    strokeWeight(1);
    circle(40, 60, 15);
  }
}
function calculatedistance() {
  for (let i = 0; i < creaturex.length; i++) {
    distances[i][0] = dist(
      400,
      300,
      creaturex[i] - 30 * size,
      creaturey[i] - 45 * size
    );
    distances[i][1] = dist(
      400,
      300,
      creaturex[i] + 30 * size,
      creaturey[i] - 45 * size
    );
    distances[i][2] = dist(
      400,
      300,
      creaturex[i] - 20 * size,
      creaturey[i] + 55 * size
    );
    distances[i][3] = dist(
      400,
      300,
      creaturex[i] + 20 * size,
      creaturey[i] + 55 * size
    );
    distances[i][4] = dist(400, 300, creaturex[i] - 65 * size, creaturey[i]);
    distances[i][5] = dist(400, 300, creaturex[i] + 65 * size, creaturey[i]);
  }
}
function changespeed() {
  //   the creature only moves in the petri dish
  for (let i = 0; i < creaturex.length; i++) {
    if (distances[i][0] > 272.5) {
      speedx[i] = abs(cos(radians(angle))) * 1.5;
      speedy[i] = abs(sin(radians(angle))) * 1.5;
    }

    if (distances[i][1] > 272.5) {
      speedx[i] = -abs(cos(radians(angle))) * 1.5;
      speedy[i] = abs(sin(radians(angle))) * 1.5;
    }

    if (distances[i][2] > 272.5) {
      speedx[i] = abs(cos(radians(angle))) * 1.5;
      speedy[i] = -abs(sin(radians(angle))) * 1.5;
    }

    if (distances[i][3] > 272.5) {
      speedx[i] = -abs(cos(radians(angle))) * 1.5;
      speedy[i] = -abs(sin(radians(angle))) * 1.5;
    }

    if (distances[i][4] > 272.5) {
      speedx[i] = abs(cos(radians(angle))) * 1.5;
    }

    if (distances[i][5] > 272.5) {
      speedx[i] = -abs(cos(radians(angle))) * 1.5;
    }
  }
}
function changecolor() {
  fill(rfactor, gfactor, bfactor);
  let dropperposition = dist(400, 300, mouseX, mouseY);
  if (mouseIsPressed === true && rfactor > 130 && dropperposition < 275) {
    rfactor -= 0.5;
    gfactor -= 3;
    bfactor -= 0.55;
  } else if (rfactor <= 173 || gfactor <= 255 || bfactor <= 47) {
    rfactor+=0.5;
    gfactor += 3;
    bfactor += 0.55;
  }
}
function drawcreatures(x, y) {
  push();
  noStroke();
  translate(x, y);
  alterscale();
  //   draw the creatures here
  ellipse(-40, 20, 10, 30);
  ellipse(40, 20, 10, 30);
  ellipse(-40, 0, 50, 10);
  ellipse(40, 0, 50, 10);
  ellipse(-20, 30, 20, 50);
  ellipse(20, 30, 20, 50);
  ellipse(-30, -30, 10, 30);
  ellipse(30, -30, 10, 30);
  ellipse(0, 0, 100, 50);
  fill("green");
  circle(20, 55, 5);
  circle(-20, 55, 5);
  circle(30, -45, 5);
  circle(-30, -45, 5);
  circle(-65, 0, 5);
  circle(65, 0, 5);
  pop();
}
function drawdroppers() {
  push();
  translate(mouseX, mouseY);
  fill(200);
  noStroke();
  circle(0, 0, 3);
  beginShape();
  vertex(0, 0);
  vertex(20, -30);
  vertex(75, -85);
  vertex(85, -75);
  vertex(30, -20);
  endShape(CLOSE);
  circle(80, -80, 30);
  pop();
}
function explode() {
  if (size >= 3 && creatureNum < 6) {
    creaturexone = creaturex[0];
    creatureyone = creaturey[0];
    creaturex.splice(0, 1);
    creaturey.splice(0, 1);
    speedx.splice(0, 1);
    speedy.splice(0, 1);
    distances.splice(0, 1);
    //     memorize previous creature
    creaturex.push(creaturexone - 10);
    creaturex.push(creaturexone + 10);
    creaturey.push(creatureyone - 10);
    creaturey.push(creatureyone + 10);
    speedx.push(random(-1, 0));
    speedx.push(random(1));
    speedy.push(random(-1, 0));
    speedy.push(random(1));
    distances.push([]);
    distances.push([]);
    creatureNum++;
    size = 1;
    //     add more creature
    //     no more than six creatures at the same time
  }
}
function alterscale() {
  //   the scale of the creature will change
  if (day === true && size <= 3) {
    size += 0.01;
  }
  if (day === false && size > 1) {
    size -= 0.01;
  }
  scale(size);
}
// function alterscale is nested in function drawcreatures

