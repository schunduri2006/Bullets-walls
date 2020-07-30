var thickness,wall

var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  
  bullet = createSprite(50,200,30,10);
  bullet.shapeColor = ("white");
  wall = createSprite(1200,200,thickness,height/2);

  wall.shapeColor = (rgb(80,80,80));
  
  bullet.velocityX = speed;
}

function draw() {
 
  background(0);  
  if(bullet.isTouching(wall))
  {
    bullet.velocityX = 0;
    var damage = weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }


  
  drawSprites();
}

