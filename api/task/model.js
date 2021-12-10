const db = require("../../data/dbConfig");

const formatTasks = (tasksArr, task) => {
  if (tasksArr === null) {
    if (task.task_completed === 0 || task.task_completed === null)
      task.task_completed = false;
    else {
      task.task_completed = true;
    }

    return task;
  }

  if (tasksArr.length === 0) return [];

  if (tasksArr.length >= 1) {
    tasksArr.forEach((task) => {
      if (task.task_completed === 0 || task.task_completed === null)
        task.task_completed = false;
      else task.task_completed = true;
    });

    return tasksArr;
  }
};

const find = async () => {
  const tasks = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_description", "p.project_name");

  return formatTasks(tasks, null);
};

const findById = async (task_id) => {
  const task = await db("tasks").where({ task_id }).first();

  return formatTasks(null, task);
};

const create = async (newTask) => {
  const [newTaskId] = await db("tasks").insert(newTask);

  return findById(newTaskId);
};

module.exports = { find, create };
