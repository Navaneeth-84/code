var elems = document.querySelectorAll("input[type='checkbox']");

elems.forEach((element) => {
  element.addEventListener("click", function () {
    let good = elems[0].checked;
    let cheap = elems[1].checked;
    let fast = elems[2].checked;
    if (good && cheap) elems[2].checked = false;
    else if (good && fast) elems[1].checked = false;
    else if (fast && cheap) elems[0].cheked = false;
  });
});
