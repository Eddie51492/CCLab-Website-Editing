let NumConBuilding = 50;
let Conbuilding = [];

let NowBlockX;
let NowBlockY;

let FutureBlockX;
let FutureBlockY;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  for (let i = 0; i < NumConBuilding; i++) {
    Conbuilding.push(new ConBuildings(random(width), random(height)));
  }

  NowBlockX = random(0, windowWidth / 4);
  NowBlockY = random(0, windowHeight / 4);

  FutureBlockX = random(windowWidth / 2, windowWidth - 30);
  FutureBlockY = random(windowHeight / 2, windowHeight - 100);
}

function draw() {
  background(220);

  for (let i = 0; i < Conbuilding.length; i++) {
    Conbuilding[i].display();
  }

  if (millis() % 8000 > 6000 && Conbuilding.length < 3000) {
    Conbuilding.push(new ConBuildings(random(width), random(height)));
  }

  // take you to now page
  stroke(12, 203, 12);
  if (mouseX > NowBlockX && mouseX < NowBlockX + 30 && mouseY > NowBlockY && mouseY < NowBlockY + 100) {
    fill(20, 130, 213);
  } else {
    fill(52, 95, 23);
  }
  rect(NowBlockX, NowBlockY, 30, 100);

  // take you to future page
  stroke(12, 203, 12);
  if (mouseX > FutureBlockX && mouseX < FutureBlockX + 30 && mouseY > FutureBlockY && mouseY < FutureBlockY + 100) {
    fill(251, 236, 22);
  } else {
    fill(52, 95, 23);
  }
  rect(FutureBlockX, FutureBlockY, 30, 100);
}

function mousePressed() {
  if (mouseX > NowBlockX && mouseX < NowBlockX + 30 && mouseY > NowBlockY && mouseY < NowBlockY + 100) {
    window.location.href = "Now";
  }

  if (mouseX > FutureBlockX && mouseX < FutureBlockX + 30 && mouseY > FutureBlockY && mouseY < FutureBlockY + 100) {
    window.location.href = "Future";
  }

  for (let i = 0; i < 10; i++) {
    Conbuilding.push(new ConBuildings(random(width), random(height)));
  }

}


class ConBuildings {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.buildingH = random(50, 200);
    this.builidngW = random(10, 50);
  }
  update() {

  }
  display() {
    push();
    translate(this.x, this.y);
    stroke(12, 203, 12);
    fill(52, 95, 23);
    rect(0, 0, this.builidngW, this.buildingH);
    pop();
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}