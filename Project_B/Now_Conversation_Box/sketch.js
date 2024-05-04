let numConversation = 10;
let conversations = [];
let description = false;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  contentInput();
}

function draw() {
  background(243);
  strokeWeight(1);
  if (description == false) {
    push();
    textAlign(CENTER);
    textFont("Courier New");
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
  fill(243);
  rect(0, 0, windowWidth, windowHeight / 8);
  stroke(224);
  strokeWeight(5);
  line(0, windowHeight / 8, windowWidth, windowHeight / 8);
  stroke(0);
  strokeWeight(2);
  line(windowWidth / 8, windowHeight / 20, windowWidth / 10, windowHeight / 16);
  line(windowWidth / 8, windowHeight / 16 + (windowHeight / 16 - windowHeight / 20), windowWidth / 10, windowHeight / 16)
  fill(0);
  for (let i = 0; i < 3; i++) {
    circle(windowWidth * 5 / 6 + i * 20, windowHeight / 16, 10);
  }
  push();
  textAlign(CENTER);
  noStroke();
  fill(0);
  textSize(24);
  text("Me", windowWidth / 2, windowHeight / 13);
  pop();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    for (let i = 0; i < conversations.length; i++) {
      conversations[i].moveUp();
    }
  }

  if (keyCode === DOWN_ARROW) {
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
    text("👨‍🦳", 0, 0);
    pop();

    push();
    translate(windowWidth - 35, 20 + 3 * this.columnL / 2);
    scale(3);
    text("🧑", 0, 0);
    pop();

    // decoration
    noStroke();
    fill(255);
    triangle(50, this.columnL / 2 - 28, 50, this.columnL / 2 - 8, 38, this.columnL / 2 - 18);
    fill(149, 236, 105);
    triangle(windowWidth - 50, 3 * this.columnL / 2 - 8, windowWidth - 50, 3 * this.columnL / 2 + 12, windowWidth - 38, 3 * this.columnL / 2 + 2);

    // decorations of the column box
    fill(255);
    rect(50, 0, this.columnW, this.columnL, 5, 5, 5, 5);
    fill(149, 236, 105);
    rect(windowWidth - 50, 20 + this.columnL, -this.columnW, this.columnL, 5, 5, 5, 5);
    fill(255, 0, 0);

    // context
    textSize(16);
    noStroke();
    fill(0);
    textWrap(CHAR);
    text(this.Itext, 53, 3,this.columnW-6,this.columnL-6);
    // text(this.Itext2, 52, 60);
    text(this.Theytext, windowWidth - 47 - this.columnW, 23 + this.columnL,this.columnW-6,this.columnL-6);
    pop();


  
  }
}


// i will add the content of the conversation here.
function contentInput() {
  conversations.push(new Conversation(0, windowHeight + 200 * 0, "We are almost there, Ming! This is the last week of the term! We have a three-month holiday!", "Almost? But I feel like I can't make it. I'm almost beaten by those      annoying codes!"));

  conversations.push(new Conversation(0, windowHeight + 200 * 1, "Come on, don't be so pessimistic, think about how free we will be       then!", "Free? To be honest, I never feel     that anyway. I feel like I'm a small bird inside a huge cage."));

  conversations.push(new Conversation(0, windowHeight + 200 * 2, "Why? Look at our cities.                Thousands of houses, coloful cars...Better than small towns at least.", "Ops. I don't want my city so          crowded. There are always traffic  jams!"));

  conversations.push(new Conversation(0, windowHeight + 200 * 3, "How about those high-rises? Do   they attract you?", "Not a bit. They look so simple and the tone is always grey. Indeed, it's not taht tall at all."));

  conversations.push(new Conversation(0, windowHeight + 200 * 4, "emm... You don't seem like enjoy     living here...", "Probably... Who knows. I often        have dreams about how people       will live in future."));

  conversations.push(new Conversation(0, windowHeight + 200 * 5, "O? What's in the dream then? Let me guess... Where people become robots? Cyberpunk style?...", "Well, I don't have a clear image.     But I agree with you for most of   the part."));

  conversations.push(new Conversation(0, windowHeight + 200 * 6, "But you know, cyberpunk is             considered as places where        poverty and crime is everywhere.", "Aughhh... Not that bad. I just like     its style and vibe!"));

  conversations.push(new Conversation(0, windowHeight + 200 * 7, "You must have underestimated the true essence of cyberpunk. You    will never like it if you are in there!", "HA HA. Maybe you are right. But     those day won't be ours. It belongs to the future"));

  conversations.push(new Conversation(0, windowHeight + 200 * 8, "I'm so surprised to see that you       divided now  and future apart so clearly.", "Then I don't need to consider all     these stuff around me if I [travel]   to the future and [live] there."));

  conversations.push(new Conversation(0, windowHeight + 200 * 9, "[Do not go gentle into that good     night]", "I must have a try if there's a           chance to do so."));

  conversations.push(new Conversation(0, windowHeight + 200 * 10, "HA HA HA. Good luck then. Also   good luck on your final week!", "......"));

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}