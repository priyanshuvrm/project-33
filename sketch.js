var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var count = 0;
var gameState = 1;

var divisionHeight=300;
var score =0;

var edges

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
}
 


function draw() {
  background("black");
  textSize(20)
  text(mouseX +","+ mouseY , mouseX , mouseY)
  text("500" , 25 , 640);
  text("400" , 100 , 640);
  text("300" , 180 , 640);
  text("200" , 265 , 640);
  text("100" , 340 , 640);

  text("100" , 420 , 640);
  text("200" , 500 , 640);
  text("300" , 580 , 640);
  text("400" , 665 , 640);
  text("500" , 750 , 640);


console.log(count);
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if (particle != null){
     particle.display();
     if(particle.body.position.y > 750){
       if(particle.body.position.x < 85 && particle.body.position > 0 || particle.body.position.x > 720 && particle.body.position.x < 800){
         score += 500;
         particle = null;
         if(count === 5){
           gameState = 0;
         }
       }
       else if(particle.body.position.x > 85 && particle.body.position.x < 165 || particle.body.position.x > 640 && particle.body.position.x < 720){
        score += 400;
        particle = null;
        if(count === 5){
          gameState = 0;
        }
      }

      else if(particle.body.position.x > 160 && particle.body.position.x < 240 || particle.body.position.x > 565 && particle.body.position.x < 645){
        score += 300;
        particle = null;
        if(count === 5){
          gameState = 0;
        }
      }

      else if(particle.body.position.x > 240 && particle.body.position.x < 320 || particle.body.position.x > 485 && particle.body.position.x < 565){
        score += 200;
        particle = null;
        if(count === 5){
          gameState = 0;
        }
      }

      else if(particle.body.position.x > 320 && particle.body.position.x < 400 || particle.body.position.x > 400 && particle.body.position.x < 480){
        score += 100;
        particle = null;
        if(count === 5){
          gameState = 0;
        }
      }
     }
    }
   if(gameState == 0){
     text("GAME OVER" , 150,250);
   }
}
function mousePressed(){
  if (gameState === 1){
    count ++;
    particle = new Particle(mouseX , 0 , 10 , 10);
  }
}
