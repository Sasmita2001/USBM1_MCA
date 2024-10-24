const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const password = passwordInput.value;

const isValid = validatePassword(password);

function validatePassword() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (!username || !password) {
    alert("Both username and password field  must be filled");
    return false;
  } else if (password.length <= 8) {
    alert("Password must be 8 characters long");
    return false;
  } else if (
    password == [A - z] &&
    password == [a - z] &&
    password == [0 - 9] &&
    password == specialcharacter
  ) {
    alert("Submitted sucessfully");
  } else {
    alert("Try again");
  }
}

document
  .getElementById(`submit-btn`)
  .addEventListener(`click`, function (event) {
    if (!validatePassword()) {
      event.preventDefault();
    }
  });
