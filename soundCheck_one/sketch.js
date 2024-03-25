let kickSound;
let x =50;
let xspeed=2;
function preload(){
kickSound = loadSound("sounds/beat.mp3");
}
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  
}

function draw() {
  background(200);
  circle(x,50,50);
  if(x>width || x<0){
    xspeed= -xspeed;
    kickSound.play();
  }
  x+=xspeed;
}
