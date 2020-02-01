import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

export default function Header({ toggleMode }) {
  const [dark, setDark] = useState(false);

  const handleChange = mode => {
    toggleMode(mode);
    setDark(mode);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Blacky Todos</Text>
      <View style={styles.switch}>
        <Text style={!dark ? styles.mode : styles.darkMode}>Dark mode</Text>
        <Switch value={dark} onValueChange={() => handleChange(!dark)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 80,
    backgroundColor: "#333",
    paddingTop: 40
  },
  header: {
    color: "#eee",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  },
  switch: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-around",
    alignItems: "center",
    height: 25
  },
  mode: {
    color: "#777",
    fontSize: 16
  },
  // dark mode style
  darkMode: {
    color: "#eee",
    fontSize: 16
  }
});
