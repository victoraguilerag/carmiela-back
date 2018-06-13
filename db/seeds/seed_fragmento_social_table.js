const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento-social').del().then(() => {
    const promises = Array(3).fill().map((_, i) => {
      return knex('fragmento-social').insert([{
        id: i + 1,
        nombre: casual.name,
        url: "http://www.instagram.com",
        empresa_id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}
