const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground
var plinkos=[]
var divisions=[]
var score=0
var particle=0
var turn=0
var divisionHeight=300
var gamestate="play"
function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;
  text("SCORE",+score,750,40)
  ground=new Ground(350,450,950,50)
}

function draw() {
  background("black");  
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
    divisions[k].display()
    }
    for(var j=0;j<=width;j=j+50){
      plinkos.push(new Plinko (j,75))
      plinkos[j].display()
      }
      for(var j=0;j<=width;j=j+50){
        plinkos.push(new Plinko (j,175))
        plinkos[j].display()
        }
        for(var j=0;j<=width;j=j+50){
          plinkos.push(new Plinko (j,275))
          plinkos[j].display()
          }
          for(var j=0;j<=width;j=j+50){
            plinkos.push(new Plinko (j,375))
            plinkos[j].display()
            }
            function mousePressed(){
              if (gamestate!=="end"){
                   count++
                   particle=new Particle(mouseX,10,10,10)
              } 
            }
            if (particle!==null){
              particle.display()
            
            if(particle.body.position.y>760){
              if(particle.x<300){
                score=score+500
                particle=null
                if(count>5) gamestate="end"
              } 
            
            if(particle.x>301&&particle.x<600){
              score=score+100
              particle=null
              if(count>5) gamestate="end"
            } 
            if(particle.x>601&&particle.x<900){
              score=score+200
              particle=null
              if(count>5) gamestate="end"
            }
          }
          }
          if(gamestate==="end"){
             text("GAME OVER",400,400)
            particle=null
          } 
            //if(frameCount%60===0){
             //particles.push(new Particle (random(width/2-10,width/2+10),10,10))  
            //}
  Engine.update(engine);
  drawSprites();
  ground.display()
}

          

