const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  return knex('fragmento-educacion').del().then(() => {
    // const promises = Array(3).fill().map((_, i) => {
    //   return knex('fragmento-educacion').insert([{
    //     id: i + 1,
    //     entidad: casual.name,
    //     titulo: casual.sentence,
    //     periodo: casual.date(format = 'YYYY-MM-DD'),
    //     experiencia_id: 1,
    //   }])
    // })

    const promises = api.experiencia.educacion.map((fragmento, i) => {
      return knex('fragmento-educacion').insert([{
        id: i,
        entidad: fragmento.entidad,
        titulo: fragmento.titulo,
        periodo: fragmento.periodo,
        experiencia_id: 1
      }])
    })

    return Promise.all(promises)
  })
}
