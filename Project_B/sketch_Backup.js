let NumConBuilding = 20;
let Conbuilding = [];





function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  for (let i = 0 ; i < NumConBuilding ; i ++){
    Conbuilding.push(new ConBuildings(random(width),random(height)));
  }
}

function draw() {
  background(220);
  //
  for (let i = 0; i< Conbuilding.length; i++){
    Conbuilding[i].display();
  }

  push()
  translate(width/2, height);

  

  pop();
}


class ConBuildings{
  constructor(startX,startY){
    this.x = startX;
    this.y = startY;
    this.buildingH = random(50,200);
    this.builidngW = random(10,50);
  }
  update(){

  }
  display(){
    push();
    translate(this.x, this.y);
    stroke(12,203,12);
    fill(52,95,23);
    rect(0,0,this.builidngW,this.buildingH);
    pop();
  }
}



function windowResized(){
  console.log("dnuiskjnd")
  resizeCanvas(windowWidth, windowHeight)
}