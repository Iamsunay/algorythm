var fixedRect,movingRect



function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(100, 400, 50, 80);
  fixedRect.shapeColor='blue'
  movingRect=createSprite(300,400,80,50)
  movingRect.shapeColor='blue'
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor='red'
    fixedRect.shapeColor='red'
  }
  else{
    movingRect.shapeColor='blue'
    fixedRect.shapeColor='blue'
  }
  drawSprites();
}