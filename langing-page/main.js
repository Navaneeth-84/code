function changeTheme() {
  var btn = document.querySelector(".bg");
  if (btn.classList.contains("dark")) {
    btn.classList.remove("dark");
    document.getElementById('changeTheme').innerText="lights off";
  } else {
    btn.classList.add("dark");
    document.getElementById('changeTheme').innerText="lights on";
  }
}
