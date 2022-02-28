const choices = ["rock", "paper", "scissors"]
const rock = document.getElementById("rock");
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');
const scores = document.getElementById('scores');
const p = document.createElement('p');
let playerScore = 0;
let computerScore = 0;
let round = 0;

rock.addEventListener('click', () => playRound('rock', computerPlay()));
paper.addEventListener('click', () => playRound('paper', computerPlay()));
scissors.addEventListener('click', () => playRound('scissors', computerPlay()));

function computerPlay() {
    let computerchoice = Math.floor(Math.random() * 3);
    return choices[computerchoice];
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    rock.style.display = 'inline-block';
    paper.style.display = 'inline-block';
    scissors.style.display = 'inline-block';
    removeChildNodes(results);
    removeChildNodes(scores);
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function playRound(playerSelection, computerSelection) {
// determine winner between player and computer
    if (playerSelection === computerSelection) {
        p.innerText = `Tied. Both chose ${playerSelection}`
        results.appendChild(p);
        score('tie');
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        p.innerText = 'You Lose! Paper beats Rock'
        results.appendChild(p);
        score('computer');
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        p.innerText = 'You Win! Paper beats Rock'
        results.appendChild(p);
        score('player');
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        p.innerText = 'You Win! Rock beats Scissors'
        results.appendChild(p);
        score('player');
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        p.innerText = 'You Lose! Scissors beats Paper'
        results.appendChild(p);
        score('computer');
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        p.innerText = 'You Win! Scissors beats Paper'
        results.appendChild(p);
        score('player');
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        p.innerText = 'You Lose! Rock beats Scissors'
        results.appendChild(p);
        score('computer');
    }
}

function score(winner) {
    if (winner === 'player') {
        playerScore++;
        round++;
    }
    else if (winner === 'computer') {
        computerScore++;
        round++;
    }
    else if (winner === 'tie') {
        round++;
    }
    let s = document.createElement('p');
    s.innerText = `Round ${round} score is: Player: ${playerScore}, Computer: ${computerScore}`
    scores.appendChild(s);
    if (playerScore === 5 || computerScore === 5) {
        rock.style.display = 'none';
        paper.style.display = 'none';
        scissors.style.display = 'none';
        let win = document.createElement('p');
        if (playerScore > computerScore) {
             win.innerText = `YOU WON! in ${round} rounds`;
             win.className = 'youwon';   
        }
        else {
            win.innerText = `YOU LOST! in ${round} rounds`;
            win.className = 'youlost';
        }
        results.prepend(win);
        let restart = document.createElement('button');
        restart.innerText = 'Play again?';
        scores.appendChild(restart)
        restart.addEventListener('click', () => resetGame());
        }
}
