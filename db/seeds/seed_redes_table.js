const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  // return knex('articulos').del().then(() => {
  //   const promises = Array(10).fill().map((_, i) => {
  //     return knex('articulos').insert([{
  //       id: i + 1,
  //       titulo: casual.words(6),
  //       portada: 'chinos',
  //       fecha: casual.date(),
  //       previa: casual.sentences(4)
  //     }])
  //   })
  //
  //   return Promise.all(promises)
  // })
  return knex('redes').del().then(() => {
    const promises = api.personal.redes.map((redes, index) => {
      return knex('redes').insert([{
        id: index,
        nombre: redes.nombre,
        url: redes.url,
        personal_id: 1,
      }])
    })

    return Promise.all(promises)
  })
}
