const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var boy;


function setup() {
	createCanvas(1400, 700);
 
	engine = Engine.create();
	world = engine.world;

  
  boy  = Bodies.rectangle(100,430,305,330, {isStatic :true});
  boy.image=loadImage("Images/boy.png");
  World.add(world,boy);

  ground = new Ground(width/2,height-10,width,20);
  tree = new Tree (width-300,height-355,500,700);
	stoneObj = new Stone(153,507,50,50);
	

	mango1 = new Mango (1100,200,10,10);
	mango2 = new Mango (1050,300,10,10);
	mango3 = new Mango (1150,250,10,10);
	mango4 = new Mango (1200,150,10,10);
  mango5 = new Mango (1250,270,10,10);
  mango6 = new Mango (990,170,10,10);
  mango7 = new Mango (1030,120,10,10);
  mango8 = new Mango (1170,90,10,10);
      
  slingshot = new Slingshot(stoneObj.body, {x:153, y:507});
  


	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  
  image (boy.image,boy.position.x,boy.position.y,305,330);

  ground.display();
  tree.display();
  stoneObj.display();
  

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  slingshot.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  

  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function  detectCollision(lstone,lmango){
mangoBodyPos=lmango.body.position;
stoneBodyPos=lstone.body.position;

var distance=dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body, {x:153, y:507});
    slingshot.attach(stoneObj.body);
  }
}