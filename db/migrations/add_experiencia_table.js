exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('experiencia', (table) => {
      table.increments('id').primary().unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('experiencia')
  ])
)
