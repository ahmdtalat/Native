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
import { API } from "./config";

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache()
});

export default function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = mode => {
    setMode(mode);
  };

  return (
    <ApolloProvider client={client}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={!mode ? styles.container : styles.darkContainer}>
          <Header toggleMode={toggleMode} />
          <View style={styles.content}>
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
  },

  // dark mode styles
  darkContainer: {
    flex: 1,
    backgroundColor: "#222"
  }
});

AppRegistry.registerComponent("App", () => App);
