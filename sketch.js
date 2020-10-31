const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ball;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15, block16, block17;
var block18, block19, block20;
var block21, block22, block23;
var block24, block25;


function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(450, 590, 900, 20);
  

 
  block1 = new Block(300, 570, 60, 60);
  block2 = new Block(300, 570, 60, 60);
  block3 = new Block(300, 570, 60, 60);
  block4 = new Block(300, 630, 60, 60);
  block5 = new Block(300, 630, 60, 60);
  block6 = new Block(300, 690, 60, 60);

  block7 = new Block(400, 570, 60, 60);
  block8 = new Block(400, 570, 60, 60);
  block9 = new Block(400, 570, 60, 60);
  block10 = new Block(400, 690, 60, 60);
  block11 = new Block(400, 630, 60, 60);
  block12 = new Block(400, 630, 60, 60);

  block13 = new Block(500, 570, 60, 60);
  block14 = new Block(500, 570, 60, 60);
  block15 = new Block(500, 570, 60, 60);
  block16 = new Block(500, 630, 60, 60);
  block17 = new Block(500, 630, 60, 60);
  block18 = new Block(500, 690, 60, 60);

  block19 = new Block(600, 570, 60, 60);
  block20 = new Block(600, 570, 60, 60);
  block21 = new Block(600, 570, 60, 60);
  block22 = new Block(600, 630, 60, 60);
  block23 = new Block(600, 630, 60, 60);
  block24 = new Block(600, 690, 60, 60);

  ball = new Ball(450,200,40);
  
  slingshot = new Slingshot(ball.body, {x: 450, y:50} );
  

  
  Engine.run(engine);
}

function draw() {
  background(131, 200, 228);  
  Engine.update(engine);

  ground.display();

  fill(251, 206, 234);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  
  
  fill(242, 224, 29);
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill(7, 224, 185);
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  

  fill(239, 140, 19);
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  

  slingshot.display();
  ball.display();
 
  

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
 if(keyCode === 32){
    slingshot.attach(ball.body);
  }
}
