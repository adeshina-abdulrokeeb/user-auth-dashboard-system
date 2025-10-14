document.addEventListener("DOMContentLoaded", () => {
  const storedUsername = localStorage.getItem("username");
  const displayUsername = document.getElementById("displayUsername");

  if (storedUsername) {
    displayUsername.textContent = storedUsername;
  } else {
    window.location.href = "index.html";
  }

  document.getElementById("goToDashboard").addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
}); 