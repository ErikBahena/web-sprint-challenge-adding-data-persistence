const express = require("express");
const router = express.Router();
const TasksModel = require("./model");

router.get("/", (req, res, next) => {
  TasksModel.find()
    .then((tasks) => res.status(200).json(tasks))
    .catch(next);
});

router.post("/", (req, res, next) => {
  ResourceTasksModel.create(req.body)
    .then((newTask) => res.status(200).json(newTask))
    .catch(next);
});

module.exports = router;
