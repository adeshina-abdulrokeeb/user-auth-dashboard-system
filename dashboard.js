document.addEventListener("DOMContentLoaded", () => {
  const storedUsername = localStorage.getItem("username");
  const dashUsername = document.getElementById("dashUsername");
  const welcomeName = document.getElementById("welcomeName");

  if (storedUsername) {
    dashUsername.textContent = storedUsername;
    welcomeName.textContent = storedUsername;
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  document.getElementById("logoutDash").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "form.html";
  });
});