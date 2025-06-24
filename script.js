let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function renderTasks() {
  const ul = document.getElementById("task-list");
  ul.innerHTML = "";
  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "completed" : "";
    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <button onclick="deleteTask(${index})">🗑</button>
    `;
    ul.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("new-task");
  const text = input.value.trim();
  if (text !== "") {
    taskList.push({ text, done: false });
    input.value = "";
    saveTasks();
    renderTasks();
  }
}

function toggleTask(index) {
  taskList[index].done = !taskList[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  saveTasks();
  renderTasks();
}

renderTasks();
