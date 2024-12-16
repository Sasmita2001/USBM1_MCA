timer();
function timer() {
  let blink = document.getElementById("blink");
  blink.style.color = blink.style.color == "green" ? "pink" : "green";
  blink.style.opacity = blink.style.opacity == 1 ? 0.5 : 1;
  setTimeout(timer, 1000);
}
