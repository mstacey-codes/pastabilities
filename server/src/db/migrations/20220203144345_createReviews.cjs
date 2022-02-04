/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable('reviews', (table) => {
        table.bigIncrements('id')
        table.bigInteger('pastaId')
            .notNullable()
            .index()
            .unsigned()
            .references('pastas.id')
        table.string('title').notNullable()
        table.integer('rating').notNullable()
        table.string('review')
        table.string('recipe')
        table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists('reviews')
}
