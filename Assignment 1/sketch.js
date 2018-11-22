var unit = 40; //variable number for the amount of rectangles
var count; // creates a variable named count
var mods = []; //creates an array

function setup() {
  createCanvas(594, 841);
  noStroke();
  var wideCount = width / unit; //variable for the width count = width divided by the amount of shapes
  var highCount = height / unit; // variable for the height count = height divided by the amount of shapes
  count = wideCount * highCount; // saying that count = width count x height count

  var index = 0; //variable index = 0
  for (var y = 0; y < highCount; y++) {
    for (var x = 0; x < wideCount; x++) {
      mods[index++] = new Module(x*unit, y*unit, unit/2, unit/2,
        random(0.05, 0.8), unit);
    }
  }
}

function draw() {
  background(0); //makes the background colour black
  for (var i = 0; i < count; i++) {
    mods[i].update(); // calling the function
    mods[i].draw(); // calling the function
  }
}

function Module(_xOff, _yOff, _x, _y, _speed, _unit) {
  this.xOff = _xOff; //the shape's x position
  this.yOff = _yOff; //the shaoe's y position
  this.x = _x;
  this.y = _y;
  this.speed = _speed; // array for the speed of the circles
  this.unit = _unit; //array for the number of shapes
  this.xDir = 1; // array for x direction
  this.yDir = 1; // array for y direction
}

// Changing the variables
Module.prototype.update = function() { //naming the function
  this.x = this.x + (this.speed * this.xDir); //uses the x array and adds this to (speed array x xdirection)
  if (this.x >= this.unit || this.x <= 0) {
    this.xDir *= -1; //alters the xdirection array
    this.x = this.x + (1 * this.xDir); //x = x + (1 x xdirection)
    this.y = this.y + (1 * this.yDir); // y = y +(1 x ydirection)
  }
  if (this.y >= this.unit || this.y <= 0) {
    this.yDir *= -1; //alters the ydirection array
    this.y = this.y + (1 * this.yDir); //y = y + (1 x ydirection)
  }
}

// Drawing a shape
Module.prototype.draw = function() { //naming the function
  if (mouseIsPressed) { //if statement if the mouse is pressed
  fill(random(255),random(255),random(255)) //changes the fill to a random colour
  ellipse(this.xOff + this.x, this.yOff + this.y, 6, 6); //creates an ellipse shape
} //if the mouse is pressed the ellipse's changes to a random colour
else {
  rect(this.xOff + this.x, this.yOff + this.y, 6, 6); //creates a rectangle shape
} //if the mouse is not being pressed then the shapes remains as a rectangle

  push(); //stores information on the drawing style settings and transformations
  translate(width*0.5, height*0.5); //moves the object
  rotate(frameCount / 50.0); //rotates the shape clockwise
  ellipse(252, 144, 72, 72); //creates the ellipse shape
  pop(); //restores the settings used from push

  push(); //stores information on the drawing style settings and transformations
  translate(width*0.5, height*0.5); //moves the object
  rotate(frameCount / -50.0); //rotates the shape counter clockwise
  ellipse(252, 144, 72, 72); //creates the ellipse shape
  pop(); //restores the settings used from push
}
