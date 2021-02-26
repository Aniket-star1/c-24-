const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground1,box1,box2;


function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);
  /*var ball_options={
    restitution:3
  }
var ground_options={
  isStatic:true
}*/
engine = Engine.create();
world=engine.world;
//ball= Bodies.circle(200,200,20,ball_options)
//World.add(world,ball);
//ground= Bodies.rectangle(200,380,400,20,ground_options);
//World.add(world,ground);
box1 = new box(700,320,70,70)
box2 = new box(920,320,70,70)
box3 = new box(700,240,70,70)
box4 = new box(920,240,70,70)
box5 = new box(810,160,70,70)
ground1 = new ground(600,height,1200,20)
bird1 = new bird(30,30)
pig1 = new pig(810,320)
pig2 = new pig(810,220)
log1 = new log(810,260,300,PI/2)
log2 = new log(810,180,300,PI/2)
log3 = new log(760,120,150,PI/4)
log4 = new log(870,120,150,-PI/4)
}

function draw() {
  background("black");  
  Engine.update(engine);
  /*ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)*/
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground1.display();
  bird1.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
}