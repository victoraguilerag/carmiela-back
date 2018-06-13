const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento-link').del().then(() => {
    const promises = Array(3).fill().map((_, i) => {
      return knex('fragmento-link').insert([{
        id: i + 1,
        nombre: casual.name,
        url: "http://www.google.com",
        empresa_id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}
