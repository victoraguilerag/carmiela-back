exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('empresa', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('periodo')
      table.string('descripcion')
      table.integer('experiencia_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('empresa')
  ])
)
