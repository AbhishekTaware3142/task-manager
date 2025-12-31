const express = require("express");
const path = require("path");
const taskRoutes = require("./routes/task.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", taskRoutes);
app.use(errorHandler);

module.exports = app;
