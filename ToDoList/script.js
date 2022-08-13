
var tasks = [];

function acceptToDo() {

  var info = document.getElementById("textbox").value;
  if (info.match(/\S/) && !tasks.includes(info)) {
    tasks.push(info);
    window.alert(info + " added");
  } else if (tasks.includes(info)) {
    window.alert("This ToDo already exists!");
  } else {
    window.alert("Cannot be blank");
  }
  document.getElementById("textbox").value = "";

  const list = document.querySelector(".list");
  list.innerText="";    
  tasks.forEach(function (task) {
    const tempTask = document.createElement("div");
    tempTask.innerText = task;
    list.appendChild(tempTask);
  });
}
