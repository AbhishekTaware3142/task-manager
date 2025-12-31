const API_URL = "/api/tasks";

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span>${task.title}</span>
      <span>${task.assignedTo}</span>
      <span>${task.email}</span>
      <span>${task.deadline}</span>
      <div class="actions">
        <button onclick="completeTask(${task.id})">Done</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById("title").value.trim();
  const assignedTo = document.getElementById("assignedTo").value.trim();
  const email = document.getElementById("email").value.trim();
  const deadline = document.getElementById("deadline").value;

  if (!title || !assignedTo || !email || !deadline) {
    alert("Please fill all fields");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, assignedTo, email, deadline })
  });

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("assignedTo").value = "";
  document.getElementById("email").value = "";
  document.getElementById("deadline").value = "";

  loadTasks();
}

async function completeTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "PUT" });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadTasks();
}

// Load tasks on page load
loadTasks();
