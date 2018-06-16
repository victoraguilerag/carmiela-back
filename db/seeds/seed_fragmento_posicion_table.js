const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  return knex('fragmento-posicion').del().then(() => {
    // const promises = Array(3).fill().map((_, i) => {
    //   return knex('fragmento-posicion').insert([{
    //     id: i + 1,
    //     tipo: 'texto',
    //     fragmento: casual.sentence,
    //     posicion_id: i + 1,
    //   }])
    // })
    
    let count = 0
    let posiciones = -1
    api.experiencia.profesional.map((empresa, i) => {
      empresa.posiciones.map((posicion, index) => {
        posiciones++
        const promises= posicion.resumen.map((fragmento) => {
          return knex('fragmento-posicion').insert([{
            id: count++,
            tipo: fragmento.tipo,
            fragmento: fragmento.fragmento,
            nombre: fragmento.nombre,
            url: fragmento.url,
            posicion_id: posiciones, 
          }])
        })
        
        return Promise.all(promises)
      })

    })
  })
}
