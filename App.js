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
  return (
    <ApolloProvider client={client}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <Form add={todo => add(todo)} />
            <Items />
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
