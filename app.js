// togloogchiin eelj
var activePlayer = 1;

// onoo hadgalah 
var scores = [0, 0];

// eeljindee tsugluulj bga onoo
var roundScore = 0;

// Shooni ali talaar buusaniig ...
var dice = Math.floor(Math.random() * 6) + 1;


 window.document.querySelector("#score-0").textContent = dice;

 document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// program ehlehed

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";


var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});