const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, ball, ground;
var world;

function setup() {
    createCanvas(1530, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    dustbin = new Dustbin(1200, 650);
    ball = new Paper(200, 450, 40);
    ground = new Ground(width / 2, 670, width, 20);

    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background("red");

    dustbin.display();
    ball.display();
    ground.display();

    drawSprites();
    textSize(80);
    fill("balck");
    strokeWeight(10)
    stroke("yellow");
    text("CRUMPLED BALLS", 400, 100);

}

function keyPressed() {

    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(ball.body, ball.body.position, { x: 85, y: -85 });

    }
}
