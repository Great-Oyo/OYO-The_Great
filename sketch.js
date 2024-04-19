let fly = [];
let fly2;
function setup() {

  createCanvas(windowWidth, windowHeight);
	background(100, 200, 255);
      rectMode(CENTER);
  colorMode(HSB);
  angleMode(DEGREES);	// change the angle mode from radians to degrees

}

f1 = 0;
f2 = 0;
f3 = 0;
f4 = 0;
f5 = 0;
f6 = 0;
f7 = 0;
f8 = 0;
f9 = 0;
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];


function draw() {
  var scalar = 50;  // set the radius of circle
var startX = width/2;	// set the x-coordinate for the circle center
var startY = height/2;	// set the y-coordinate for the circle center

      a = 9;
  c_inc = 255/9;
  c1 = 0;
  c2 = 255;
  c3 = 255;

fill(255);
ellipse(startX, startY, 50, 50);
  
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
    fly2 = new Bug(width * (3/4), height * (3/4), 50, 50);
    fly2.display();

  
    if (dist(mouseX, mouseY, fly2.x, fly2.y) < fly2.w1) {

  if(f[0] & f[2] & f[3] & f[4] & f[5] & f[6] & f[7] & f[8] == 1){
    	background(100);
text( 'Beorc was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[1] & f[2] & f[3] & f[5] & f[6] & f[7] & f[8]== 1){
    	background(100);
text( 'Mannaz was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[1] & f[2] & f[4] & f[6] & f[7] & f[8]== 1){
    	background(100);
text( 'Othel was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
} 
      
  if(f[0] & f[1] & f[2] & f[4] & f[5] & f[6] & f[7]== 1){
    	background(100);
text( 'Daeg was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}    
  if(f[0] & f[1] & f[2] & f[3] & f[5] & f[6] & f[7]== 1){
    	background(100);
text( 'Ehwaz was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[1] & f[3] & f[5] & f[7] & f[8]== 1){
    	background(100);
text( 'Ing was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
      
  if(f[0] & f[2] & f[4] & f[6] & f[8] == 1){
    	background(100);
text( 'Jera was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] &f[3] & f[5] & f[6] & f[7] == 1){
    	background(100);
text( 'Perdhro was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[8] & f[4] & f[0] & f[1] == 1){
    	background(100);
text( 'Fehu was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[1] & f[2] & f[4] & f[7] == 1){
    	background(100);
text( 'Uruz was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[1] & f[2] & f[8] & f[4] == 1){
    	background(100);
text( 'Ansuz was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[1] & f[3] & f[4] & f[8] == 1){
    	background(100);
text( 'Raidho was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[2] & f[5] & f[7] == 1){
    	background(100);
text( 'Gifu was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[2] & f[4] & f[7] == 1){
    	background(100);
text( 'Hagall was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[1] & f[4] & f[6] & f[8] == 1){
    	background(100);
text( 'Eihwaz was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[2] & f[3] & f[7] & f[8] == 1){
    	background(100);
text( 'Neid was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[1] & f[3] & f[8] == 1){
    	background(100);
text( 'Wunjo was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[4] & f[7] & f[8] == 1){
    	background(100);
text( 'Eolh was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[3] & f[7] & f[8] == 1){
    	background(100);
text( 'Tir was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[0] & f[1] & f[4] & f[6] == 1){
    	background(100);
text( 'Sigel was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
   if(f[1] & f[3] & f[8] == 1){
    	background(100);
text( 'Lagaz was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}  
  if(f[1] & f[4] & f[8] == 1){
    	background(100);
text( 'Thurisaz was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[4] & f[6] & f[8] == 1){
    	background(100);
text( 'Kenaz was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[5] & f[2] & f[8]== 1){
    	background(100);
text( 'triangle was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
  if(f[4] & f[8] == 1){
    	background(100);
text( 'Isa was formed', 100, 120);
f = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}   
    }  
  
}

function mousePressed(){
for(let i = 0; i < 9; i++){

    if (dist(mouseX, mouseY, fly[i].x, fly[i].y) < fly[i].w1) {
      push();

      f[i] = 1;
      pop();
    }

}
  
}
