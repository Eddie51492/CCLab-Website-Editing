let mb;

let sObjects = [];

function setup() {
  let canvas = createCanvas(windowWidth, 400);
  canvas.parent("canvasContainer");
  

  mb = new MovingBall(width/2, height/2);
  

}

function draw() {
  background(0);

  mb.update();
  mb.display();


  for(let i = 0 ; i < sObjects.length;i++){
    sObjects[i].update();
    sObjects[i].display();
    sObjects[i].checkColision();
  }

}

class SoundObject{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.osc = new p5.Oscillator("sine");
    this.timeOfLastPlay = 0;
    this.playing = false;
    this.duration = 100;
    this.freq = random(50,500);
    this.osc.freq(this.freq);
    this.dia = map(this.freq,50,500,90,10);
    this.touched = false;
  }
  update(){
    if(millis() > this.timeOfLastPlay + this.duration && this.playing == true){
      this.stopSound();
    }
  }
  display(){
    push();
    translate(this.x, this.y);
    let greyTone = map (this.osc.getAmp(),0,1,0,255);

    stroke(255);
    fill(greyTone);
    circle(0, 0, this.dia);
    pop();
  }

  playSound(){
    this.timeOfLastPlay = millis();
    this.osc.amp(1,0.2);
    this.playing = true;
    this.osc.start();
  }

  stopSound(){
    this.osc.amp(0,0.2);
    this.playing = false;
  }
  
  checkColision(){
    // distance between moving ball and soundobject
    let distance = dist(this.x,this.y,mb.x,mb.y);
    if(distance < this.dia/2 + mb.dia/2 && this.playing == false && this.touched == false){
      this.playSound();
      this.touched = true;
    }

    if(distance > this.dia/2 + mb.dia/2){
      this.touched = false;
    }






  }


}

class MovingBall{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.speedX = random(-8, 8);
    this.speedY = random(-8, 8);
    this.dia = 100;

  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x > width-this.dia/2 || this.x < this.dia/2){
      this.speedX = -this.speedX;
    }

    if(this.y > height-this.dia/2 || this.y < this.dia/2){
      this.speedY = -this.speedY;
    }
  }
  display(){
    push();
    translate(this.x, this.y);

    circle(0, 0, this.dia);

    pop();
  }
}

function mousePressed(){
  sObjects.push(new SoundObject(mouseX,mouseY));
}