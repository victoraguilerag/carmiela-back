exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('fragmento-posicion', (table) => {
      table.increments('id').primary().unsigned()
      table.string('tipo')
      table.string('fragmento')
      table.string('nombre')
      table.string('url')
      table.integer('posicion_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('fragmento-posicion')
  ])
)
