
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine,body,backgroundImage,ground,bodies,paperBall,dustbin1,dustbin2,dustbin3,dustbinImage,image1;
function preload()
{
	backgroundImage=loadImage("bg1.jpg")
	dustbinImage=loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000,800);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground=new Ground(width/2,780,1000,20);

	dustbin1=new Dustbin(710,670,20.1,190)
	dustbin2=new Dustbin(880,660,20,190)
	dustbin3=new Dustbin(790,760,170,20)
   paperBall=new Paper(50,290,75,25);
  image1=createSprite(790,637,100,800);
  image1.scale=0.8;
    image1.addImage(dustbinImage);
   Engine.run(engine);
  
}


function draw() {
	background(backgroundImage);
	Engine.update(engine); 
	 rectMode(CENTER);
 ground.display();
 dustbin1.display();
 
 dustbin2.display();
 dustbin3.display();
  paperBall.display();
  
  drawSprites();
  keyPressed();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:15,y:-85})
}

}







