const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = []
var maxDrops = 100;
var thunder;
var t1, t2, t3, t4;
function preload(){
    t1 = loadImage("thunderbolt/1.png");
    t2 = loadImage("thunderbolt/2.png");
    t3 = loadImage("thunderbolt/3.png");
    t4 = loadImage("thunderbolt/4.png")
}

function setup(){
   createCanvas(500, 700)
    engine = Engine.create();
    world = engine.world;

    umb1 = new Umbrella(200, 500);
    
    for(var i=0; i<maxDrops; i++){
drops.push(new Drop(random(0,400), random(0,400)))
    }
}

function draw(){
    Engine.update(engine)
    background(0)
   var rand = Math.round(random(1,4))
   if(frameCount%100 === 0 ){
       thunder = createSprite(random(10, 450), random(10,30), 10, 15)
       switch(rand)
       {
           case 1: thunder.addImage("T1",t1)
           break;

           case 2: thunder.addImage("T2", t2)
           break;

           case 3: thunder.addImage("T3", t3);
           break;

           case 4: thunder.addImage("T4", t4);
           break;

           default: break;
       }
       thunder.scale=0.5;
   }
for(var i=0; i<maxDrops; i++){
    drops[i].display();
drops[i].update();
}
   umb1.display();
   drawSprites();
}   

