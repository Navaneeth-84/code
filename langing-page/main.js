function changeTheme() {
  var btn = document.querySelector(".bg");
  var b = document.getElementById("changeTheme");
  btn.classList.toggle("dark");
  b.innerHTML = btn.classList.contains("dark") ? "lights on" : "lights off";
}
