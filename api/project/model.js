// build your `Project` model here
const db = require("../../data/dbConfig");

const formatProjects = (projectsArr, project) => {
  if (projectsArr === null) {
    if (project.project_completed === 0 || project.project_completed === null)
      project.project_completed = false;
    else {
      project.project_completed = true;
    }

    return project;
  }

  if (projectsArr.length === 0) return [];

  if (projectsArr.length > 0) {
    projectsArr.forEach((project) => {
      if (project.project_completed === 0 || project.project_completed === null)
        project.project_completed = false;
      else project.project_completed = true;
    });

    return projectsArr;
  }
};

const find = async () => {
  const projects = await db("projects");

  return formatProjects(projects);
};

const findById = async (project_id) => {
  const project = await db("projects").where({ project_id }).first();

  return formatProjects(null, project);
};

const create = async (newProject) => {
  const [newProjectId] = await db("projects").insert(newProject);
  return findById(newProjectId);
};

module.exports = { find, create };
