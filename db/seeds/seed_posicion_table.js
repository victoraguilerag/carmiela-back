const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('posicion').del().then(() => {
    const promises = Array(3).fill().map((_, i) => {
      return knex('posicion').insert([{
        id: i + 1,
        cargo: casual.sentence,
        empresa_id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}
