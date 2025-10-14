document.addEventListener("DOMContentLoaded", () => {
  // ===== USERNAME DISPLAY =====
  const storedUsername = localStorage.getItem("username");
  const dashUsername = document.getElementById("dashUsername");
  const welcomeName = document.getElementById("welcomeName");

  if (storedUsername) {
    dashUsername.textContent = storedUsername;
    welcomeName.textContent = storedUsername;
  }

  // ===== SIDEBAR & MENU TOGGLE =====
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // ===== LOGOUT =====
  document.getElementById("logoutDash").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });

  // ===== CHARTS =====
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