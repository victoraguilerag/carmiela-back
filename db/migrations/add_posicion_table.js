exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('posicion', (table) => {
      table.increments('id').primary().unsigned()
      table.string('cargo')
      table.integer('empresa_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('posicion')
  ])
)
