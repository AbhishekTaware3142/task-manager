// Import the service layer
const taskService = require("../services/task.service");

// ✅ Add a new task
const addTask = (req, res, next) => {
  try {
    const { title, assignedTo, email, deadline } = req.body;

    // Validate input
    if (!title || !assignedTo || !email || !deadline) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create task using service
    const task = taskService.createTask(
      title.trim(),
      assignedTo.trim(),
      email.trim(),
      deadline
    );

    // Send response
    res.status(201).json(task);
  } catch (err) {
    next(err); // Send error to global error handler
  }
};

// ✅ Get all tasks
const getTasks = (req, res, next) => {
  try {
    const tasks = taskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// ✅ Mark task as completed
const markCompleted = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const task = taskService.completeTask(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// ✅ Delete a task
const removeTask = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const deleted = taskService.deleteTask(id);

    if (!deleted) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    next(err);
  }
};

// ✅ Export all controller functions
module.exports = {
  addTask,
  getTasks,
  markCompleted,
  removeTask
};
