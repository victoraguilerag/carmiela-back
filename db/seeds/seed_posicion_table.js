const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  return knex('posicion').del().then(() => {
    // const promises = Array(3).fill().map((_, i) => {
    //   return knex('posicion').insert([{
    //     id: i + 1,
    //     cargo: casual.sentence,
    //     empresa_id: i + 1,
    //   }])
    // })

    var count = 0
    api.experiencia.profesional.map((empresa, i) => {
      const promises = empresa.posiciones.map((posicion, index) => {
        console.log(count, i)
        return knex('posicion').insert([{
          id: count++,
          cargo: posicion.cargo,
          empresa_id: i
        }])
      })

      return Promise.all(promises)
    })
  })
}
