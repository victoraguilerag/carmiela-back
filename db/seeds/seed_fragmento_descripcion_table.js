const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento-descripcion').del().then(() => {
    const promises = Array(3).fill().map((_, i) => {
      return knex('fragmento-descripcion').insert([{
        id: i + 1,
        tipo: 'texto',
        fragmento: casual.description,
        posicion_id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}
