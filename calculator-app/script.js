
var inp = document.querySelector(".input");

btns = document.querySelectorAll(".key");

btns.forEach(btn => {
  btn.addEventListener("click", function () {
    if (document.getElementById("cls") == this) {
      inp.innerHTML = "";
    } else if (document.getElementById("del") == this) {
      inp.innerHTML = inp.innerHTML.slice(0, -1);
    } else if (document.getElementById("cal") == this) {
        try{
            var res = eval(inp.innerHTML);
            inp.innerHTML=res;
        }
        catch(EvalError){   // if input is an invalid arithmetic expr
            inp.innerHTML='error'
        }
    } else inp.innerHTML += this.innerHTML;
  });
});
