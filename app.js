// togloogchiin eelj
var activePlayer = 1;

// onoo hadgalah 
var scores = [0, 0];

// eeljindee tsugluulj bga onoo
var roundScore = 0;

// Shooni ali talaar buusaniig ...
var diceNumber = Math.floor(Math.random() * 6) + 1;


 window.document.querySelector("#score-0").textContent = diceNumber;

 document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// program ehlehed

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";




var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
