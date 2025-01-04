const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".eye-open");
const eyeClosedIcon = document.querySelector(".fa-eye-slash");

// EYE ICON FOR CONFIRM PASSWORD
const passwordField2 = document.getElementById("confirm-password");
const togglePassword2 = document.querySelector(".password__toggle-icon svg");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("eye-open");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("eye-open");
  }
});

togglePassword2.addEventListener("click", function () {
  if (passwordField2.type === "password") {
    passwordField2.type = "text";
    togglePassword2.classList.remove("eye-open");
    togglePassword2.classList.add("fa-eye-slash");
  } else {
    passwordField2.type = "password";
    togglePassword2.classList.remove("fa-eye-slash");
    togglePassword2.classList.add("eye-open");
  }
});
