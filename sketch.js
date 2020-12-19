var player;

function preload(){

}

function setup(){
  createCanvas(900,600);
  player = createSprite(450,300,100,100);
}


function draw(){
  background("black")

  drawSprite();
}
