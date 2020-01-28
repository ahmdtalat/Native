import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 20,
    backgroundColor: "#333"
  },
  header: {
    color: "#eee",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  }
});
