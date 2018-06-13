const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento-educacion').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('fragmento-educacion').insert([{
        id: i + 1,
        entidad: casual.name,
        titulo: casual.sentence,
        periodo: casual.date(format = 'YYYY-MM-DD'),
        experiencia_id: 1,
      }])
    })

    return Promise.all(promises)
  })
}
