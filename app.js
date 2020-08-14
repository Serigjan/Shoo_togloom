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

  // hold tobchnii event Listener

  document.querySelector('.btn-hold').addEventListener("click",function(){
    // ug toglogchiin eeljin onoog GOLOBAL DR NEMJ UIGNUU .
    if (activePlayer === 0) {
          scores[0] = scores[0] + roundScore;
        } 
    else {
        scores[1] = scores[1] + roundScore;
      }
        document.getElementById("score-" + activePlayer).textContent =scores[activePlayer];
       
        // Toglogch hojson esehiig
        if (scores[activePlayer] >= 20) {
          // Winner gsn textiig abna.
          document.getElementById("name-" + activePlayer).textContent = "ЯЛАГЧ!!!";
          document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
          document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        }

       else{
          switchToNextPlayer();
        }
  });

  
      // Daraachiin togloogch ruu shiljilene.
  function switchToNextPlayer() {
    
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
  
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  
  
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  

    diceDom.style.display = "none";
  }

  // NEw paly ehleh 

  document.querySelector(".btn-new").addEventListener("click", initGame);