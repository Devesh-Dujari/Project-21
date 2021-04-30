var blueBlock, orangeBlock, redBlock, greenBlock;
var ball, edges;
var music;

function preload() {

  music = loadSound("music.mp3");

}

function setup() {
  createCanvas(800, 600);

  blueBlock = createSprite(0, 580, 360, 30);
  blueBlock.shapeColor = "blue";

  orangeBlock = createSprite(295, 580, 200, 30);
  orangeBlock.shapeColor = "orange";

  redBlock = createSprite(510, 580, 200, 30);
  redBlock.shapeColor = "red";
  
  greenBlock = createSprite(725, 580, 200, 30);
  greenBlock.shapeColor = "green";

  ball = createSprite(random(20, 750), 100, 40, 40);
  ball.shapeColor = "white";
  ball.velocityX = 5;
  ball.velocityY = 5;

}

function draw() {
  background(rgb(169, 169, 169));
  edges = createEdgeSprites();
  ball.bounceOff(edges);


  //write code to bounce off ball from the blueBlock.
  if (blueBlock.isTouching(ball) && ball.bounceOff(blueBlock)) {
    ball.shapeColor = "blue";
    ball.bounceOff(blueBlock);
    music.play();
  }

  if (orangeBlock.isTouching(ball)) {
    ball.shapeColor = "orange";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.pause();
  }

  if (redBlock.isTouching(ball) && ball.bounceOff(redBlock)) {
    ball.shapeColor = "red";
    ball.bounceOff(blueBlock);
    music.play();
  }

  if (greenBlock.isTouching(ball) && ball.bounceOff(greenBlock)) {
    ball.shapeColor = "green";
    ball.bounceOff(blueBlock);
    music.play();
  }

  drawSprites();
}