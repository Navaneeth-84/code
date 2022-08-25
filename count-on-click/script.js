var tmp = document.querySelector(".container");

// increment / decrement functionality
var incr = document.querySelector(".fa-angle-up");
var decr = document.querySelector(".fa-angle-down");

incr.addEventListener("click", function () {
  num = Number(document.querySelector(".cntr").innerHTML);
  document.querySelector(".cntr").innerHTML = num + 1;
});

decr.addEventListener("click", function () {
  document.querySelector(".cntr").innerText -= 1;
});
