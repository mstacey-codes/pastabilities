/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("pastas", (table) => {
    table.bigIncrements("id").primary();
    table.string("name").notNullable().unique();
    table.string("description").notNullable();
    table.bigInteger("categoryId").unsigned().notNullable().index().references("categories.id");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("pastas");
};
