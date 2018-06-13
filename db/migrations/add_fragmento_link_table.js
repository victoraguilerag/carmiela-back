exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('fragmento-link', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('url')
      table.integer('empresa_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('fragmento-link')
  ])
)
