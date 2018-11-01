let size = 50;

//Initialization function
function setup() {
  createCanvas(500,500);
  //noLoop();
  frameRate(5)
}

function draw() {
//Rendering function

//Mini squares
stroke(0);
strokeWeight(1);


for (let x = 0; x < 10; x++) {
  for (let i = 0; i < 10; i++) {
    fill(72, 168, 242);
      stroke(255,255,255)
rect(size*x, size*i, size, size);

  fill(random(225), random(225), random (225));
  //for (let x = 0; x < 10; x++) {
    //for (let i = 0; i <10; i++) {
    rect(size*x+12.5, size*i+12.5, size/2, size/2);


//Rectangle Loop

  //background(60);
  //Set a background color
  //background(72, 168, 242);
  //fill(72,168,242)
  //stroke(255,255,255)


      //rect(size*x, height/2, size, size);
      //rect(size*x, height-size, size, size);
      //console.log("X: " + x + ", Y: " + y)
}
}
}

//textSize(22);
//fill(72,168,242);
//noStroke()
//textStyle(ITALIC);
//textFont('Comic Sans MS');
//text("Open the Developer > Javascript Console", 10, 100);
