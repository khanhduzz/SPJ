const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const tasks = [
  {
    id: uid(),
    content: "Create a Pen",
    status: "PROCESSING",
  },
  {
    id: uid(),
    content: "Go for a walk",
    status: "PROCESSING",
  },
];

function addInitialData(tasks) {
  tasks.forEach((task) => {
    addSingleTask(task);
  });
}

function addSingleTask(task) {
  let showTasks = document.querySelector(".todo-list");
  showTasks.innerHTML += `
    <li class="todo-item" id="${task.id}">
        <span class="task-text">${task.content}</span>
        <button class="complete-button" onclick="handleFinish('${task.id}')">Complete</button>
        <button class="delete-button" onclick="handleDelete('${task.id}')">Delete</button>
    </li>
    `;
}

function handleAddNewTask() {
  let taskValue = document.querySelector("input");
  let newTask = {
    id: uid(),
    content: taskValue.value,
    status: "PROCESSING",
  };
  tasks.push(newTask);
  taskValue.value = "";

  addSingleTask(newTask);
}

function handleDelete(id) {
  const li = document.getElementById(id);
  li.remove();
}

function handleFinish(id) {
  const li = document.getElementById(id);

  if (li) {
    const buttons = li.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.remove();
    });
  }

  const newButton = document.createElement("button");
  newButton.className = "completed";
  newButton.textContent = "Completed";
  newButton.disabled = true;

  li.appendChild(newButton);
}

window.onload = addInitialData(tasks);