const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento-articulo').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('fragmento-articulo').insert([{
        id: i + 1,
        tipo: 'texto',
        cuerpo_id: i + 1
      }])
    })

    return Promise.all(promises)
  })
}
