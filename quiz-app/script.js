// array of questions

const questions = [
  "What is the cost of casiotone cts-300 in amazon?",
  "How many levels of sensitivity does it feature?",
  "Ho much time does amazon take to deliver the product after placing the order?",
];

const answers = ["b", "d", "d"];

const options = [
  ["₹ 500", "₹ 9,990", "₹ 5,779", "different than ones above"],
  ["12", "0.33", "5", "3"],
  [
    "5 - 7 days",
    "2 days",
    "more than a week",
    "depends upon the delivary location",
  ],
];

// display questions to quiz box
var i = -1;
var score = 0;

loadNextQuestion();

function loadNextQuestion() {
  i += 1;
  clearInputs();
  let quesSpace = document.getElementById("question_text");
  quesSpace.innerText = questions[i];
  opts = document.getElementsByTagName("label");
  for (let j = 0; j < options[i].length; ++j) {
    opts[j].innerText = options[i][j];
  }
}

function getChoosen() {
  let choosen = "";
  let ele = document.getElementsByName("ans");
  for (let k = 0; k < ele.length; ++k) {
    if (ele[k].checked) {
      choosen = ele[k].id;
    }
  }
  return choosen;
}

function clearInputs() {
  let inps = document.getElementsByName("ans");
  inps.forEach((element) => {
    element.checked = false;
  });
}

function showResults() {
  let resultSpace = document.getElementById("question_text");
  resultSpace.innerText = `You scored ${score}/${questions.length} correctly.`;
}

var btn = document.getElementById("submit");

// evaluate answers
btn.addEventListener("click", () => {
  if (btn.innerText == "Reload quiz") {
    window.location.reload();
  } else {
    let choosen = getChoosen();
    if (choosen == answers[i]) {
      score += 1;
    }

    if (i < questions.length - 1 && choosen != "") {
      loadNextQuestion();
    } else {
      let optionsArea = document.querySelector(".options");
      optionsArea.style.display='none';
      showResults();
      btn.innerText='Reload quiz'
    }
  }
});
