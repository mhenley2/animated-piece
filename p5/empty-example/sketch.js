var yoff = 0;
var mellow;

let mySound;
function preload() {
  console.log("soundloaded");
  soundFormats( "mp3", "ogg");
  mySound = loadSound("../sounds/mellow.mp3")
  //preloads my music

}

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.mousePressed(canvasPressed);
  background(255, 250, 150);
  //creates canvas and background colour

}
function canvasPressed() {
  mySound.play();
  //plays sound

}
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  //centres canvas
  }

function draw() {
  switch(key){
    case "1":   
  background(255, 150, 150);

    break;
    case "2": 
    background(150, 250, 100);
   break;
    case "3": 
    background(100, 250, 250);
    
    break;
    case "4": 
    background(150, 50, 100);
   //creates different states
    break;
      }

  translate(width / 2, height / 2);
  //offsets everything from centre
  rotate(PI / 2);

  stroke(250);
  fill(100, 150);
  strokeWeight(2);

  var da = PI / 250;
  var dx = 0.05;

  var xoff = 0;
  beginShape();
  for (var a = 0; a <= TWO_PI; a += da) {
    var n = noise(xoff, yoff);
    var r = sin(4 * a) * map(n, 0, 1, 70, 300);
    var x = r * cos(a);
    var y = r * sin(a);
    
    if (a < PI) {
      xoff += dx;
    } else {
      xoff -= dx;
    }

    point(x, y);
    vertex(x, y);
    //makes continuous shape
  }
  endShape();

  yoff += 0.01;


}


