exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('fragmento-skill-principales', (table) => {
      table.increments('id').primary().unsigned()
      table.string('skill')
      table.string('descripcion')
      table.integer('skills_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('fragmento-skill-principales')
  ])
)
