exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('fragmento-articulo', (table) => {
      table.increments('id').primary().unsigned()
      table.string('tipo')
      table.string('fragmento')
      table.integer('cuerpo_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('fragmento-articulo')
  ])
)
