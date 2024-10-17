
const randomNumber = Math.floor(Math.random() * 10) + 1;
let player1Attempts = 4;
let player2Attempts = 4;
let currentPlayer = 1;

let player1WinCount = 0;
let player2WinCount = 0;

let displayCurrentPlayer = document.querySelector(".player_name span");
const outputElement = document.querySelector("#game_output");

function updateOutput(message) {
  outputElement.innerHTML += `<p>${message}</p>`;
}

updateOutput("Welcome to the Number Guessing Game!");
updateOutput("Try to guess the number between 1 and 10.");

function nextPlayer() {
  if (currentPlayer == 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  displayCurrentPlayer.innerHTML = currentPlayer;
}

function makeGuess() {
  console.log(randomNumber);

  const guessInput = document.querySelector("#guess_input");
  let guess = Number(guessInput.value);

  if (guess < 1 || guess > 10) {
    updateOutput("Please enter a number between 1 and 10.");
    return;
  }

  if (currentPlayer == 1) {
    player1Attempts--;
    if (guess === randomNumber) {
      player1WinCount++;
      updateOutput("Congratulations! Player 1 guessed the correct number!");
    } else if (guess < randomNumber) {
      updateOutput("Player 1: Too low!");
    } else {
      updateOutput("Player 1: Too high!");
    }
    if (player1Attempts === 0) {
      updateOutput("Player 1 has no attempt.");
    }
  } else {
    player2Attempts--;
    if (guess === randomNumber) {
      player2WinCount++;
      updateOutput("Congratulations! Player 2 guessed the correct number!");
    } else if (guess < randomNumber) {
      updateOutput("Player 2: Too low!");
    } else {
      updateOutput("Player 2: Too high!");
    }
    if (player2Attempts === 0) {
      updateOutput("Player 2 has no attempt");
    }
  }

  if (player1Attempts === 0 && player2Attempts === 0) {
    updateOutput("Game finished");
    displayTotalWins();
    document.querySelector("button").disabled = true;
  } else {
    nextPlayer();
  }
}

function displayTotalWins() {
  updateOutput(
    `Total Wins: Player 1 - ${player1WinCount}, Player 2 - ${player2WinCount}`
  );
}
