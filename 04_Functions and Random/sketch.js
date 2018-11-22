function setup() {
  createCanvas(800,800);
  frameRate(5) }

function draw() {
  noStroke();
  Ellipse(); //calls the function
  Rectangle(); //calls the function

}

function Ellipse() { //defining the function
  circleX = random(height);
  circleY = random(width);
  sizeX = random(width);
  fill(random(255),random(255),random(255), random(255))
  ellipse(circleX,circleY, sizeX);


}

function Rectangle() { //defining the function
  recX = random(height);
  recY = random(width);
  sizeX = random(width);
  sizeY = random(height);
  fill(random(255),random(255),random(255), random(255))
  rect(recX,recY, sizeX, sizeY);

}
