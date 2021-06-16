var garden, gardenImg;
var cat;
var mouse;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    cat = loadImage("cat1.png");
    mouse = loadImage("mouse1.png");
    catImg1 = laodImage("cat2.png", "cat3.png");
    catImg2 = loadImage("cat4.png");
    mouseImg1 = loadImage("mouse2.png", "mouse3.png");
    mouseImg2 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    tom = createSprite(800,500,30,30);
    jerry = createSprite(200,500,10,10);
    garden.addImage(gardenImg);
    tom.addImage(cat);
    jerry.addImage(mouse);
    jerry.scale = 0.2;
    tom.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
    jerry.addAnimation("mouseHappy", mouseImg2);
    jerry.changeAnnimation("mouseHappy");
    tom.addAnimation("catHappy", catImg1);
    tom.changeAnnimation("catHappy");
    tom.velocityX = 0;
}  

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    jerry.addAnimation("mouseTeasing", mouseImg3);
    jerry.changeAnnimation("mouseTeasing");
    tom.addAnimation("catWalking", catImg2);
    tom.changeAnnimation("catWalking");
    tom.velocityX = tom.velocityX - 10;
}

}
