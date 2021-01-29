const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,500,70,70);
    box2 = new Box(1100,400,70,70);
    box3 = new Box(900,290,70,70);
    box4 = new Box(1100,290,70,70);
    box5 = new Box(1000,285,70,70);
    ground = new Ground(600,height,1200,20);
    pig = new Pig(1000,500);
    pig1 = new Pig(1000,290);
    log1 = new Log(1000,300,300,PI/2);
    log2 = new Log(1000,287,300,PI/2);
    log3 = new Log(970,280,125,PI/7);
    log4 = new Log(1030,280,125,-PI/7);
    bird = new Bird(500,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}