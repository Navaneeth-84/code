const arr = [
  ["C", "/", "*", "<"],
  [7, 8, 9, "-"],
  [4, 5, 6, "+"],
  [1, 2, 3, "."],
  ["(", 0, ")", "="],
];

// create container
var app = document.createElement("div");
app.className = "container";

// create div for in / out
var res = document.createElement("div");
res.className = "inout";

// create keys for in
var btns = document.createElement("div");
btns.className = "buttons";

document.body.appendChild(app);
var cont = document.querySelector(".container");
cont.appendChild(res);
cont.appendChild(btns);

for (let i = 0; i < arr.length; i++) {
  var row = document.createElement("div");
  row.id = "r" + (i + 1);
  arr[i].forEach((sym) => {
    var key = document.createElement("div");
    key.className = "key";
    key.innerText = sym;
    row.appendChild(key);
  });
  document.querySelector(".buttons").appendChild(row);
}

// retrieve all functional keys
var r1 = document.getElementById("r1");
var keys = r1.querySelectorAll(".key");
var clrKey = keys[0];
var delKey = keys[3];
var eqKey = document.getElementById("r5").lastChild;
clrKey.style.backgroundColor = "#e0314c";
delKey.style.backgroundColor = "grey";
eqKey.style.backgroundColor = "lightgrey";

clrKey.id = "cls"; // assign ids for functional keys
delKey.id = "del";
eqKey.id = "eq";

var inp = document.querySelector(".inout");

btns = document.querySelectorAll(".key");

var ops = ["+", "-", "*", "/"];
var prec = ["(", ")"];

// functions to handle click events
function del() {
  inp.innerHTML = inp.innerHTML.slice(0, -1);
}

function clsc() {
  inp.innerHTML = "";
}

function eq() {
  try {
    var res = eval(inp.innerHTML);
    inp.innerHTML = res;
  } catch (EvalError) {
    // if input is an invalid arithmetic expr
    inp.innerHTML = "error";
  }
}

// handling when inputs are + - / *
function operatorInput(symbol) {
  if (inp.innerHTML == "" && symbol != "/" && symbol != "*")
    inp.innerHTML = symbol;
  else if (
    inp.innerHTML != "" &&
    ops.includes(inp.innerHTML.charAt(inp.innerHTML.length - 1))
  ) {
    inp.innerHTML = inp.innerHTML.slice(0, -1);
    inp.innerHTML += symbol;
  } else inp.innerHTML += symbol;
}

// handling when inputs are ( and )
function precedenceInput(symbol) {
  if (prec.includes(inp.innerHTML.charAt(inp.innerHTML.length - 1))) {
    inp.innerHTML = inp.innerHTML.slice(0, -1);
    inp.innerHTML += symbol;
  } else {
    inp.innerHTML += symbol;
  }
}

// handling when input is '0'
function zeroInput(symbol) {
  inp.innerHTML += symbol; // TBI
}

// event listener
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    symbol = btn.innerHTML;
    if (document.getElementById("cls") == btn) {
      clsc();
    } else if (document.getElementById("del") == btn) {
      del();
    } else if (document.getElementById("eq") == btn) {
      eq();
    } else if (ops.includes(symbol)) {
      operatorInput(symbol);
    } else if (prec.includes(symbol)) {
      precedenceInput(symbol);
    } else if (symbol == "0") {
      zeroInput(symbol);
    } else if (symbol == ".") {
      inp.innerHTML +=
        inp.innerHTML.charAt(inp.innerHTML.length - 1) == "." ? "" : symbol;
    } else inp.innerHTML += symbol;
  });
});
