var api = require('./api')

var resolvers = {
	Query: {
		articulos: () => api.articulos,
		experiencia: () => api.experiencia,
	}
}

module.exports = resolvers