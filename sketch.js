var path,pathImg
var boy,boyImg,lboundary,rboundary
function preload(){
  //pre-load images
 pathImg=loadImage("path.png")
boyImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY=1.2

boy=createSprite(180,340,30,30)
boy.addAnimation("running",boyImg)
boy.scale=0.08

lboundary=createSprite(0,0,100,800)
lboundary.visible=false
rboundary=createSprite(410,0,100,800)
rboundary.visible=false
}

function draw() {
  background(0);
  boy.x=World.mouseX
  boy.collide(lboundary)
  boy.collide(rboundary)
if(path.y>400){
  path.y=200
}



  drawSprites();
}
