var tasks = [];

const list = document.querySelector(".list");

function acceptToDo() {
  var info = document.getElementById("textbox").value;
  if (info.match(/\S/) && !tasks.includes(info)) {
    tasks.push(info);
    const tempTask = document.createElement("div");
    tasks.forEach(function (task) {
      tempTask.innerHTML = `<div class='flex-container'>${task}<div><button onclick="deleteTask(task)">delete</button></div></div>`;
      list.append(tempTask);
    });
  } else if (tasks.includes(info)) {
    window.alert("This ToDo already exists!");
  } else {
    window.alert("Cannot be blank");
  }
  document.getElementById("textbox").value = "";
}

function deleteTask(task) {
  list.remove(task);
}
