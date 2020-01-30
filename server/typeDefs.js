const { gql } = require("apollo-server");

module.exports = gql`
  type Todo {
    id: ID!
    text: String!
    created: String!
  }

  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    createTodo(text: String!): Todo!
    deleteTodo(todoId: ID!): String!
  }
`;
