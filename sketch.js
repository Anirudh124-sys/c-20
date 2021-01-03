var mr,sr


function setup() {
  createCanvas(800,400);
  sr = createSprite(400, 200, 50, 50);
  sr.shapeColor="blue"
  mr = createSprite(300,200,50,50)
  mr.shapeColor="blue"
}

function draw() {
  background(255,255,255);
  mr.x = World.mouseX
  mr.y = World.mouseY
  if (mr.x-sr.x<mr.width/2+sr.width/2 && sr.x-mr.x<mr.width/2+sr.width/2 && mr.y-sr.y<mr.width/2+sr.width/2 && sr.y-mr.y<mr.width/2+sr.width/2) {
    mr.shapeColor = "red"
    sr.shapeColor = "red"
  } else {
    mr.shapeColor = "green"
    sr.shapeColor = "green" 
  }
  drawSprites();
}