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
  customShapeArc();
  customShapeTriangle();

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

function customShapeArc(){
  circleX = random(width);
  circleY = random(height);
  sizeX = random(width);
  strokeWeight(1);
  fill(53, 169, 252, 152);
  ellipse(circleX,circleY, sizeX);

  fill(255);
  arc(circleX, circleY, sizeX/1.2, sizeX/1.2, PI, TWO_PI);
}

function customShapeTriangle(){
  triangleY1 = random(height);
  triangleX1 = random(width);
  triangleY2 = random(height);
  triangleX2 = random(width);
  triangleX3 = random(width);
  triangleY3 = random(height);
  fill(106, 45, 173);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);

  fill(255);
    triangle(triangleX1/1.2, triangleY1/1.2, triangleX2/1.2, triangleY2/1.2, triangleX3, triangleY3);

    fill(0);
    triangle(triangleX1/1.4, triangleY1/1.4, triangleX2/1.2, triangleY2/1.2, triangleX3, triangleY3);
}
