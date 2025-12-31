class Task {
  constructor(id, title, assignedTo, email, deadline) {
    this.id = id;
    this.title = title;
    this.assignedTo = assignedTo;
    this.email = email;
    this.deadline = deadline; // format: YYYY-MM-DD
    this.completed = false;
    this.createdAt = new Date();
  }
}

module.exports = Task;
