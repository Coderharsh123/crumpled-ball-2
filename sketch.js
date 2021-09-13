const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 50);

  ground = new Ground(400, 680, 800, 20);
  
  dustbin = new Dustbin(720, 620, 80, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");
  
  Engine.update(engine);
  
  ground.display();
  dustbin.display();
  paper.display();


  drawSprites();
 
}

function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:380,y:-380});
  }
}