var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var appleImage
var leaf
var leafImage


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple ();
leaf ();
}


function draw() {
  background(0);
 rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  apple ()
  leaf() 
  
  drawSprites();

}

function apple () {
  if (frameCount % 80 === 0) {
    if (apple == 1 ) {
     apple ()
    }
    else{
     leaf()
    }
  }
   }

   function apple (){
    apple = createSprite (600,100,40,10)
    apple.velocityY = 3
    apple.addImage (appleImage)
    apple.scale = 0.4
    apple.y = Math.round (random(1,10)); 
   }

   function leaf () {
    leaf = createSprite (600,100,40,10)
    leaf.velocityY = 3
    leaf.addImage (leafImage)
    leaf.scale = 0.4
    leaf.y = Math.round (random(1,10));
   }