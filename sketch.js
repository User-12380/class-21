var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200,200,50,50);
  fixedRect.shapeColor='green'
  fixedRect.debug=true;
  movingRect= createSprite(400,100,80,30);
  movingRect.shapeColor='green'
  movingRect.debug=true;

obj1=createSprite(100,100,50,50);
obj1.shapeColor="green";
obj2=createSprite(200,100,50,50);
obj2.shapeColor="green";


}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,obj1)){
    obj1.shapeColor='red'
    movingRect.shapeColor='red'
  }
else{
  obj1.shapeColor='green'
  movingRect.shapeColor='green'
}

  drawSprites();
}

