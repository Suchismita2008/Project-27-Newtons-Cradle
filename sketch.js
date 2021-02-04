
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof1 = new roof(400, 200, 600, 50);
	rope1 = new rope(bob1.body, roof1.body, -bobDiameter*2, 0);
	rope2 = new rope(bob2.body, roof1.body, -bobDiameter*2, 0);
	rope3 = new rope(bob3.body, roof1.body, -bobDiameter*2, 0);
	rope4 = new rope(bob4.body, roof1.body, -bobDiameter*2, 0);
	rope5 = new rope(bob5.body, roof1.body, -bobDiameter*2, 0);
	bob1 = new bob(220, 600);
	bob2 = new bob(310, 600);
	bob3 = new bob(400, 600);
	bob4 = new bob(490, 600);
	bob5 = new bob(580, 600);
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);

  rope1.display();
  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



