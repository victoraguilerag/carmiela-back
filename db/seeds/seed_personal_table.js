
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
  return knex('personal').del().then(() => {
      return knex('personal').insert([{
        id: 1,
        nombre: api.personal.nombre,
        apellido: api.personal.apellido,
        correo: api.personal.correo,
        telefono: api.personal.telefono
      }])
  })
}
