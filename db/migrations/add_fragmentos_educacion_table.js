exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('fragmento-educacion', (table) => {
      table.increments('id').primary().unsigned()
      table.string('entidad')
      table.string('titulo')
      table.string('periodo')
      table.integer('experiencia_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('fragmento-educacion')
  ])
)
