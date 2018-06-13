const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento-skill-principales').del().then(() => {
    const promises = Array(3).fill().map((_, i) => {
      return knex('fragmento-skill-principales').insert([{
        id: i + 1,
        skill: casual.word,
        descripcion: casual.sentence,
        skills_id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}
