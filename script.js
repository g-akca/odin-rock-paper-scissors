function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return rand == 0 ? "rock" : (rand == 1 ? "paper" : "scissors");
}

function getHumanChoice() {
    return prompt("Enter one of the possible moves: 'rock', 'paper', 'scissors'");
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        console.log("Your move was: " + capitalize(humanChoice));
        console.log("Computer move was: " + capitalize(computerChoice));

        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || humanChoice == "paper" && computerChoice == "rock") {
            console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
            humanScore++;
        }
        else if (humanChoice == computerChoice) {
            console.log("It was a tie! No points in this round.");
        }
        else {
            console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
            computerScore++;
        }

        console.log(`Player ${humanScore} - ${computerScore} Computer`);
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    }
    else {
        console.log("The game ended with a tie!")
    }
}

playGame();