/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new EddieDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class EddieDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.armColor = 0;
    this.armAngle = 20;
    this.armAngleSpeed = 1;
    this.legAngle = 5;
    this.legAngleSpeed = 1;
    this.frontLegAngle = 37.5;
    this.frontLegAngleSpeed = 1.5;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // the color of arms will change
    if (this.armColor >= 255) {
      this.armColor -= 255;
    }
    this.armColor++;

    // the arms rotates around each joint
    if (this.armAngle >= 40) {
      this.armAngleSpeed = -1;
    }
    if (this.armAngle <= -5) {
      this.armAngleSpeed = 1;
    }
    this.armAngle += this.armAngleSpeed

    //  the legs rotate around each joint
    if (this.legAngle >= 25) {
      this.legAngleSpeed = -1;
    }
    if (this.legAngle <= -20) {
      this.legAngleSpeed = 1;
    }
    this.legAngle += this.legAngleSpeed

    // front legs rotate in a particular speed
    if (this.frontLegAngle >= 67.5) {
      this.frontLegAngleSpeed = -1.5;
    }
    if (this.frontLegAngle <= 0) {
      this.frontLegAngleSpeed = 1.5;
    }
    this.frontLegAngle += this.frontLegAngleSpeed


    // update properties here to achieve
    // your dancer's desired moves and behaviour

  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    noStroke();

    // head
    ellipse(0, -30, 30, 35);
    fill(0);
    // eyes
    circle(-7, -35, 5);
    circle(7, -35, 5);
    fill("white");
    noStroke();
    // body
    triangle(0, -30, -15, 35, 15, 35);
    strokeWeight(1);
    stroke(0);

    // nose
    line(0, -32, 0, -26);
    stroke(0);

    // mouth
    beginShape();
    curveVertex(-9, -25);
    curveVertex(-9, -25);
    curveVertex(-8, -21);
    curveVertex(-9, -18);
    curveVertex(-9, -18);
    endShape();
    beginShape();
    curveVertex(-8, -21);
    curveVertex(-8, -21);
    curveVertex(-1, -23);
    curveVertex(11, -20);
    curveVertex(11, -20);
    endShape();
    stroke(255);
    strokeWeight(2);


    // right leg
    push();
    translate(5, 35);
    rotate(radians(this.legAngle));
    line(0, 0, 10, 25);
    push();
    translate(10, 25);
    rotate(radians(this.frontLegAngle));
    line(0, 0, -3, 25);
    line(-3, 25, 0, 28);
    pop();
    pop();
    // line(5, 35, 15, 60);
    // line(15, 60, 12, 85);
    // line(12, 85, 15, 88);


    // left leg
    push();
    translate(-5, 35);
    rotate(radians(this.legAngle));
    line(0, 0, 0, 25);
    push();
    translate(0, 25);
    rotate(radians(this.frontLegAngle));
    line(0, 0, -3, 25);
    line(-3, 25, 0, 28);
    pop();
    pop();
    // line(-5, 35, -5, 60);
    // line(-5, 60, -8, 85);
    // line(-8, 85, -5, 88);


    stroke(this.armColor, 20, 120);
    // right arm
    push();
    translate(6, -6);
    rotate(radians(this.armAngle));
    line(0, 0, 14, 31);
    push();
    translate(14, 31);
    rotate(radians(this.armAngle + 25));
    line(0, 0, -5, -20);
    pop();
    pop();
    // line(6, -6, 20, 25);
    // line(20, 25, 15, 5);


    // left arm
    push();
    translate(-6, -6);
    rotate(radians(this.armAngle));
    line(0, 0, -14, 31);
    push();
    translate(-14, 31);
    rotate(radians(this.armAngle - 20));
    line(0, 0, 15, -15);
    pop();
    pop();
    // line(-6, -6, -20, 25);
    // line(-20, 25, -5, 10);


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
    }
    // drawReferenceShapes() {
    //   noFill();
    //   stroke(255, 0, 0);
    //   line(-5, 0, 5, 0);
    //   line(0, -5, 0, 5);
    //   stroke(255);
    //   rect(-100, -100, 200, 200);
    //   fill(255);
    //   stroke(0);
    // }




  }



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/