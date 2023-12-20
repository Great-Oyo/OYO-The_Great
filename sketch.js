let fly = [];
function setup() {

  createCanvas(400, 400);
	background(100, 200, 255);
      rectMode(CENTER);
  colorMode(HSB);
  angleMode(DEGREES);	// change the angle mode from radians to degrees
}
var scalar = 50;  // set the radius of circle
var startX = 200;	// set the x-coordinate for the circle center
var startY = 200;	// set the y-coordinate for the circle center
f1 = 0;
f2 = 0;
f3 = 0;
f4 = 0;
f5 = 0;
f6 = 0;
f7 = 0;
f8 = 0;
f9 = 0;
const  f = [0, 0, 0, 0, 0, 0, 0, 0, 0];


function draw() {
if(f2 == 1){
  text( 'RAWR', 100, 100);
}
      a = 9;
  c_inc = 255/9;
  c1 = 0;
  c2 = 255;
  c3 = 255;
  
  for (let i = 0; i < a; i++){
        b = (360 * i/9) - 50
      var x = startX + scalar * cos(b);
  var y = startY + scalar * sin(b);
        noStroke();
    fill(c1, c2, c3);
    c1 += c_inc;
    c2 -= c_inc;
    c3 -= c_inc;
    fly[i] = new Bug(x, y, 25);
    fly[i].display();
  //    angle++
  }


  
}

function mousePressed(){
for(let i = 0; i < 9; i++){
  
  if(f[2] & f[5] & f[8]== 1){
text( 'triangle was formed', 100, 120);
    f2 = 1;
}
    if (dist(mouseX, mouseY, fly[i].x, fly[i].y) < fly[i].w1) {
      push();
      clear();
      f[i] = 1;
      pop();
    }

}
  
}
