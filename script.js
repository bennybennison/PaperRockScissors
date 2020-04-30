let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//User Choice

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();

//Computer Choice

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//Both Choices with outcomes

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "ps":
    case "rp":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

//Additional Function for Result

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  else return "Scissors";
}

//Result functions

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
  userChoice_div.classList.add(`green-glow`);
  setTimeout(function () {
    userChoice_div.classList.remove(`green-glow`);
  }, 300);
}
function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose!`;
  userChoice_div.classList.add(`red-glow`);
  setTimeout(function () {
    userChoice_div.classList.remove(`red-glow`);
  }, 300);
}
function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  console.log(userScore + " " + computerScore);
  result_div.innerHTML = "It's a draw!";
  userChoice_div.classList.add(`grey-glow`);
  setTimeout(function () {
    userChoice_div.classList.remove(`grey-glow`);
  }, 300);
}
