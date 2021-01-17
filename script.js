var images=["dice1.png", "dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

function startgame(){

var player1=Math.floor(Math.random()*6);

var player2=Math.floor(Math.random()*6);

if(player1>player2){

document.getElementById("result").innerHTML="Player 1 Wins";

document.getElementById("play1").src=images[player1];

document.getElementById("play2").src=images[player2];

}

else if(player1<player2){

document.getElementById("result").innerHTML="Player 2 Wins";

document.getElementById("play1").src=images[player1];

document.getElementById("play2").src=images[player2];

}

else{

document.getElementById("result").innerHTML="Draw";

document.getElementById("play1").src=images[player1];

document.getElementById("play2").src=images[player2];

}

}
