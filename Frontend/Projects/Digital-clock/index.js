//function  updateclock()

function updateclock() {
  const date = new Date();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hours = date.getHours();
  let newHours = hours < 10 ? "0" + hours : hours;
  let newMinutes = minutes < 10 ? "0" + minutes : minutes;
  let newSeconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById(
    "clock"
  ).textContent = `${newHours}:${newMinutes}:${newSeconds}`;
}
updateclock(); //invoke or call
setInterval(updateclock, 1000);
