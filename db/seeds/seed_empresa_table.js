const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  return knex('empresa').del().then(() => {
    // const promises = Array(3).fill().map((_, i) => {
    //   return knex('empresa').insert([{
    //     id: i + 1,
    //     nombre: casual.name,
    //     periodo: casual.date(format = 'YYYY-MM-DD'),
    //     descripcion: casual.description,
    //     experiencia_id: 1,
    //   }])
    // })

    const promises = api.experiencia.profesional.map((fragmento, i) => {
      return knex('empresa').insert([{
        id: i,
        nombre: fragmento.nombre,
        periodo: fragmento.periodo,
        descripcion: fragmento.descripcion,
        experiencia_id: 1,
      }])
    })

    return Promise.all(promises)
  })
}
