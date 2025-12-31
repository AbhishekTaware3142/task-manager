const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.post("/tasks", taskController.addTask);
router.get("/tasks", taskController.getTasks);
router.put("/tasks/:id", taskController.markCompleted);
router.delete("/tasks/:id", taskController.removeTask);

module.exports = router;
