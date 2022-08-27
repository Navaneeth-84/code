const loginButton = document.querySelector(".loginbtn");
loginButton.addEventListener("click", validateCredentials);
function validateFieldsNotEmpty() {
  console.log("clicked");
  resetAlerts();
  const uname = document.querySelector(".username").value;
  const pwd = document.querySelector(".password").value;

  if (uname.length === 0) {
    errorAlert("username field cannot be empty", ".email");
  }
  if (pwd.length === 0) {
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
  let isValidUsername = false;
  let isValidPassword = false;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uname)) {
    isValidUsername = true;
  }

  if (
    pwd.length >= 8 &&
    /[a-z]/.test(pwd) &&
    /[A-Z]/.test(pwd) &&
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pwd) &&
    /[0-9]/.test(pwd)
  ) {
    isValidPassword = true;
  }

  if (isValidPassword == false && isValidUsername == false) {
    errorAlert("invalid username", ".email");
    errorAlert("invalid password", ".pwd");
  } else if (isValidPassword == true && isValidUsername == true) {
    alert("valid username and password");
  } else if (!isValidUsername) {
    errorAlert("invalid username", ".email");
  } else if (!isValidPassword) {
    errorAlert("invalid password", ".pwd");
  }
}

// == vs ===
