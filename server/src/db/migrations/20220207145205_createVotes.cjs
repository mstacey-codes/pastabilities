/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return (
    knex.schema.createTable("votes", (table) => {
      table.bigIncrements("id").primary()
      table.integer("value").notNullable()
      table.bigInteger("userId").notNullable().unsigned().index().references("users.id")
      table.bigInteger("reviewId").notNullable().unsigned().index().references("reviews.id")
      table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
      table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
  )
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return (
    knex.schema.dropTableIfExists("votes")
  )
}
