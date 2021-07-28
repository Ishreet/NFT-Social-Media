const { ApolloServer } = require('apollo-server')
// allows us to connect to mongoDB
const mongoose = require('mongoose')

// connect to MONGODB from config file
const { MONGODB } = require('./config.js')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

// set up server with typedefs and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// initialize port
mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MONGODB Connected')
    return server.listen({ port: 5000 })
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`)
  })
