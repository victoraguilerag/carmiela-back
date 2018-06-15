const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('experiencia').del().then(() => {
    const promises = Array(1).fill().map((_, i) => {
      return knex('experiencia').insert([{
        id: 1,
      }])
    })

    return Promise.all(promises)
  })
}

