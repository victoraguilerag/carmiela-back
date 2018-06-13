exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('fragmento-descripcion', (table) => {
      table.increments('id').primary().unsigned()
      table.string('tipo')
      table.string('fragmento')
      table.integer('posicion_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('fragmento-descripcion')
  ])
)
