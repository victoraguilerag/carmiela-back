exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('personal', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('apellido')
      table.string('correo')
      table.string('telefono')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('personal')
  ])
)
