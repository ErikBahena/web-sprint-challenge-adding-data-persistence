// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const ResourcesModel = require("./model");

router.get("/", (req, res, next) => {
  ResourcesModel.find()
    .then((resources) => res.status(200).json(resources))
    .catch(next);
});

router.post("/", (req, res, next) => {
  ResourcesModel.create(req.body)
    .then((newResource) => res.status(200).json(newResource))
    .catch(next);
});

module.exports = router;
