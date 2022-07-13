function computerSelection () {
    let computerChoice = ["ROCK", "PAPER", "SCISSORS"];
    return computerChoice[Math.floor(Math.random()*3)];
}



function playerSelection () {
    let select = prompt("Enter Rock, Paper or Scissors");
    return select.toUpperCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    let a = playerSelection();
    let b = computerSelection();
    let c;

        if (a == "ROCK" && b == "SCISSORS") {
            c = `You Won! ${a} beats ${b}`;
            playerScore++;
        } else if (a == "PAPER" && b == "ROCK") {
            c = `You Won! ${a} beats ${b}`;
            playerScore++;
        } else if (a == "SCISSORS" && b == "PAPER") {
            c = `You Won! ${a} beats ${b}`;
            playerScore++;
        } else if (a == "SCISSORS" && b == "ROCK") {
            c = `You Lose! ${b} beats ${a}`;
            computerScore++;
        } else if (a == "ROCK" && b == "PAPER") {
            c = `You Lose! ${b} beats ${a}`;
            computerScore++;
        } else if (a == "ROCK" && b == "SCISSORS") {
            c = `You Lose! ${b} beats ${a}`;
            computerScore++;
        } else {
            c = "Draw!";
        }
        return c;
}


function game () {
    for (let i = 0; i < 5; i++) {
        console.log(playRound (playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log("You Won the Game");
    }
    else {
        console.log("You Lose the Game");
    }
}

game();
