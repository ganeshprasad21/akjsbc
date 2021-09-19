xPos = 100;
yPos = 100;
xSpeed = 1;
ySpeed = 2.1;
canvasXSize = 800;
canvasYSize = 400;
sizeOfObj = 21;
backgroundGreyscale = 0;
CanvasBgColorRed = 220;
CanvasBgColorGreen = 0;
CanvasBgColorBlue = 120;
function setup() {
  createCanvas(canvasXSize, canvasYSize);
}

function draw() {
  background(CanvasBgColorRed,CanvasBgColorGreen);

  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  if (xPos >= canvasXSize || xPos <= 0) {
    xSpeed *= -1;
  }
  if (yPos >= canvasYSize || yPos <= 0) {
    ySpeed *= -1;
  }
  //fill(random(122),random(10),random(100),random(0,23))
  //stroke(0)
  circle(xPos, yPos, sizeOfObj);
  square(canvasXSize - xPos,canvasYSize - yPos, sizeOfObj);
}
