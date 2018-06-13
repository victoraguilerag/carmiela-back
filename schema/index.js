var { makeExecutableSchema } = require('graphql-tools');
var Articulo = require('./Articulo')
var Experiencia = require('./Experiencia')
var resolvers = require('../resolvers')

var rootTypes = `
  type Query { 
  	articulos: [Articulo],
  	experiencia: Experiencia
  	skill: Skill
  }
`

var schema = makeExecutableSchema({
	typeDefs: [rootTypes, Articulo, Experiencia],
	resolvers,
})



module.exports = schema