// container div
var scr = document.createElement("div");

// up, counter and down
var up = document.createElement("p");
var counter = document.createElement("div");
var down = document.createElement("p");

up.innerText = ">";
down.innerText = "<";

scr.className = "container";
up.className = "clicker up";
counter.className = "cntr flash";
counter.innerText = 0;
down.className = "clicker down";

// append all elements to the body
document.body.appendChild(scr);

var tmp = document.querySelector(".container");
tmp.append(up, counter, down);

// increment / decrement functionality
var incr = document.querySelector(".up");
var decr = document.querySelector(".down");

incr.addEventListener("click", function () {
  num = Number(document.querySelector(".cntr").innerHTML);
  document.querySelector(".cntr").innerHTML = num + 1;
});

decr.addEventListener("click", function () {
  document.querySelector(".cntr").innerText -= 1;
});
