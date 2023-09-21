let playerScore = 0;
let computerScore = 0;
const content_score = document.getElementById('overallScore');
const content_player = document.getElementById('playerChoice');
const content_computer = document.getElementById('computerChoice');
const content_result = document.getElementById('roundResult');


function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerMove, computerMove) {
    const rules = {Rock: "Scissors", Paper: "Rock", Scissors: "Paper"};
    // -1: tie, 0: player wins, 1: computer wins
    return computerMove == playerMove? -1 : computerMove == rules[playerMove]? 0 : 1;
}

function game(playerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        let result_text = "It's a tie!";
        if (result == 0) {
            playerScore++;
            result_text = "Player wins!";
        } else if (result == 1) {
            computerScore++;
            result_text = "Computer wins!";
        }
        content_score.innerText = 'Player: ' + playerScore + ' / Computer: ' + computerScore;
        content_player.innerText = 'Player: ' + playerSelection;
        content_computer.innerText = 'Computer: ' + computerSelection;
        content_result.innerText = 'Result: ' + result_text;
    }

    if (playerScore == 5 || computerScore == 5) {
        content_result.innerText = 'Overall winner:' + (playerScore == 5? ' Player wins!' : ' Computer wins!');
    }
}

function choose_rock() {
    game("Rock");
}
function choose_paper() {
    game("Paper");
}
function choose_scissors() {
    game("Scissors");
}

button_rock.addEventListener("click", choose_rock);
button_paper.addEventListener("click", choose_paper);
button_scissors.addEventListener("click", choose_scissors);