var jet,jetImg;
var asteroidImg;
var distance = 0;
var asteroidGroup;
var bg;

function preload()
{
  bg = loadImage("bg.jpg");
  jetImg = loadImage("jet.png");
  asteroidImg = loadImage("asteroid.png");
}

function setup()
{
  canvas = createCanvas(400,400);

  jet = createSprite(200,200,50,20);
  jet.addImage(jetImg);
  jet.scale = 0.5;
  jet.setCollider("rectangle",0,0 , 180, 180);

  asteroidGroup = new Group();
  coinGroup = new Group();
}

function draw() 
{  
  background(bg)

  camera.position.x=jet.x;
  camera.position.y=jet.y;

  jet.velocityX=0;
  jet.velocityY=0;


  if(keyDown(UP_ARROW))
  {
    jet.velocityY=-3;
    distance++
  }

  if(keyDown(RIGHT_ARROW))
  {
    jet.velocityX=3;
  }

  if(keyDown(LEFT_ARROW))
  {
    jett.velocityX=-3;
  }

  spawnObstacles();

  drawSprites();

  if(asteroidGroup.isTouching(jet))
  {
    textSize(30);
    fill(255);
    text("Game Over",jet.x,jet.y);
    asteroidGroup.setVelocityYEach(0);
    jet.velocityX=0;
    jet.velocityY=0;
  }  
}

  function spawnObstacles()
  {
    if(frameCount % 100 === 0)
    {
    var asteroid = createSprite(random(0,300),0,20,20);
    asteroid.addImage(asteroidImg);
    asteroid.scale=0.5;
    asteroid.lifetime=200;
    asteroid.velocityY=3;
    asteroid.debug=true;
    asteroid.setCollider("rectangle",0,0 , 160, 120)
    asteroidGroup.add(asteroid);
    }
  }