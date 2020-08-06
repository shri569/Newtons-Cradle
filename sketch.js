
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,200,20,100);

	bobObject1 = new Bob(200,200,50,50);
	bobObject2 = new Bob(300,200,50,50);
	bobObject3 = new Bob(400,200,50,50);
	bobObject4 = new Bob(500,200,50,50);
	bobObject5 = new Bob(600,200,50,50);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



