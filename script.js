const choices = ["rock", "paper", "scissors"]

function computerPlay() {
    let computerchoice = Math.floor(Math.random() * 3);
    return choices[computerchoice];
}

function playRound(playerSelection, computerSelection) {
    // convert playerselection to lower
    playerSelection = playerSelection.toLowerCase()
    // find if playerselection is in choices, if not fail
    if (choices.includes(playerSelection)) {
    // determine winner between player and computer
        if (playerSelection === computerSelection) {
            return `Tied. Both chose ${playerSelection}`;
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            return 'You Lose! Paper beats Rock';
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            return 'You Win! Paper beats Rock';
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            return 'You Win! Rock beats Scissors';
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            return 'You Lose! Scissors beats Paper';
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            return 'You Win! Scissors beats Paper';
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            return 'You Lose! Rock beats Scissors';
        }
    }
    else {
        return 'Please make a valid selection.';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Make your choice: rock, paper, scissors');
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

// const playerSelection = "rock";
// const computerSelection = "rock";
// console.log(playRound(playerSelection, computerSelection));