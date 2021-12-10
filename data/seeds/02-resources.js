exports.seed = function (knex) {
  return knex("resources").insert([
    { resource_name: "keyboard" },
    { resource_name: "computer", resource_description: "Windows PC" },
  ]);
};
