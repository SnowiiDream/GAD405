var unit = 40; //variable number for the amount of rectangles
var count; // creates a variable named count
var mods = []; //creates an array

function setup() { //the function that is called once the program starts, initialization function
  createCanvas(594, 841); // creates the canvas size
  noStroke(); //gives the shape no stroke
  //frameRate(25); //makes the movement speed slower
  var wideCount = width / unit; //variable for the width count = width divided by the amount of shapes
  var highCount = height / unit; // variable for the height count = height divided by the amount of shapes
  count = wideCount * highCount; // saying that count = width count x height count

  var index = 0; //variable index is set to 0
  for (var y = 0; y < highCount; y++) { // for controls a sequence of repetitions, each part is separated by a semi colon and loop continues as long as it's true
    //variable y is created and set to 0, y is less than the highCount, the value of y is increased by 1
    for (var x = 0; x < wideCount; x++) { // variable x is created and set to 0, x is less than the wideCount, the value of x is increased by 1
      mods[index++] = new Module(x*unit, y*unit, unit/2, unit/2, //uses the array mods and uses the index value which is increased by 1
        //the new Module is set to (variable x x variable unit, variable y x variable unit, variable unit divided by 2, variable unit divided by 2)
        random(0.05, 0.8), unit); //function will return a float with a value between the two values (0.05, 0.8) and the unit variable
    }
  }
}

function draw() { //function that is called after function set up, rendering function
  background(0, 30); //makes the background colour black and the second value makes the background slightly translucent so that movement leaves trails
  for (var i = 0; i < count; i++) { //variable i is created and set to 0, i is less than count, the value of i is increased by 1
    mods[i].update(); // calling the function, uses the array mods which uses the index value
    mods[i].draw(); // calling the function, uses the array mods which uses the index value
  }
}

function Module(_xOff, _yOff, _x, _y, _speed, _unit) {
  this.xOff = _xOff; //the shape's x position
  this.yOff = _yOff; //the shape's y position
  this.x = _x; //array for the value x
  this.y = _y; //array for the value y
  this.speed = _speed; // array for the speed of the circles
  this.unit = _unit; //array for the number of shapes
  this.xDir = 1; // array for x direction
  this.yDir = 1; // array for y direction
}

// Changing the variables
Module.prototype.update = function() { //naming the function
  this.x = this.x + (this.speed * this.xDir); //uses the x array and adds this to (speed array x xdirection)
  if (this.x >= this.unit || this.x <= 0) {  //compares the two expressions and returns true if one or both expressions are true
    //array of x is greater than or equal to the number of shapes array compares array of x is less than or equal to 0
    this.xDir *= -1; //alters the xdirection array
    this.x = this.x + (1 * this.xDir); //x = x + (1 x xdirection)
    this.y = this.y + (1 * this.yDir); // y = y +(1 x ydirection)
  }
  if (this.y >= this.unit || this.y <= 0) { //array of y is greater than or equal to the number of shapes array compares array of y is less than or equal to 0
    this.yDir *= -1; //alters the ydirection array
    this.y = this.y + (1 * this.yDir); //y = y + (1 x ydirection)
  }
}

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

    star(297, 420.5, 30, 70, 5); //star shape
}

function star(x, y, radius1, radius2, npoints) { //star shape function
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
