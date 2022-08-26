function validateFieldsNotEmpty() {
  resetAlerts();
  const uname = document.querySelector(".username").value;
  const pwd = document.querySelector(".password").value;

  if (uname.length == 0) {
    errorAlert("username field cannot be empty", ".uname");
  }
  if (pwd.length == 0) {
    errorAlert("password cannot be empty", ".pwd");
  }
  if (uname.length != 0 && pwd.length != 0) {
    validateCredentials(uname, pwd);
  }
}

function errorAlert(msg, alertArea) {
  const alert = document.querySelector(alertArea);
  alert.innerText = msg;
}

function resetAlerts() {
  const resetAction = document.querySelectorAll(".msgArea");

  resetAction.forEach((msgArea) => {
    msgArea.innerText = "";
  });
}

function validateCredentials(uname, pwd) {
  const isValidUsername = false;
  const isValidPassword = false;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uname)) {
    isValidUsername = true;
  }

  const hasLower = false;
  const hasUpper = false;
  const hasSpecial = false;
  const hasNumber = false;
  const hasMinLength = false;

  if (pwd.length >= 8) {
    hasMinLength = true;
  }
  if (/[a-z]/.test(pwd)) {
    hasLower = true;
  }
  if (/[A-Z]/.test(pwd)) {
    hasUpper = true;
  }
  const splChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (splChars.test(pwd)) {
    hasSpecial = true;
  }
  if (/[0-9]/.test(pwd)) {
    hasNumber = true;
  }

  if (hasLower && hasUpper && hasSpecial && hasNumber && hasMinLength) {
    isValidPassword = true;
  }

  if (!isValidPassword && !isValidUsername) {
    errorAlert("invalid username", ".uname");
    errorAlert("invalid password", ".pwd");
  }
}
