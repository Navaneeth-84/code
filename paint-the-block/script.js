const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("reset_button");

function clearInputs() {
  let inputs = document.querySelectorAll("input");
  inputs.forEach((element) => {
    element.value = "";
  });
}

changeBtn.addEventListener("click", () => {
  let blockNum = document.getElementById("block_id").value;
  let colour = document.getElementById("colour_id").value;

  let block = document.body.querySelectorAll(".block")[blockNum - 1];
  block.style.backgroundColor = colour;
  clearInputs();
});

resetBtn.addEventListener("click", () => {
  grid = document.querySelectorAll(".block");
  grid.forEach((block) => {
    block.style.backgroundColor = "white";
  });
  clearInputs();
});

/**
 * clearInput() clears input field values
 * event listeners for the buttons change and reset as expected
*/