let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let player3Score = 0;
let player1Name = "Player 1"; // Default name for Player 1
let player2Name = "Player 2"; // Default name for Player 2
let player3Name = "Player 3"; // Default name for Plaper 3
let winningScore = 50;

// display instructions
function displayInstructions() {
  const instructions = document.getElementById("hidden");
  instructions.style.display = "block";
}

// close instructions
function closeInstructions() {
  let gameInstructions = document.getElementById("hidden");
  gameInstructions.style.display = "none";
}

// edit player names button
function editNames() {
  const player1 = prompt("Enter player 1's name", player1Name);
  const player2 = prompt("Enter player 2's name", player2Name);
  const player3 = prompt("Enter Player 3's name", player3Name);

  if (player1 !== null && payer1 !== "") {
    player1Name = player1;
    document.getElementById("player1").textContent = player1Name;
  }
  if (player2 !== null && player2 !== "") {
    player2Name = player2;
    document.getElementById("player2").textContent = player2Name;
  }
  if (player3 !== null && player3 !== "") {
    player3Name = player3;
    document.getElementById("player3").textContent = player3Name;
  }
}


// set winning score
function setScore() {
  let score = prompt("Set the winning score", "50");
  if (score !== null && score !== "" && !isNaN(score) && Number(score) > 0) {
    winningScore = Number(score);
  } else if (isNaN(score) || score <= 0) {
    alert("Please enter a valid positive number");
    return;
  } else {
    winningScore = 50; // Default score
  }
  alert(`Winning score is set to ${winningScore}`);
}

// restart game
function restartGame() {
  // Reset the score
  player1Score = 0;
  player2Score = 0;
  player3score = 0;

  // Reset the displayed scores
  document.getElementById("player1score").textContent = "0";
  document.getElementById("player2score").textContent = "0";
  document.getElementById("player3score").textContent = "0";

  // Reset the player names
  player1Name = "Player 1";
  player2Name = "Player 2";
  player3Name = "Player 3";

  // Reset displayed player names
  document.getElementById("player1").textContent = "Player 1";
  document.getElementById("player2").textContent = "Player 2";
  document.getElementById("player3").textContent = "Player 3"

  // Hide instructions
  document.getElementById("hidden").style.display = "none";

  // Reset dice images
  document.getElementById("die-1").src = "/images/die-1.jpg";
  document.getElementById("die-2").src = "/images/die-1.jpg";

  // Reset the start game message
  document.getElementById("startGame").textContent = "Let's Play!";

  // reset current player
  currentPlayer = 1;
  document.getElementById("current-player").textContent =
    "Current Player: Player 1";
}

// rolling dice function
function rollDice() {
  let die1 = document.getElementById("die-1");
  let die2 = document.getElementById("die-2");
  let diceImages = [
    "die-1.jpg",
    "die-2.jpg",
    "die-3.jpg",
    "die-4.jpg",
    "die-5.jpg",
    "die-6.jpg",
  ];

  // add shake animation
  die1.classList.add("shake");
  die2.classList.add("shake");

  setTimeout(() => {
    // remove shake animation after 0.5s
    die1.classList.remove("shake");
    die2.classList.remove("shake");

    // generate random dice values
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;

    // change dice images based on random values
    die1.src = `images/die-${random1}.jpg`;
    die2.src = `images/die-${random2}.jpg`;

    // calculate the sum of the dice values
    let sum = random1 + random2;

    // Assign the score to the current player
      if (currentPlayer === 1) {
        player1Score += diceSum;
        document.getElementById("player1score").textContent = player1Score;
        checkWinner(player1Score, player1Name); // Check if Player 1 is the winner
    } else if (currentPlayer === 2) {
        player2Score += diceSum;
        document.getElementById("player2score").textContent = player2Score;
        checkWinner(player2Score, player2Name); // Check if Player 2 is the winner
    } else if (currentPlayer === 3) {
        player3Score += diceSum;
        document.getElementById("player3score").textContent = player3Score;
        checkWinner(player3Score, player3Name); // Check if Player 3 is the winner
        }
  }, 500); // Duration of the shake animation
}

// switch players
function switchPlayers() {
  currentPlayer = currentPlayer === 1 ? 2 : (currentPlayer === 2 ? 3 : 1);
  document.getElementById("current-player").textContent = `Current Player: ${
    currentPlayer === 1 ? player1Name : (currentPlayer === 2 ? player2Name : player3Name)
  }`;
}

// check the winner
function checkWinner(score, playerName) {
  if (score >= winningScore) {
    document.getElementById(
      "startGame"
    ).textContent = `${playerName} wins with the score of ${score}!🥳`;
    setTimeout(restartGame, 20000); // Restart the game after displaying the winning message for 20 seconds
  }
}
