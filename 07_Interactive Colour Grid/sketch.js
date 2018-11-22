let tileSize = 50;

function setup() {
  createCanvas(500,500);
  stroke(255);
}

function draw() {
background(0);

  var mouse1 = map(mouseY, 0, width, 0, 255);
  var mouse2 = map(mouseX, 0, width, 0, 255);
  var mouse3 = map(mouseY, 0, width, 255, 0);

var colour1 = color(255, 37, 54, 255);
var colour2 = color(36, 194, 203, mouse1);
var colour3 = color(36, 194, 201, mouse2);
var colour4 = color(239, 108, 46, mouse3);

for (let y = 0; y < height; y+=tileSize) {
  for (let x = 0; x < width; x+=tileSize) {

    if(mouseX>x && mouseX<x+tileSize && mouseY>y && mouseY<y+tileSize) fill(colour1);
    else if (mouseX>x && mouseX<x+tileSize) fill(colour2);
    else if (mouseY>y && mouseY<y+tileSize) fill(colour3);
    else fill(colour4);
    rect(x, y, tileSize, tileSize);
  }
}
}
