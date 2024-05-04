let faces = [];
let numFaces = 4;
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  for (let i = 0; i < numFaces; i++) {
    faces.push(new Face(random(width),
      random(height)));
  }
}
function draw() {
  background(180);
  for (let i = 0; i < faces.length; i++) {
    faces[i].update();
    faces[i].display();
  }

  for (let i = faces.length - 1; i >= 0; i--) {
    if (faces[i].alive == false) {
      faces.splice(i, 1);
    }
  }
}
class Face {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.offsetX = 0;
    this.oscillationOffset = random(2 * PI);
    this.speedFactor = random(0.1, 0.3);
    this.normalColor = color(220, 250, 90);
    this.angryColor = color(255, 90, 29);
    this.c = this.normalColor;
    this.birth = frameCount;
    this.age = 0;
    this.mouseDist = 0;
    this.dia = 50;
    this.alive = true;

  } 
  update() {
    this.offsetX = map(sin((frameCount + this.oscillationOffset) * this.speedFactor), -1, 1, -20, 20);
    this.age = frameCount - this.birth;
    // if(this.age == 400 ){
    //   this.trunAngry();
    // }
  }
  display() {
    push();
    translate(this.x + this.offsetX, this.y);
    noStroke();

    fill(this.c);
    circle(0, 0, this.dia);
    fill(0);
    circle(-10, -10, 5);
    circle(10, -10, 5);
    ellipse(0, 10, 8, 9);
    text(this.age, 10, 10);
    pop();
  }

  trunAngry() {
    this.c = this.angryColor;
  }

  checkMouse() {
    this.mouseDist = dist(this.x + this.offsetX, this.y, mouseX, mouseY);
    if (this.mouseDist < this.dia / 2) {
      // this.trunAngry();
      this.alive = false;
    }
  }
}

function mousePressed() {
  for (let i = 0; i < faces.length; i++) {
    //   faces[i].trunAngry();
    faces[i].checkMouse();
  }
  // faces.push(new Face(mouseX, mouseY));

}


function keyPressed() {
  // faces.push(new Face(mouseX, mouseY));

}




