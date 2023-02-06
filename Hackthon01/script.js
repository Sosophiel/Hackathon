
let choices = ["rock", "paper", "scissors"];
let playerChoice = ""
let computerChoice = ""
let computerScore = 0
let playerScore = 0


function init(){
    let boxes = document.querySelectorAll(".box");
    for (const box of boxes) {
        box.addEventListener("click", setPlayerChoice);
    }


}

function setPlayerChoice(event) {
    if(computerChoice == ""){
        playerChoice = event.target.id;

        let selectedCard = event.target.parentElement;
        for (const card of document.querySelectorAll(".card")) {
            if (card.lastElementChild.id == playerChoice) {
                selectedCard.classList.add("selected");
            }
            else {
                card.classList.remove("selected");
            }
            }
    }
    console.log(playerChoice);
}

function getComputerChoice(){
    return choices[Math.floor(Math.random()* 3)];
} 

    
function startGame() { 

    if(playerChoice == ""){
        document.getElementById("winner").textContent = "Please select a card !";
        return;
    }

    document.querySelector(".computerChoice").classList.add("slideshow");
    
    setTimeout(() => {
        document.querySelector(".computerChoice").classList.remove("slideshow");
        
        computerChoice = getComputerChoice()
        document.querySelector(".computerChoice").style.backgroundImage = `url(${computerChoice}.jpeg)`
    
        let result = game(playerChoice, computerChoice);
        console.log(result);

        document.getElementById("computerScore").textContent = computerScore;
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("winner").textContent = result;
        computerChoice = ""
        playerChoice = ""
    }
    ,1500)
}

function game(playerChoice, computerChoice) {
    console.log(`Player : ${playerChoice}, Computer: ${computerChoice}`);
    let result = ""
    if (playerChoice == computerChoice) {
        result = "It's a tie !";
    }
    else {
        if (playerChoice == "rock") {
            if (computerChoice == "scissors") {
                result = "Player Wins !";
                playerScore += 1
            } 
            else {
                result = "Computer Wins !";
                computerScore += 1

            }
        }
    
        if (playerChoice == "paper") {
            if (computerChoice == "rock") {
                result = "Player Wins !";
                playerScore += 1
            } 
            else {
                result = "Computer Wins !";
                computerScore += 1
            }
        }
    
        if (playerChoice == "scissors") {
            if (computerChoice == "paper") {
                result = "Player Wins !";
                playerScore += 1
            } 
            else {
                result = "Computer Wins !";
                computerScore += 1
            }
        }
    }
    return result
}

/* function theWinner() {
    let computerScore = document.getElementById("computerScore");
    let playerScore = document.getElementById("playerScore");
       
    if (result == "Computer Wins !") {
        computerScore = 0 + 1
    } 
    else {
        result == "Player Wins !";
        {
        playerScore = + 1
    }
    }
} */

init() 



/* 

     - joueur choisi une des 3 images 
      - sauvegarder son choix 
      - au tour de l'odinateur de faire son choix
      - l'odinateur fait son choix au hasard 1/3
      - array de 3 choix
      - fonction qui donne le gagnant 
      - garder le score de chacun */