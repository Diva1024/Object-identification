img=""
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(650,500);
canvas.center();

}
function draw(){
image(img,0,0,650,500);
fill("#9c1f1f");
text("Dog", 150,100);
noFill();
stroke("#9c1f1f");
rect(100,50,300,400);

}