
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bob;
var bob2;
var bob3;
var bob4;
var bob5;

var bob1Const;
var bob2Const;
var bob3Const;
var bob4Const;
var bob5Const;

var line;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.     
	bob = new Bob(100,200,50);
	bob2 = new Bob(200,200,50);
	bob3 = new Bob(300,200,50);
	bob4 = new Bob(400,200,50);
	bob5 = new Bob(500,200,50);

	
	 roof = new Roof(300,200,500,20);
	 bob1Const = new String(bob.body,  {x:100,y:200});
	 bob2Const = new String(bob2.body, {x:200,y:200});
	 bob3Const  = new String(bob3.body,{x:300,y:200});
	 bob4Const = new String(bob4.body, {x:400,y:200});
	 bob5Const = new String(bob5.body, {x:500, y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  roof.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  bob1Const.display();
  bob2Const .display();
  bob3Const.display();
  bob4Const.display();
  bob5Const.display();   
  drawSprites();   
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-800,y:900})
	}
}