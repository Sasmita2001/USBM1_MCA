//function  updateclock()

function updateclock() {
  const clock = document.getElementById("clock");

  const now = new DataTransfer();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = `${hours}:${minutes} :${seconds}`;
}

updateclock(); //invoke or call
setInterval(updateclock, 1000);
