// build your `Task` model here
const db = require("../../data/dbConfig");

const find = async () => {
  return await db("tasks");
};

const findById = async (task_id) => {
  return await db("tasks").where({ task_id });
};

const create = async (newTask) => {
  const [newTaskId] = db("tasks").insert(newTask);

  return findById(newTaskId);
};

module.exports = { find, create };
