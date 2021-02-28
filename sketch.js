
const Engine=Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies
var engine,world,object,ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var object_options = {
    isStatic:true
  }
  object=Bodies.rectangle(200,390,200,20,object_options);
World.add(world,object)
var ball_options = {
  restitution:1
}
 ball=Bodies.circle(200,100,20,ball_options)

 World.add(world,ball)
}

function draw() {
background(0);
Engine.update(engine);
rectMode(CENTER)
rect(object.position.x,object.position.y,400,20);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}