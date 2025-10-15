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

  // DARK MODE TOGGLE
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});