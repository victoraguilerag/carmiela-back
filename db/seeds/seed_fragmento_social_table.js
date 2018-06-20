const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  return knex('fragmento-social').del().then(() => {
  //   const promises = Array(3).fill().map((_, i) => {
  //     return knex('fragmento-social').insert([{
  //       id: i + 1,
  //       nombre: casual.name,
  //       url: "http://www.instagram.com",
  //       empresa_id: i + 1,
  //     }])
  //   })

  //   return Promise.all(promises)
  // })

    var count = 0
    const promises = api.experiencia.profesional.map((empresa, i) => {
      console.log(empresa.social.nombre, empresa.nombre);
      console.log(count, i);
      return knex('fragmento-social').insert([{
        id: count++,
        nombre: empresa.social.nombre,
        url: empresa.social.url,
        empresa_id: i
      }])
    })

    return Promise.all(promises)
  })
}
