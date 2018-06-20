exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('redes', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('url')
      table.integer('personal_id')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('redes')
  ])
)
