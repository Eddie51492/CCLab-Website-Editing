let horseFrames = []; // array that will hold 9 images
let mic;
let horse1;
let Max_V=0;
let horses = [];

function preload(){
  for(let i = 0; i < 9; i++){
    let imgPath = "muybridge/muybridge_" + i + ".jpg";
    console.log(imgPath);
    let currentIMG = loadImage(imgPath);
    horseFrames.push(currentIMG)
  }
  console.log(horseFrames)
}

function setup() {
  let canvas = createCanvas(1000, 400);
  canvas.parent("canvasContainer");
  
  mic = new p5.AudioIn();
  mic.start();
  // horse1 = new Horse(0, height/2, 0.1, horseFrames);

  for(let i = 0 ; i < 4 ; i ++){
    horses.push(new Horse(0, 50+100*i, 0.1, horseFrames));
  }
}
function draw() {
  background(220);
  for(let i = 0 ; i < 4 ; i++){
    horses[i].update();
    horses[i].display();
   
  }
 

  let volume = mic.getLevel();
  text(volume,30,80);
  
  if(volume > Max_V){
    Max_V = volume;
  }
  text(Max_V,30,100);

  if(volume > 0.1 && horses[0].running==false){
    horses[0].start();
    horses[1].start();
    horses[2].start();
    horses[3].start();
  }




}

class Horse{
  constructor(startX, startY, s, frames){
    this.x = startX;
    this.y = startY;
    this.scaleFactor = s;
    this.speed = random(1, 5);
    this.frames = frames; // [img1, img2, img3, img4, ....]
    this.currentFrame = 0;
    this.running = false;
  }
  update(){
    // if we haven't rached the finish line
    if(this.x < width && this.running == true){
      this.x+=this.speed;

      // makes the frames move
      this.currentFrame+=0.5;
      if(this.currentFrame > 8){
        this.currentFrame = 0;
      }
    }

    
  }
  display(){
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor);

    
    let currentIMG = this.frames[floor(this.currentFrame)]
    image(currentIMG, -currentIMG.width/2, -currentIMG.height/2)
    rect(-20, -10, 40, 20);
    pop();
  }

  start(){
    this.running = true;
  }

}

// function mousePressed(){
//   horse1.start();
// }