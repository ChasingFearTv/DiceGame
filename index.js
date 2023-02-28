
var randomNumber = Math.floor(Math.random()* 6) + 1;
var randomNumber2 = Math.floor(Math.random()* 6) + 1;
var imgAttribute1 = document.querySelectorAll("img")[0];
var imgAttribute2 = document.querySelectorAll("img")[0,1];
imgAttribute1.setAttribute("src","images/dice" + randomNumber + ".png");
imgAttribute2.setAttribute("src","images/dice" + randomNumber2 + ".png");


var heading = document.querySelector("h1");

if (randomNumber < randomNumber2) {
    heading.innerHTML = "Player 2 Wins!";
}
if (randomNumber > randomNumber2) {
    heading.innerHTML = "Player 1 Wins!";
}
if (randomNumber === randomNumber2) {
    heading.innerHTML = "draw";
}