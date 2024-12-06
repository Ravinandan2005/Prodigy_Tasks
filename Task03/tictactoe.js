const board = document.getElementById("board");
const cells = Array.from(document.getElementsByClassName("cell"));
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin() {
  for (const condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      statusText.textContent = `${currentPlayer} Wins!`;
      isGameActive = false;
      return true;
    }
  }

  if (!gameState.includes("")) {
    statusText.textContent = "It's a Draw!";
    isGameActive = false;
    return true;
  }

  return false;
}

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (isGameActive && gameState[index] === "") {
    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    if (!checkWin()) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
statusText.textContent = `Player ${currentPlayer}'s turn`;
