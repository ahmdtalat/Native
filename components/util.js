import gql from "graphql-tag";

export const FETCH_TODOS = gql`
  {
    getTodos {
      id
      text
      created
    }
  }
`;
export const DELETE_TODO = gql`
  mutation deleteTodo($todoId: ID!) {
    deleteTodo(todoId: $todoId)
  }
`;

export const ADD_TODO = gql`
  mutation createTodo($text: String!) {
    createTodo(text: $text) {
      id
      text
      created
    }
  }
`;
