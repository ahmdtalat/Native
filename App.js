import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  AppRegistry
} from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache } from "apollo-boost";

import Header from "./components/header";
import Items from "./components/items";
import Form from "./components/form";

const client = new ApolloClient({
  uri: "https://peaceful-dusk-09848.herokuapp.com/",
  cache: new InMemoryCache()
});

export default function App() {
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
    <ApolloProvider client={client}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <Form add={todo => add(todo)} />
            <Items updateTodo={key => updateTodo(key)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1
  }
});

AppRegistry.registerComponent("App", () => App);
