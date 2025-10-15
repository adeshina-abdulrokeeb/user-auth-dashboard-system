document.addEventListener("DOMContentLoaded", () => {
  // Username display
  const storedUsername = localStorage.getItem("username");
  const dashUsername = document.getElementById("dashUsername");
  const welcomeName = document.getElementById("welcomeName");

  if (storedUsername) {
    dashUsername.textContent = storedUsername;
    welcomeName.textContent = storedUsername;
  }

  // Sidebar and Menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Logout
  document.getElementById("logoutDash").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });

  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Load stored theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Charts
  const performanceCtx = document.getElementById("performanceChart").getContext("2d");
  const activityCtx = document.getElementById("activityChart").getContext("2d");

  new Chart(performanceCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Monthly Performance",
          data: [120, 190, 170, 210, 250, 300, 280],
          borderColor: "#6c4ba5",
          backgroundColor: "rgba(108, 75, 165, 0.2)",
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: { y: { beginAtZero: true } },
    },
  });

  new Chart(activityCtx, {
    type: "pie",
    data: {
      labels: ["Logins", "Updates", "Tasks", "Errors"],
      datasets: [
        {
          data: [45, 25, 20, 10],
          backgroundColor: ["#6c4ba5", "#8e44ad", "#f1c40f", "#e74c3c"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { position: "bottom" } },
    },
  });
});