const playerChoiceDiv = document.getElementById("player-choice");
const computerChoiceDiv = document.getElementById("computer-choice");
const scoreDiv = document.getElementById("score");
const winnerEl = document.getElementById("winner");

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const restartButton = document.getElementById("restart-button");
const choices = [rockButton, paperButton, scissorsButton];

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return rand == 0 ? "rock" : (rand == 1 ? "paper" : "scissors");
}

function playRound(playerChoice, computerChoice) {
    console.log("Your move was: " + capitalize(playerChoice));
    console.log("Computer move was: " + capitalize(computerChoice));

    playerChoiceDiv.innerText = capitalize(playerChoice);
    computerChoiceDiv.innerText = capitalize(computerChoice);

    if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "paper") || playerChoice == "paper" && computerChoice == "rock") {
        console.log(`You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`);
        playerScore++;
        scoreDiv.innerHTML = `Player <span style="color: #59A682;">${playerScore}</span> - ${computerScore} Computer`;
    }
    else if (playerChoice == computerChoice) {
        console.log("It was a tie! No points in this round.");
        scoreDiv.innerHTML = `Player ${playerScore} - ${computerScore} Computer`;
    }
    else {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`);
        computerScore++;
        scoreDiv.innerHTML = `Player ${playerScore} - <span style="color: #A65959;">${computerScore}</span> Computer`;
    }

    console.log(`Player ${playerScore} - ${computerScore} Computer`);
}

function endGame(winner) {
    choices.forEach(btn => btn.hidden = true);
    restartButton.hidden = false;

    console.log(`${winner} won the game!`);

    if (winner == "Player") winnerEl.innerHTML = `<span style="color: #59A682;">${winner}</span> won the game!`;
    else winnerEl.innerHTML = `<span style="color: #A65959;">${winner}</span> won the game!`;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreDiv.innerText = `Player 0 - 0 Computer`;
    playerChoiceDiv.innerText = "";
    computerChoiceDiv.innerText = "";
    winnerEl.innerText = "";

    choices.forEach(btn => btn.hidden = false);
    restartButton.hidden = true;
}

choices.forEach(btn => btn.addEventListener("click", () => {
    playRound(btn.value, getComputerChoice());
    
    if (playerScore == 5) endGame("Player");
    else if (computerScore == 5) endGame("Computer");
}));

restartButton.addEventListener("click", restartGame);

let playerScore = 0;
let computerScore = 0;
