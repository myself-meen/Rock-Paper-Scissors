console.log("Hello World");

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissor?").toLowerCase();
    return choice;
}

function getCompChoice() {
    let a = Math.random();
    if (a <= 0.33) {
        return "rock";
    } else if (a <= 0.66) {
        return "paper";
    } else {
        return "scissor";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compChoice) {
    alert(`Computer chose: ${compChoice}`);
    
    if (humanChoice === compChoice) {
        alert("It's a tie!");
    }
    else if (
        (humanChoice === "rock" && compChoice === "scissor") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissor" && compChoice === "paper")
    ) {
        humanScore++;
        alert("You win this round!");
    }
    else {
        computerScore++;
        alert("Computer wins this round!");
    }
    
    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        alert("Round " + (i + 1));
        playRound(getHumanChoice(), getCompChoice());
    }
    
    alert("Game Over!");
    if (humanScore > computerScore) {
        alert("🎉 You win the game!");
    } else if (computerScore > humanScore) {
    alert("💻 Computer wins the game!");
    } else {
        alert("🤝 It's a tie!");
    }
}

playGame();
