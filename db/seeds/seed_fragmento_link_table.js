const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  return knex('fragmento-link').del().then(() => {
    // const promises = Array(3).fill().map((_, i) => {
    //   return knex('fragmento-link').insert([{
    //     id: i + 1,
    //     nombre: casual.name,
    //     url: "http://www.google.com",
    //     empresa_id: i + 1,
    //   }])
    // })

    let count = 0
    api.experiencia.profesional.map((empresa, i) => {
      const promises = empresa.link.map((link, index) => {
          return knex('fragmento-link').insert([{
            id: count++,
            nombre: link.nombre,
            url: link.url,
            empresa_id: i
          }])
      })

      return Promise.all(promises)
    })

  })
}
