//Create variables here
var  dog, happyDog, database, foodS, foodStock;
var database;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
   dog.addImage(dogImg);
    dog.scale=0.15;
    database = firebase.database();
    console.log(database);
    foodStock=database.ref('Food');
    foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  database.ref('Food');
}
function writeStock(data){
 text("Note : Press UP ARROW key To Feed Dog Milk", 450, 250);
}



