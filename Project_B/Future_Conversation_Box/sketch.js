let numConversation = 10;
let conversations = [];
let description = false;
// let gateY;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  contentInput();
  // gateY= 2260+windowHeight;
}

function draw() {
  background(18, 49, 80);

  strokeWeight(1);
  fill(0, 255, 140);
  if (description == false) {
    push();
    textAlign(CENTER);
    textSize(14);
    text("click your mouse or use up&down arrows", windowWidth / 2, windowHeight / 2);
    text("to check the conversation", windowWidth / 2, windowHeight / 2 + 20);
    pop();
  }
  if (mouseIsPressed === true) {
    description = true;
  }

  for (let i = 0; i < conversations.length; i++) {
    conversations[i].display();
    conversations[i].update();
  }

  noStroke();
  fill(255, 0, 115);
  rect(windowWidth / 6, 0, windowWidth / 32, 20);
  rect(windowWidth * 5 / 6, 0, -windowWidth / 32, 20);
  rect(windowWidth / 13, 20, windowWidth * 11 / 13, windowHeight / 8, 5, 5, 5, 5);

  // stroke(0, 255, 140);
  fill(0, 255, 140);
  textFont("Courier New");
  push();
  textSize(28);
  textAlign(CENTER);
  text("CONVERSATION BOX", windowWidth / 2, windowHeight / 9);
  pop();

  // this does not work 
  // drawGate();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    // gateY -= 100;
    for (let i = 0; i < conversations.length; i++) {
      conversations[i].moveUp();
    }
  }

  if (keyCode === DOWN_ARROW) {
    // gateY += 100;
    for (let i = 0; i < conversations.length; i++) {
      conversations[i].moveDown();
    }
  }

}


class Conversation {
  constructor(startX, startY, Iword, Theyword) {
    this.x = startX;
    this.y = startY;
    this.Itext = Iword;
    this.Theytext = Theyword;
    this.columnL = 80;
    this.columnW = 3 * windowWidth / 4 + 5;

  }

  update() {
    if (mouseIsPressed == true) {
      this.y = this.y - 10;
    }
  }

  moveUp() {
    this.y = this.y - 100;
  }

  moveDown() {
    this.y = this.y + 100;
  }

  display() {
    push();
    translate(this.x, this.y);

    // photo
    push();
    translate(0, this.columnL / 2);
    scale(3);
    text("🤖", 0, 0);
    pop();

    push();
    translate(windowWidth - 40, 20 + 3 * this.columnL / 2);
    scale(3);
    text("🧑", 0, 0);
    pop();

    // decoration
    noStroke();
    fill(255, 0, 115);
    triangle(50, this.columnL / 2 - 28, 50, this.columnL / 2 - 8, 38, this.columnL / 2 - 18);
    fill(1, 199, 190);
    triangle(windowWidth - 50, 3 * this.columnL / 2 - 8, windowWidth - 50, 3 * this.columnL / 2 + 12, windowWidth - 38, 3 * this.columnL / 2 + 2);

    // decorations of the column box
    fill(4, 16, 43);
    strokeWeight(1);
    stroke(255, 0, 115);
    rect(50, 0, this.columnW, this.columnL, 5, 5, 5, 5);
    stroke(1, 199, 190);
    rect(windowWidth - 50 - this.columnW, 20 + this.columnL, this.columnW, this.columnL, 5, 5, 5, 5);
    // rect(windowWidth-50,20+this.columnL, -this.columnW,this.columnL,5,5,5,5);



    // context
    textSize(16);
    noStroke();
    // textStyle(BOLD);
    textWrap(CHAR);
    fill(255, 0, 115);
    text(this.Itext, 53, 3,this.columnW-6,this.columnL-6);
    fill(1, 199, 190);
    text(this.Theytext, windowWidth -47  - this.columnW, 23 + this.columnL,this.columnW-6,this.columnL-6);
    pop();
  }
}


// i will add the content of the conversation here.
function contentInput() {
  conversations.push(new Conversation(0, windowHeight + 200 * 0, "Oh! We got a new comer!     Welcome to our city, Ming!", "Wow, I eventually get here! Quite in line with my     imagination!"));

  conversations.push(new Conversation(0, windowHeight + 200 * 1, "Hia hia hia Exactly. This  is what you always dreamed of.", "What?...Wait! That couldn't be... How do you know my  name... and my dream!!?"));

  conversations.push(new Conversation(0, windowHeight + 200 * 2, "Well..That's beyond your   knowlege.  I read from your little [MIND]!", "From my mind? By 'advanced' tech? How dare you hack   others!"));

  conversations.push(new Conversation(0, windowHeight + 200 * 3, "Stupid boy.You never       observe with care. Let me  tell you something.", "......"));

  conversations.push(new Conversation(0, windowHeight + 200 * 4, "Never noticed this city? So few people live here.", "hummm, to be more specific, it's only one 'person'--- you!"));

  conversations.push(new Conversation(0, windowHeight + 200 * 5, "Exactly! There's only me in this future city. I charge everything!", "It really looks the same as in my dream, are you      stealing my mind?"));

  conversations.push(new Conversation(0, windowHeight + 200 * 6, "Don't be so rude. It's 'use'. How can I steal from    myself?", "Lights, flying crafts, even the sound feels the same! You really.."));

  conversations.push(new Conversation(0, windowHeight + 200 * 7, "Can't deny it. I only      reflect your mind.Your     blueprint of future city.", "My imagination?...Is it a  dream at all? Even include you?"));

  conversations.push(new Conversation(0, windowHeight + 200 * 8, "Hahaha..You finally realize it, my boy.You dream it   day and night.", "It looks so empty. I don't even have freinds to talk  to..."));

  conversations.push(new Conversation(0, windowHeight + 200 * 9, "No friends, no schools, no more pressure... Even no CCLab", "That's not what I want...I'd be bored to death! I want escape!"));

  conversations.push(new Conversation(0, windowHeight + 200 * 10, "How can you escape from    yourself? You shall suffer endless void!...", "No! I would NEVER! Let me  out of here!!!..."));

}

// function drawGate() {
//   if (mouseIsPressed == true) {
//     gateY -= 10;
//   }
//   push();
//   translate(windowWidth / 2, gateY);
//   fill(0,0,255);
//   circle(0,0,100);
//   fill(255, 0, 0);
//   circle(0, 0, 10);
//   pop();
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}