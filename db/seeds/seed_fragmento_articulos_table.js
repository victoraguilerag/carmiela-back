const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  // return knex('fragmento-articulo').del().then(() => {
  //   const promises = Array(10).fill().map((_, i) => {
  //     return knex('fragmento-articulo').insert([{
  //       id: i + 1,
  //       tipo: 'texto',
  //       cuerpo_id: i + 1
  //     }])
  //   })
  //
  //   return Promise.all(promises)
  // })

  return knex('fragmento-articulo').del().then(() => {
    let count = 0
    api.articulos.map((articulo, index) => {
      const promises = articulo.cuerpo.map((fragmento, i) => {
        return knex('fragmento-articulo').insert([{
          id: count++,
          tipo: fragmento.tipo,
          cuerpo_id: index,
        }])
      })

      return Promise.all(promises)
    })
  })
}
