var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
var apple_sprites = Math(random(1,3));

 var select_sprites = Math.random(random(1,3));

 var select_sprites = Math.round(1,3);

 var select_sprites = Math.round(random(1,3));

  
    if (frameCount / 80 == 0) {
     if (select_sprites == 1) {
     createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
     createRed();
     }
   }
 
  redL.velocityY = 3;
  redL.lifetime = 150;
}
