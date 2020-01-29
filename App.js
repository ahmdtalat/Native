import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import Header from "./components/header";
import Items from "./components/items";
import Form from "./components/form";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "learn react-native", key: "1" },
    { text: "create upwork profile", key: "2" },
    { text: "write a new article on node events", key: "3" }
  ]);
  const add = todo => {
    const newKey =
      todos.length === 0
        ? "1"
        : (parseInt(todos[todos.length - 1].key) + 1).toString();
    const newTodo = {
      text: todo,
      key: newKey
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  const updateTodo = key => {
    const newTodos = todos.filter(todo => todo.key != key);
    setTodos(newTodos);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form add={todo => add(todo)} />
        <Items data={todos} updateTodo={key => updateTodo(key)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
