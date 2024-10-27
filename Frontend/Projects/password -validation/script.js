function validateFields() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validate username
  if (!username) {
    alert("Username must be filled");
    return false;
  } else if (username.length < 3 || username.length > 20) {
    alert("Username must be between 3 and 20 characters long");
    return false;
  } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
    alert("Username can not  contain  special characters");
    return false;
  }

  // Validate password
  if (!password) {
    alert("Password must be filled");
    return false;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  } else if (!/[A-Z]/.test(password)) {
    alert("Password must contain at least one uppercase letter");
    return false;
  } else if (!/[a-z]/.test(password)) {
    alert("Password must contain at least one lowercase letter");
    return false;
  } else if (!/[0-9]/.test(password)) {
    alert("Password must contain at least one number");
    return false;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert("Password must contain at least one special character");
    return false;
  }

  alert("Submitted successfully");
  return true;
}

// Add event listener for the submit button
document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    if (!validateFields()) {
      event.preventDefault();
    }
  });
