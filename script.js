let button = document.getElementById("createAccount");

button.addEventListener("click", (event) => {
  let password = document.getElementById("pass");
  let confirmPassword = document.getElementById("confirm_password");
  let passwordError = document.getElementById("password_error");

  if (confirmPassword.value !== password.value) {
    event.preventDefault();
    passwordError.textContent = "Passwords do not match";
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
  } else {
    password.textContent = "";
    confirmPassword.style.borderColor = "";
  }
});
