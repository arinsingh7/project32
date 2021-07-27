const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
//var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var polygon1, ground;
var slingShot;
var polygon1img, backgroundImg;
var score = 0;
var bg = "light.jpg";

function preload(){
  getBackgroundImage();
  polygon1img = loadImage("polygon.png");

}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(10000, 370);
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 200, 10);

  box1 = new Box(300, 275, 30, 40);
  box2 = new Box(330, 275, 30, 40);
  box3 = new Box(360, 275, 30, 40);
  box4 = new Box(390, 275, 30, 40);
  box5 = new Box(420, 275, 30, 40);
  box6 = new Box(450, 275, 30, 40);
  box7 = new Box(480, 275, 30, 40);

  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360, 235, 30, 40);
  box10 = new Box(390, 235, 30, 40);
  box11 = new Box(420, 235, 30, 40);
  box12 = new Box(450,235, 30, 40);
  
  box13 = new Box(360, 195, 30, 40);
  box14 = new Box(390, 195,  30, 40);
  box15 = new Box(420, 195, 30, 40);


  box16 = new Box(390,155,30,40);


  boxs1 = new Box(640,175,30,40);
  boxs2 = new Box(670,175,30,40);
  boxs3 = new Box(700,175,30,40);
  boxs4 = new Box(730,175,30,40);
  boxs5 = new Box(760,175,30,40);

  boxs6 = new Box(670,135,30,40);
  boxs7 = new Box(700,135,30,40);
  boxs8 = new Box(730,135,30,40);

  boxs9 = new Box(700,95,30,40);



  polygon1 = Bodies.circle(50, 200, 20);
 // polygon1.addImage(polygon1Img);
  World.add(world, polygon1);

  slingShot = new SlingShot(this.polygon1, {x :100, y :200});

  //imageMode(CENTER);
  //image(polygon1Img, polygon1.position.x, polygon1.position.y, 40, 40);

}


function draw() {
  background(0,255,255);  
 // Engine.update(engine);
 text(mouseX + ',' + mouseY, 10, 15);
 textSize(20);
 fill("lightyellow");
 text("Drag the polygon to destroy the blocks",300,30);
 textSize(10);
 text("Press Space to get a second Chance to Play!!",650 ,350);
  //polygon1.display();
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("turquoise");
  box13.display();
  box14.display();
  box15.display();

  fill("grey");
  box16.display();

  fill("skyblue");
  boxs1.display();
  boxs2.display();
  boxs3.display();
  boxs4.display();
  boxs5.display();

  fill("turquoise");
  boxs6.display();
  boxs7.display();
  boxs8.display();

  fill("pink")
  boxs9.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon1img ,polygon1.position.x,polygon1.position.y,40,40);
 

  slingShot.display();

  //mouseDragged();

 // mouseReleased();

 // keyPressed();

 // drawSprites();
}
function mouseDragged(){
  
  Matter.Body.setPosition(this.polygon1, {x : mouseX , y : mouseY});

}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed() {
if(keyCode === 32) {
  slingShot.attach(polygon1)


  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "light.jpg";
  } else {
    bg = "dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}