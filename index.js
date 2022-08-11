var number1 = Math.floor(Math.random()*6) +1;
var diceImg = "images/dice" + number1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImg);
var number2 = Math.floor(Math.random()*6) +1;
var diceImg2 = "images/dice" + number2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImg2);
var h1 = document.querySelector("h1");
if (number1 > number2) {
  h1.innerHTML = "🚩Player 1 Wins!"
}
else if (number1 < number2) {
  h1.innerHTML = "Player 2 Wins!🚩"
}
else {
  h1.innerHTML = "Draw!"
}
