console.log("Hello World");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const reset=document.querySelector("#reset");

reset.addEventListener("click",()=>{
    humanScore=0;
    computerScore=0;
    playerScoreSpan.textContent=humanScore;
    computerScoreSpan.textContent=computerScore;
    resultDiv.textContent="Game rest. Let's play again!";
    enableButtons();
})


rock.addEventListener("click", () => {
  playRound("rock", getCompChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", getCompChoice());
});
scissor.addEventListener("click", () => {
  playRound("scissor", getCompChoice());
});


const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const resultDiv = document.querySelector("#result");

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
  if (humanChoice === compChoice) {
    resultDiv.textContent = `Both chose ${humanChoice}. It's a tie!`;
  } else if (
    (humanChoice === "rock" && compChoice === "scissor") ||
    (humanChoice === "paper" && compChoice === "rock") ||
    (humanChoice === "scissor" && compChoice === "paper")
  ) {
    humanScore++;
    playerScoreSpan.textContent = humanScore;
    resultDiv.textContent = `You win this round! ${humanChoice} beats ${compChoice}.`;
  } else {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = `Computer wins this round! ${compChoice} beats ${humanChoice}.`;
  }
  if (humanScore === 5) {
    resultDiv.textContent = "🎉 You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = "💻 Computer wins the game!";
    disableButtons();
  }

  
}
function enableButtons(){
     rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;

}
function disableButtons(){
   rock.disabled=true;
   paper.disabled=true;
   scissor.disabled=true; 
}
// playGame() removed — game now runs only on button clicks

