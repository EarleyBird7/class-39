var database;
var form;
var player;
var game;
var gameState=0;
var playerCount;
var allPlayers;
var car1, car2, car3, car4, cars;

function preload(){
c1=loadImage("images/car1.png")
c2=loadImage("images/car2.png")
c3=loadImage("images/car3.png")
c4=loadImage("images/car4.png")
track=loadImage("images/track.jpg")


}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight);
game = new Game()
game.getState();
game.start(); 
}

function draw(){
  if(playerCount===4){
    game.update(1)
  }
  if (gameState===1){
    clear()
    game.play()
  }
}
   
  



