
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papper1


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	papper1=new Papper(150,650,30)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  papper1.display();
  dustbinObj.display();
 

}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(papper1.body, papper1.body.position, {x:220,y:-200})
	}
}

