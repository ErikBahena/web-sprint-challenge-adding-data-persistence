// build your `Resource` model here
const db = require("../../data/dbConfig");

const find = async () => {
  return await db("resources");
};

const findById = async (resource_id) => {
  return await db("resources").where({ resource_id }).first();
};

const create = async (newResource) => {
  const [newResourceId] = await db("resources").insert(newResource);

  return findById(newResourceId);
};

module.exports = { find, create };
