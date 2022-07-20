const buttons = document.querySelectorAll("button");
const result = document.querySelector('.result')
const final = document.querySelector('.finalResult')
const roundResult = document.createElement('p');
const playerScoreHTML = document.createElement('p');
const computerScoreHTML = document.createElement('p');
const finalResult = document.createElement('p');

buttons.forEach(click => click.addEventListener('click', playRound));


let playSelection = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

function renderScore () {
    playerScoreHTML.textContent = `Your Score: ${playerScore}`;
    result.appendChild(playerScoreHTML);
    computerScoreHTML.textContent = `Computer Score: ${computerScore}`;
    result.appendChild(computerScoreHTML);
}

renderScore();

function playerSelection (e) {
    playSelection = e.target.id;
    return playSelection;
}

function computerSelection () {
    let computerChoices = ["ROCK", "PAPER", "SCISSORS"];
    computerChoice = computerChoices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function playRound (e) {
    let a = playerSelection(e);
    let b = computerSelection();
    let c;

        if (a == "ROCK" && b == "SCISSORS") {
            c = `You Won! ${a} beats ${b}`;
            ++playerScore;
        } else if (a == "PAPER" && b == "ROCK") {
            c = `You Won! ${a} beats ${b}`;
            ++playerScore;
        } else if (a == "SCISSORS" && b == "PAPER") {
            c = `You Won! ${a} beats ${b}`;
            ++playerScore;
        } else if (a == "SCISSORS" && b == "ROCK") {
            c = `You Lose! ${b} beats ${a}`;
            ++computerScore;
        } else if (a == "ROCK" && b == "PAPER") {
            c = `You Lose! ${b} beats ${a}`;
            ++computerScore;
        } else if (a == "ROCK" && b == "SCISSORS") {
            c = `You Lose! ${b} beats ${a}`;
            ++computerScore;
        } else {
            c = "Draw!";
        }
        renderScore();
        roundResult.textContent = `${c}`;
        final.appendChild(roundResult);
        if (playerScore > 5) {
            setTimeout(function() {
                alert("You are the winner");
              }, 10);
            playerScore = 0;
            computerScore = 0;
            c = "";
            roundResult.textContent = `${c}`;
            final.appendChild(roundResult);
            renderScore();
        } else if (computerScore > 5) {
            setTimeout(function() {
                alert("Computer is the winner");
              }, 10);
            playerScore = 0;
            computerScore = 0;
            c = "";
            roundResult.textContent = `${c}`;
            final.appendChild(roundResult);
            renderScore();
        }
}