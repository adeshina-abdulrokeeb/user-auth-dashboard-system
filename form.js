const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const strengthIndicator = document.getElementById("strength-indicator");
const strengthText = document.getElementById("strength-text");
const submitBtn = form.querySelector("button[type='submit']");

function showError(input, message) {
  const formControl = input.parentElement.classList.contains("password-wrapper")
    ? input.parentElement.parentElement
    : input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement.classList.contains("password-wrapper")
    ? input.parentElement.parentElement
    : input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.textContent = "";
}

function isValidEmail(emailValue) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailValue);
}

function checkPasswordStrength(pw) {
  let strength = 0;
  if (pw.length >= 6) strength++;
  if (pw.match(/[A-Z]/)) strength++;
  if (pw.match(/[0-9]/)) strength++;
  if (pw.match(/[^A-Za-z0-9]/)) strength++;

  strengthIndicator.style.width = (strength * 25) + "%";

  if (strength <= 1) {
    strengthIndicator.style.background = "red";
    strengthText.textContent = pw.length ? "Password is too weak" : "";
    strengthText.style.color = "red";
  } else if (strength === 2) {
    strengthIndicator.style.background = "orange";
    strengthText.textContent = "You could make it stronger for better security";
    strengthText.style.color = "orange";
  } else if (strength === 3) {
    strengthIndicator.style.background = "#f1c40f";
    strengthText.textContent = "Good enough password";
    strengthText.style.color = "#f1c40f";
  } else {
    strengthIndicator.style.background = "#2ecc71";
    strengthText.textContent = "Strong password";
    strengthText.style.color = "#2ecc71";
  }
}

// Toggle password visibility
document.querySelectorAll(".toggle-password").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const targetId = toggle.getAttribute("data-target");
    const input = document.getElementById(targetId);
    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = "+";
    } else {
      input.type = "password";
      toggle.textContent = "👁";
    }
  });
});

// Validation on blur (not while typing)
[username, email, password, password2].forEach(input => {
  input.addEventListener("blur", () => {
    validateForm();
  });

  input.addEventListener("input", () => {
    if (input === password) {
      checkPasswordStrength(password.value);
    }
  });
});

function validateForm() {
  let valid = true;

  // Username
  if (username.value.trim() === "") {
    showError(username, "Username is required");
    valid = false;
  } else {
    showSuccess(username);
  }

  // Email
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    valid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, "Email is not valid");
    valid = false;
  } else {
    showSuccess(email);
  }

  // Password
  if (password.value.trim() === "") {
    showError(password, "Password is required");
    valid = false;
  } else if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  } else {
    showSuccess(password);
  }

  // Confirm Password
  if (password2.value.trim() === "") {
    showError(password2, "Please confirm your password");
    valid = false;
  } else if (password2.value !== password.value) {
    showError(password2, "Passwords do not match");
    valid = false;
  } else {
    showSuccess(password2);
  }

  submitBtn.disabled = !valid;
  return valid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    const uname = username.value.trim();
    localStorage.setItem("username", uname);
    window.location.href = "welcome.html";
  }
});
