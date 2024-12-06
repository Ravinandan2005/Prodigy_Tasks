let timer = document.getElementById("timer");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

let interval;
let seconds = 0;

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function updateTimer() {
  timer.textContent = formatTime(seconds);
}

startButton.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      updateTimer();
    }, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateTimer();
});
