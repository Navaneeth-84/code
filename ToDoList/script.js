
var tasks = [];

const list = document.querySelector(".list");

function acceptToDo() {

  var info = document.getElementById("textbox").value;
  if (info.match(/\S/) && !tasks.includes(info)) {
    tasks.push(info);
    // window.alert(info + " added");
    const tempTask = document.createElement("div");
    tasks.forEach(function (task) {
      tempTask.innerText = task;
      list.append(tempTask);
    });
    const btn = document.createElement("button");
    btn.innerHTML = "delete";
    list.append(btn);

  } else if (tasks.includes(info)) {
    window.alert("This ToDo already exists!");
  } else {
    window.alert("Cannot be blank");
  }
  document.getElementById("textbox").value = ""; 
}

