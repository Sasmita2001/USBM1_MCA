let timer;

function startTimer() {
  let time = parseInt(document.getElementById("timeInput").value); // Convert to a number
  clearInterval(timer);

  // Validate the input
  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }

  document.getElementById("timerDisplay").innerText = time;

  timer = setInterval(() => {
    time--;
    document.getElementById("timerDisplay").innerText = time;

    if (time < 0) {
      // Check for less than 0
      clearInterval(timer);
      alert("Time Over.....");
    }
  }, 1000);
}
