const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('experiencia').del().then(() => {
  	const promises = () => {
  	  return knex('experiencia').insert([{
	    id: 1,
	  }])
  	}
  })

  return Promise.all(promises)
}
