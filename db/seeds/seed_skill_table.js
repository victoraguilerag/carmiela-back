const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('skill').del().then(() => {
    const promises = Array(3).fill().map((_, i) => {
      return knex('skill').insert([{
        id: i + 1,
        experiencia_id: 1,
      }])
    })

    return Promise.all(promises)
  })
}
