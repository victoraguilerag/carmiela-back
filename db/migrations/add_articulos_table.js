exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('articulos', (table) => {
      table.increments('id').primary().unsigned()
      table.string('titulo')
      table.string('portada')
      table.string('fecha')
      table.string('previa')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('articulos')
  ])
)
