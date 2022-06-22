/**
 * Data I need to collect
 */
 let buttons = document.getElementsByClassName("control");
 let playerScore = document.getElementById("player-score");
 let computerScore = document.getElementById("computer-score");
 let playerImage = document.getElementById("player-image");
 let computerImage = document.getElementById("computer-image");
 let messages = document.getElementById("messages");
 let choices = ["rock", "scissors", "paper"];
 
 
 for (let button of buttons) {
     button.addEventListener("click", function() {
         let playerChoice = this.getAttribute("data-choice");
         playGame(playerChoice)
     }
     )
 }
 
 /**
  * Function that creates choose a random option for the computer
  */
  function playGame(playerChoice) {
 
     playerImage.src = `assets/images/${choices[playerChoice]}.png`;
     playerImage.alt = choices[playerChoice];
 
     let computerChoice = Math.floor(Math.random() * 3);
 
     computerImage.src = `assets/images/${choices[computerChoice]}.png`;
     computerImage.alt = choices[computerChoice];
 
     let result = checkWinner(choices[computerChoice], choices[playerChoice]);
     
     
   }
 
 /**
  * Function that compares player and computer choices and determines a winner
  */
 
 function checkWinner (computerChoice, playerChoice) {
     if (playerChoice === "rock") {  
         if (computerChoice == "rock") {
             messages.innerHTML = 'Draw';
         } else if (computerChoice == "scissors") {
              messages.innerHTML = 'You Win!';
              computerScore.innerHTML++;
          } else if (computerChoice == "paper") {
              messages.innerHTML = 'You Loose =(';
              playerScore.innerHTML++;
          }
       }
     
       if (playerChoice === "scissors") {
         if (computerChoice == "rock") {
             messages.innerHTML = 'You Loose =(';
             computerScore.innerHTML++;
         } else if (computerChoice == "scissors") {
             messages.innerHTML = 'Draw';;
          } else if (computerChoice == "paper") {
             messages.innerHTML = 'You Win!';
             playerScore.innerHTML++;
          }
       }
     
       if (playerChoice === "paper") {``
         if (computerChoice == "rock") {
             messages.innerHTML = 'You Win!';
             playerScore.innerHTML++;
         } else if (computerChoice == "scissors") {
             messages.innerHTML = 'You Loose =(';
             computerScore.innerHTML++;
          } else if (computerChoice == "paper") {
             messages.innerHTML = 'Draw';
         }
     }
 }