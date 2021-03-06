const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,355,50,50);
    box2 = new Box(900,355,50,50);
    pig1 = new Pig(800,355)
    log1 = new log(800,300,300,PI/2);
    box3 = new Box(700,275,50,50);
    box4 = new Box(900,275,50,50);
    pig2 = new Pig(800,275)
    log2 = new log(800,200,300,PI/2);
    box5 = new Box(800,200,50,50);
    log3 = new log(750,150,125,PI/4);
    log4 = new log(850,150,125,-PI/4);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    ground.display();
}