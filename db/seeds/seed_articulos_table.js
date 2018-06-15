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
  return knex('articulos').del().then(() => {
    const promises = api.articulos.map((articulo, index) => {
      return knex('articulos').insert([{
        id: index,
        titulo: articulo.titulo,
        portada: articulo.portada,
        fecha: articulo.fecha,
        previa: articulo.previa,
      }])
    })

    return Promise.all(promises)
  })
}
