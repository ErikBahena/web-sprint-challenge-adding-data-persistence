// build your `Project` model here
const db = require("../../data/dbConfig");

const find = async () => {
  const projects = await db("projects");

  projects.forEach((project) => {
    if (project.project_completed === 0 || project.project_completed === null)
      project.project_completed = false;
    else project.project_completed = true;
  });

  return projects;
};

const findById = async (project_id) => {
  const project = await db("projects").where({ project_id }).first();

  if (project.project_completed === 0) project.project_completed = false;
  else project.project_completed = true;

  return project;
};

const create = async (newProject) => {
  const [newProjectId] = await db("projects").insert(newProject);
  return findById(newProjectId);
};

module.exports = { find, create };
