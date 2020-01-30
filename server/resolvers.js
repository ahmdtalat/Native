const Todo = require("./Models/Todo");

module.exports = {
  Query: {
    async getTodos() {
      try {
        const todos = await Todo.find({}).sort({ created: -1 });
        return todos;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createTodo(parent, { text }) {
      try {
        const newTodo = new Todo({
          text,
          created: new Date().toISOString()
        });
        const todo = await newTodo.save();
        return todo;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteTodo(parent, { todoId }) {
      try {
        const todo = await Todo.findById(todoId);
        if (todo) {
          await todo.delete();
        }
        return "Todo deleted!";
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
