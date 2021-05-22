const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


function setup() {
  createCanvas(800,400);
  jkEngine=Engine.create();
  jkWorld=jkEngine.world;
  var options={
  isStatic:true,
  }
  //creating a ground body
  ground=Bodies.rectangle(width/2,height-50,width,20,options)
  World.add(jkWorld,ground);
  var ballOptions={
    restitution:0.5
  }
  ball=Bodies.circle(200,50,50,ballOptions)
  World.add(jkWorld,ball)
  console.log(ball)
}

function draw() {
  background("lightblue");
  Engine.update(jkEngine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50)
  
}