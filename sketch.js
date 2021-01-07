
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;




var world;
var paper1;
var ground1;
var bin1, bin2, bin3;
var can1;
var wall1, wall2, wall3;
var binImage1;

function preload(){
	binImage1=loadImage("trash.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	

	ground1 = new ground (width/2, 670, width, 20);
	paper1=new paper(200,450,40,360);
	bin1=new bin (1360,655,180,15);
	bin2=new bin (1440,548,15,230);
	bin3=new bin (1280,548,15,230);
	can1=createSprite(1360, 545, 1,1);
	can1.addImage(binImage1);
	can1.scale=0.7;

	
	wall1=new wall (1600,350,20,700);
	wall2=new wall (1,350,20,700);
	wall3=new wall (800,1,1600,10);

	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(29,13,77);
  paper1.display();
  ground1.display();  
  drawSprites();

 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:100,y:-100});
	}
}



