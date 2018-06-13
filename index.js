var express = require('express')
var bodyParser = require('body-parser')
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
var schema = require('./schema')

var app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(3000, () => { 
	console.log('Go to http://localhost:3000/graphiql to run queries!')
})