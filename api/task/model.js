const db = require("../../data/dbConfig");

const find = async () => {
  const tasks = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_description", "p.project_name");

  tasks.forEach((task) => {
    if (task.task_completed === 0 || task.task_completed === null)
      task.task_completed = false;
    else task.task_completed = true;
  });

  return tasks;
};

const findById = async (task_id) => {
  const task = await db("tasks").where({ task_id }).first();

  if (task.task_completed === 0 || task.task_completed === null)
    task.task_completed = false;
  else task.task_completed = true;

  return task;
};

const create = async (newTask) => {
  const [newTaskId] = await db("tasks").insert(newTask);

  return findById(newTaskId);
};

module.exports = { find, create };
