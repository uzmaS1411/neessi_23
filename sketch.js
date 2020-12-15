const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(200,200,50,50);
    box1= new Box(12,150,10,10);

  

    
}

function draw(){
    background("teal");
    Engine.update(engine);

    box.display();
    box1.display();
    
   

}