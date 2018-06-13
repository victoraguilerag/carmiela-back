const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento-skill-secundarios').del().then(() => {
    const promises = Array(3).fill().map((_, i) => {
      return knex('fragmento-skill-secundarios').insert([{
        id: i + 1,
        skill: casual.word,
        descripcion: casual.sentence,
        skills_id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}