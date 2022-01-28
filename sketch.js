var balloon, balloonImg;
var ground, groundImg;
var topGround, bottomGround;
var obstacleTop, obstacleTopImg, topObstaclesGroup, obstacleTop1, obstacleTop2;
var obstacleBottom, obstacleBottom1, obstacleBottom2, obstacleBottom3, bottomObstaclesGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0

function preload() {
  balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
  groundImg = loadImage("assets/bg.png");
  obstacleBottom1 = loadImage("assets/obsBottom1.png")
  obstacleBottom2 = loadImage("assets/obsBottom2.png")
  obstacleBottom3 = loadImage("assets/obsBottom3.png")
  obstacleTop1 = loadImage("assets/obsTop1.png")
  obstacleTop2 = loadImage("assets/obsTop2.png")
}


function setup() {
  createCanvas(750, 417);
  ground = createSprite(150, 250, 1, 1);
  ground.addImage(groundImg);

  topGround = createSprite(200, 390, 800, 20);
  topGround.visible = false

  bottomGround = createSprite(200, 10, 800, 20);
  bottomGround.visible = false

  balloon = createSprite(100, 200, 20, 50);
  balloon.addAnimation("balloon", balloonImg)
  balloon.scale = 0.3

  topObstaclesGroup=new Group();
  bottomObstaclesGroup=new Group();
}

function draw() {
  background(0);
  if (keyDown("space")) {
    balloon.velocityY = -6;
  }
  balloon.velocityY = balloon.velocityY + 2
  spawnObstaclesBottom();
  spawnObstaclesTop();
  drawSprites();
}


function spawnObstaclesTop() {
  if (World.frameCount % 60 === 0) {
    obstacleTop = createSprite(750, 50, 40, 50);
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;
    obstacleTop.y = Math.round(random(10, 100))

    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1: obstacleTop.addImage(obstacleTop1);
        break;

      case 2: obstacleTop.addImage(obstacleTop2);
        break;

      default: break;
    }
    obstacleTop.lifetime = 800;
    balloon.depth = balloon.depth + 1;
    topObstaclesGroup.add(obstacleTop);

  }
}

function spawnObstaclesBottom() {
  if (World.frameCount % 60 === 0) {
    obstacleBottom = createSprite(750, 350, 40, 50);
    obstacleBottom.addImage(obstacleBottom1)
    obstacleBottom.scale = 0.07;
    obstacleBottom.velocityX = -4;

    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1: obstacleBottom.addImage(obstacleBottom1);
        break;

      case 2: obstacleBottom.addImage(obstacleBottom2);
        break;

      case 3: obstacleBottom.addImage(obstacleBottom3);
        break;

      default: break;
    }
    obstacleBottom.lifetime = 800;
    balloon.depth = balloon.depth + 1;
    bottomObstaclesGroup.add(obstacleBottom);

  }
}


