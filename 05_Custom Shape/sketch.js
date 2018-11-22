var xRandom
var yRandom
var sizeRandom

function setup() {
  createCanvas(800,800);
  frameRate(5) }

function draw() {
  xRandom = random (width);
  yRandom = random (height);
  sizeRandom = random(100, 300)
  customShape();
  customShape(xRandom, yRandom, sizeRandom);

}

function customShape(x, y, size){
  strokeWeight(1);
  stroke(134, 151, 178);
  fill(239, 245, 255);
  ellipse(x, y, size, size);

  strokeWeight(2);
  stroke(255, 200, 200);
  ellipse(x, y, size/1.2, size/1.2);

  strokeWeight(3);
  stroke(200, 200, 255);
  ellipse(x, y, size/1.4, size/1.4);

  strokeWeight(4);
  stroke(41, 67, 232);
  ellipse(x, y, size/1.8, size/1.8);

  strokeWeight(1);
  stroke(201, 203, 214);
  fill(201, 203, 214);
  ellipse(x, y, size/2.6, size/2.6);
}
