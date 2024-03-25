let instanceOfTaxi;
let instanceOfTaxi2;



function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer");
  instanceOfTaxi = new Taxi(150, 200, 1);
  instanceOfTaxi2 = new Taxi(200, 200, 0.5);
}

function draw() {
  background(90, 120, 250);




  instanceOfTaxi.display();
  instanceOfTaxi.update();


  instanceOfTaxi2.display();
  instanceOfTaxi2.update();
}



class Taxi {
  constructor(startX, startY, s) {
    this.x = startX;
    this.y = startY;
    this.speedX = random(-2, 2);
    this.s = s;
  }
  display() {
    push();
    translate(this.x, this.y);
    scale(this.s);
    // base:
    rect(-50, -50, 100, 30);
    // top"
    rect(-25, -70, 50, 20);
    // wheel 1:
    this.drawWheel(-30, -15);
    // wheel 2:
    this.drawWheel(30, -15);
    fill("red");
    circle(0, 0, 5);
    pop()
  }
  update() {

    this.x += this.speedX;
    if (this.x > width + 50) {
      this.x = 0 - 50
    } else if (this.x < 0 - 50) {
      this.x = width + 50
    }


  }
  drawWheel(x, y) {
    push();
    translate(x, y);
    // rotate(radians(angle));

    noStroke();
    fill(0);
    // circle(0,0,30);
    ellipse(0, 0, 28, 32)

    pop();
  }

}






