const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");
const displayhours = document.getElementById("hours");
const displayminutes = document.getElementById("minutes");
const displayseconds = document.getElementById("seconds");
const state = document.getElementById("state");

let intervalId;
let startTime = 0;

const formatTime = (startTime) => {
  const seconds = Math.floor(startTime % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((startTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor(startTime / 3600)
    .toString()
    .padStart(2, "0");

  displayhours.textContent = hours;
  displayminutes.textContent = minutes;
  displayseconds.textContent = seconds;
};

const pauseTimer = () => {
  clearInterval(intervalId);

  startButton.disabled = false;
  pauseButton.disabled = true;
  state.textContent = "Paused";
  startButton.textContent = "Resume";
};

const resetTimer = () => {
  clearInterval(intervalId);
  startTime = 0;
  formatTime(startTime);
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
  state.textContent = "Ready";
  startButton.textContent = "Start";
};

const startTimer = () => {
  intervalId = setInterval(() => {
    startTime++;
    formatTime(startTime);
  }, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
  state.textContent = "Running";
};

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
pauseButton.addEventListener("click", pauseTimer);
