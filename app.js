// togloogchiin eelj
var activePlayer = 0;

// onoo hadgalah 
var scores = [0, 0];

// eeljindee tsugluulj bga onoo
var roundScore = 0;

// Shooni ali talaar buusaniig ...


// program ehlehed

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";


// shoog shiideh eventListener

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";


// Togloogchiin eeljin onoog uurchilnu.

  if(diceNumber !==1)
  {
    roundScore=roundScore+diceNumber;
    document.getElementById("current-"+ activePlayer).textContent =roundScore;  
  }
  else
  {
    roundScore=0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display = "none";
  }
  });