const express = require("express");

const server = express();
server.use(express.json());

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use("*", (err, next, req, res) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = server;
