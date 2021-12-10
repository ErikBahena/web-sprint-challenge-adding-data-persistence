exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 50).notNullable();
      table.string("project_description", 250);
      table.integer("project_completed").defaultTo(0);
    })
    .createTable("resources", (table) => {
      table.increments("resources_id");
      table.string("resources_name", 50).notNullable().unique();
      table.integer("resource_description", 250);
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description", 250).notNullable();
      table.string("task_notes", 250);
      table.string("task_completed").defaultTo(0);

      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
    })
    .createTable("project_resources", (table) => {
      table.increments("project_resource_id");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");

      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
