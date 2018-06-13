exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('skill', (table) => {
      table.increments('id').primary().unsigned()
      table.integer('experiencia_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('skill')
  ])
)
