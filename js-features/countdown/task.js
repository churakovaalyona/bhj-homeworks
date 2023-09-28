const timerDisplay = document.getElementById('timer');
let seconds = 59; 


timerDisplay.textContent = seconds;
function updateTimer() {
  if (seconds < 0) {

    alert("Вы победили в конкурсе!");

    clearInterval(timerInterval);
  } else {
    timerDisplay.textContent = seconds;
    seconds--;
  }
}

const timerInterval = setInterval(updateTimer, 1000);
