var man,man_running;
var path,pathImg;
var invisibleLeft,invisibleRight;

function preload(){
  //pre-load images
  man_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  
  path.scale = 1.2;

  man = createSprite(200,350,20,50)
  man.addAnimation("running",man_running)
  man.scale = 0.1;

  invisibleLeft = createSprite(350,190,400,20);
  invisibleLeft.visible = false

  invisibleRight = createSprite(50,190,400,20);
  invisibleRight.visible = false

  

 

}

function draw() {
  background(0);

  drawSprites();

  path.velocityY = 4;

  if(path.y > 400) {
    path.y = height/2;
    path.velocityY = 4;
  }

  man.x = World.mouseX;
  man.collide(invisibleLeft);
  man.collide(invisibleRight);
}
