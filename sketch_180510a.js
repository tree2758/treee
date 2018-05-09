var a;
var b;
var img;

function setup()
{
  createCanvas(1400,1050);
  a = 0;
  b = 0;
  background(255,128,0);
  img = loadImage("orangeandyellow.jpg");
}

function draw()
{
  fill(255,228,a)
  rect(25,25,550,340);
  fill(219,58,b);
  rect(25,380,550,390);
  image(img,599,25);
}

function mousePressed()
{
  if (mouseX > 25 && mouseX < 575 && mouseY > 25 && mouseY < 365 )
  {
    a += 10;
    a = a % 256;
  }
  
  else if (mouseX > 25 && mouseX < 575 && mouseY > 380 && mouseY < 770 )
  {
    b += 10;
    b = b % 256;
  }
}
