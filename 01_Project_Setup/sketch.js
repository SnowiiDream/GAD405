
//DAT405 / GAD405
//01_ProjectSetup
//In this example we see how to create a canvas, set and display
//the frame rate of the rendering system, and use text to
//display the frame count and rate on screen

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(900, 900);

  //Set up the frame rate (frames per second)
  //Default is 60 fps
  frameRate(10);

  //Preferences for the text (size, and alignment)
  textSize(50);
  textAlign(CENTER);

  fill(255, 255, 0);
  rect(width/2, height/2, 50, 50);
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to dark grey
  background(128,0,128);

// Right Line
stroke(0,0,0)
  strokeWeight(3);
            line(1700/2, 20, 1700/2, 875);

  // Set colors
  fill(255, 0, 0);
  stroke(255,0,0);

  // An ellipse Top Left
    ellipse(50, 50, 100, 100);

// Diagonal Bottom Left to Top Right
stroke(255, 0, 0);
strokeWeight(3);
line(50, 850, 850, 50);

// Set colors
fill(0, 0, 255);
stroke(0,0,255);

// An ellipse Top Right
ellipse(850, 50, 100, 100);

// Left Line
stroke(255, 255, 255);
strokeWeight(3);
line(100, 850, 100, 80);

      // Set colors
      fill(255, 255, 0);
      stroke(255,255,0);

// Diagonal Bottom Right to Left
      strokeWeight(3);
                line(30, 20, 885, 875);
      stroke(0, 255, 0);

      // An ellipse Bottom Left
        ellipse(50, 850, 100, 100);
stroke(255,255,255)

        // Set colors
        fill(0, 255, 0);
        stroke(0,255,0);

        // An ellipse Bottom Right
          ellipse(850, 850, 100, 100);

          //Set the color of the text
          fill(255,255,255);
          stroke(0,0,0);
          //Set the text message as the frame count
          //Position text in the middle of the screen
          text("Frame Count:  " + frameCount, width/2, height/2-20);
          //Set the text message as the frame rate (round it to an integer)
          //Position text in the middle of the screen
          text("Frame Rate:  " + Math.round(frameRate()), width/2, height/2+40);

          //noLoop();
        }
