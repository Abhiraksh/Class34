const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine, box1, ground1,ball1,rope1,block;


function setup() {
  createCanvas(1500,1200);
 
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(750,1100,1500,30);
  block = createSprite(200,200,10,10);
  ball1 = new ball(200,200,50);
  box1 = new box(100,100);
  rope1 = new rope(block,{x: 100,y:200});

}

function draw() {
  background("lime");
  Engine.update(engine);
  
  ground1.display();
  ball1.display();
 box1.display();

  drawSprites();
}