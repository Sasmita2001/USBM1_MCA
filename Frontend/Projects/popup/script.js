function showNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "block"; // Corrected spelling

  setTimeout(function () {
    notification.style.display = "none";
  }, 5000);
}
