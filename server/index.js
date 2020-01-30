const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");

const { MONGODB } = require("./config");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB connected ...");
    return server.listen({
      port: 3000
    });
  })
  .then(res => {
    console.log("Server running at ", res.url);
  });
