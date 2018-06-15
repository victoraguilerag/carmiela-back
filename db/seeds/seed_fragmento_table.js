const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  // return knex('fragmento').del().then(() => {
  //   const promises = Array(10).fill().map((_, i) => {
  //     return knex('fragmento').insert([{
  //       id: i + 1,
  //       valor: casual.word,
  //       fragmento_id: i + 1,
  //     }])
  //   })
  //
  //   return Promise.all(promises)
  // })

  return knex('fragmento').del().then(() => {
    let cuerpos = -1
    let fragmentos = 0
    api.articulos.map((articulo, index) => {
      articulo.cuerpo.map((fragmento, i) => {
        cuerpos++
        const promises = fragmento.fragmento.map((pieza, i) => {
          return knex('fragmento').insert([{
            id: fragmentos++,
            valor: pieza,
            fragmento_id: cuerpos,
          }])
        })

        return Promise.all(promises)
      })
    })


  })
}
