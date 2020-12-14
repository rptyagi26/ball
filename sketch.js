const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myengine,myworld,ground;
var ball;

function setup() {
  createCanvas(400,400);

myengine=Engine.create();
myworld=myengine.world;


var options={
  isStatic:true
}

 ground=Bodies.rectangle(200,350,400,50,options);
 World.add(myworld,ground);

console.log(ground)
var boptions={
  restitution:1
}
ball = Bodies.circle(100,100,20,boptions)
World.add(myworld,ball)

}

function draw() {
  background(0); 
  Engine.update(myengine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}