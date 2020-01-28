import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import Header from "./components/header";
import Items from "./components/items";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "learn react-native", key: "1" },
    { text: "create upwork profile", key: "2" },
    { text: "write a new article on node events", key: "3" }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* form */}
        <Items data={todos} />
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
