var fixedrect,movingrect;

function setup()
{
  createCanvas(600,600);
  fixedrect=createSprite(200,200,50,50);
  movingrect=createSprite(300,200,50,50);

  fixedrect.shapeColor="blue";
  movingrect.shapeColor="blue";

  fixedrect.debug=true;
  movingrect.debug=true;
  
  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="blue";
  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="blue";
  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="blue";
  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="blue";
}

function draw() 
{
  background("gold"); 
  movingrect.x=mouseX;
  movingrect.y=mouseY; 

  if(isTouching(movingrect,gameobject3))
  {
    gameobject3.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else
  {
    gameobject3.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
  
  drawSprites();
}

