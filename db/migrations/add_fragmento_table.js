exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('fragmento', (table) => {
      table.increments('id').primary().unsigned()
      table.string('valor')
      table.integer('fragmento_id')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('fragmento')
  ])
)
