const casual = require('casual')
const api = require('../api')

exports.seed = (knex, Promise) => {
  // return knex('fragmento-skill-secundarios').del().then(() => {
  //   const promises = Array(3).fill().map((_, i) => {
  //     return knex('fragmento-skill-secundarios').insert([{
  //       id: i + 1,
  //       skill: casual.word,
  //       descripcion: casual.sentence,
  //       skills_id: i + 1,
  //     }])
  //   })

  //   return Promise.all(promises)
  // })

  let count = 0
  return knex('fragmento-skill-secundarios').del().then(() => {
    const promises = api.experiencia.skills.secundarios.map((skill) => {
      return knex('fragmento-skill-secundarios').insert([{
        id: count++,
        skill: skill.skill,
        descripcion: skill.descripcion,
        skills_id: 1,
      }])
    })

    return Promise.all(promises)
  })
}
