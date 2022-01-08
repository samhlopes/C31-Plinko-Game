var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //criar objetos de divisão
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crie a 1ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crie a 2ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  { 
    plinkos.push(new Plinko(j,175));
  }

  //crie a 3ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //crie a 4ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //criar objetos de partículas
  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  }
    
}

function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //exibir os divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //exibir as partículas
  for (var t = 0; t < particles.length; t++) {
    particles[t].display();
  }

  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10))

    var piece1 = width/3
    var piece3 = width/3*2
    particles.push(new Particle(random(piece1-20,piece1+20), 10,10))
    particles.push(new Particle(random(piece3-20,piece3+20), 10,10))
  }
}