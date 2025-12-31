const Task = require("../models/task.model");

let tasks = [];
let counter = 1;

const createTask = (title, assignedTo, email, deadline) => {
  // ✅ Make sure all fields are passed
  const task = new Task(counter++, title, assignedTo, email, deadline);
  tasks.push(task);
  return task;
};

const getAllTasks = () => tasks;

const completeTask = (id) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  task.completed = true;
  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

module.exports = {
  createTask,
  getAllTasks,
  completeTask,
  deleteTask
};
