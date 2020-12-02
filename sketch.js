var iceberg=255;
	eardrum=50;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	background(173,216,230);
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  stroke(0);
  ellipse(mouseX,mouseY,eardrum,eardrum);
  eardrum=eardrum+1
  fill(245,200,245,iceberg);//pink color for square
  rect(iceberg,150,75,75); // center of canvas, 20px dia

}

function mousePressed(){
	iceberg=iceberg-5;
	
}