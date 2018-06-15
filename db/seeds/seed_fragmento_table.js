const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('fragmento').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('fragmento').insert([{
        id: i + 1,
        valor: casual.word,
        fragmento_id: i + 1,
      }])
    })

    return Promise.all(promises)
  })
}
