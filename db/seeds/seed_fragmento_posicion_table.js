const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento-posicion').del().then(() => {
    const promises = Array(3).fill().map((_, i) => {
      return knex('fragmento-posicion').insert([{
        id: i + 1,
        tipo: 'texto',
        fragmento: casual.sentence,
        posicion_id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}
