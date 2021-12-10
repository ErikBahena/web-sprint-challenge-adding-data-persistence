// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const ProjectModel = require("./model");

router.get("/", (req, res, next) => {
  ProjectModel.find()
    .then((projects) => res.status(200).json(projects))
    .catch(next);
});

router.post("/", (req, res, next) => {
  ProjectModel.create(req.body)
    .then((newProject) => res.status(200).json(newProject))
    .catch(next);
});

module.exports = router;
