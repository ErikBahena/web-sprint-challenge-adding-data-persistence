// build your `Project` model here
const db = require("../../data/dbConfig");

const find = async () => {
  return await db("projects");
};

const findById = async (project_id) => {
  return await db("projects").where({ project_id });
};

const create = async (newProject) => {
  const [newProjectId] = db("projects").insert(newProject);

  return findById(newProjectId);
};

module.exports = { find, create };
