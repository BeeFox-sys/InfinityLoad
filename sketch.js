var img =new p5.Image(600,600)
var h = 0
var t = 0
var x = 0
var y = 0
var x2 = 0
var y2 = 0
var step =0.015
var hstep = 1
var radi = 100
function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
  img = loadImage("asd.png")
  smooth(10)
  colorMode(HSB)
  if(windowHeight >= windowWidth){
    radi = windowHeight/10
  } else {
    radi = windowWidth/10
  }
  x2 = (cos(-step)*radi);
  y2 = (sin(2*(-step))*radi) / 2;

}

function draw() {
  strokeWeight(20)
  stroke(h,255,255)
  translate(width/2,height/2)
  scale(2)
  x = (cos(t)*radi);
  y = (sin(2*t)*radi) / 2;
  line(x,y,x2,y2)
  t+=step
  x2 = x
  y2 = y
  if(h<360){
    h+=hstep
  } else {
    h = 0
  }
}

function windowResized() {
  var h = 0
  var t = 0
  var x = 0
  var y = 0
  var x2 = 0
  var y2 = 0
  if(windowHeight >= windowWidth){
    radi = windowHeight/10
  } else {
    radi = windowWidth/10
  }
  resizeCanvas(windowWidth,windowHeight)
    background(0)
}
