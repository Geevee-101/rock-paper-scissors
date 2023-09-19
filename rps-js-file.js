function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerMove, computerMove) {
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    return computerMove == playerMove? "It's a tie!" : computerMove == rules[playerMove]? "Player wins!" : "Computer wins!";
}

function game() {
    for (let i=0; i<6; i++) {
        const playerSelection = prompt("rock, paper, or scissors:");
        const computerSelection = getComputerChoice();
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();