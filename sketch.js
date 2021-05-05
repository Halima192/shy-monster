const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body=Matter.body;
const Constraint = Matter.Constraint;
var engine,world; 
var gameState="start"
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var ground;
var monster,superhero;
var launch;
function preload() {
//preload the images here
backgroundImage=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(900, 550);

engine=Engine.create();
world=engine.world;

//create bodies here
ground=new Ground(450,height,900,20)

superhero=new Hero(400,3,100,100)
launch=new SlingShot(superhero.body,{x:200,y:200})
block1=new Block(500,350,30,40)
block2=new Block(500,330,30,40)
block3=new Block(500,310,30,40)
block4=new Block(500,250,30,40)
block5=new Block(500,230,30,40)
block6=new Block(500,210,30,40)
block7=new Block(500,150,30,40)
block8=new Block(500,130,30,40)
block9=new Block(500,110,30,40)
block10=new Block(500,650,30,40)
block11=new Block(500,630,30,40)
block12=new Block(500,610,30,40)
block13=new Block(500,750,30,40)
block14=new Block(500,730,30,40)

monster=new Monster(850,200,500,600)

Engine.run(engine);
}

function draw() {
  background(0);
  rectMode(CENTER)
background(backgroundImage)

  superhero.display();
  ground.display();
  stroke(15)
  fill("red")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
monster.display();
launch.display();
}

function mouseDragged(){
  if(gameState==="start"){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});

  }
}

