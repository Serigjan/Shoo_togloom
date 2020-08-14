
var activePlayer ;
var scores ;
var roundScore ;
var isNewGame;

var diceDom = document.querySelector(".dice");

// Togloomiig ehluulne
initGame();

function initGame() {

  isNewGame = true;
  // togloogchiin eelj
  activePlayer = 0;

  // onoo hadgalah 
  scores = [0, 0];

  // eeljindee tsugluulj bga onoo
  roundScore = 0;

// program ehlehed
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Тоглогч 1";
  document.getElementById("name-1").textContent = "Тоглогч 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// shoo hayh tobch
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame ===true) {

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
  }
    else{
  alert('Тоглоом дууссан байна !')
    }
  });

  // hadgalah tobchnii event Listener

  document.querySelector('.btn-hold').addEventListener("click",function(){

    if (isNewGame ===true) {
    // ug toglogchiin eeljin onoog GOLOBAL DR NEMJ UIGNUU .
    if (activePlayer === 0) {
          scores[0] = scores[0] + roundScore;
        } 
    else {
        scores[1] = scores[1] + roundScore;
      }
        document.getElementById("score-" + activePlayer).textContent =scores[activePlayer];
       
        // Toglogch hojson esehiig
        if (scores[activePlayer] >= 100) {
          isNewGame=false;
          // Winner gsn textiig abna.
          document.getElementById("name-" + activePlayer).textContent = "ЯЛАГЧ!!!";
          document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
          document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        }

       else{
          switchToNextPlayer();
        }
      }
      else{
    alert('Тоглоом дууссан байна !')
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