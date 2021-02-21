const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235, 420, 20, 20);

	mango1 = new mango(1100,100,30);
	mango2 = new mango(900, 200, 30);
	mango3 = new mango(1200, 250, 30);
	mango4 = new mango(1000, 125, 30);
	mango5 = new mango(1050, 225, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	console.log("TEST");
	rope = new Rope(stone, {x:235, y:420});

	console.log(rope);
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  stone.display();
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  rope.display();

  groundObject.display();
}
