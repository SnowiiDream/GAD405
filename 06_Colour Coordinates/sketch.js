
function setup() {
  createCanvas(800, 800);
  noStroke();

}

function draw() {
  var x1 = map(mouseX, 0, 800, 0, 255);
  var y1 = map(mouseY, 0, 800, 0, 255);
  var x2 = map(mouseX, 0, 800, 255, 0);
  var y2 = map(mouseY, 0, 800, 255, 0);

  background(0);

  fill(65, 80, 244, x1)  //changes the square opacity when the mouse rolls over it
  rect(800/2, 800/2, 800/2, 800/2)

  fill(244, 65, 88, y1)
  rect(0, 0, 800/2, 800/2)

  fill(161, 66, 244, x2)
  rect(0, 800/2, 800/2, 800/2)

  fill(65, 232, 244, y2)
  rect(800/2, 0, 800/2, 800/2)

}
