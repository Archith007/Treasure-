var bg,bg2,form,system,code,security;
var answer1, answer2, answer3

var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

}

function draw() {
  background(bg);
  clues();
  security.display();

  fill("white")
  textSize(22)
  text("Score: " + score, 700, 425)


  if (score === 3){
    background(bg2)
    fill("white")
    textSize(90)
    textAlign(CENTER)
    text("YOU WIN", 500, 250)

    
  }


  drawSprites()
}