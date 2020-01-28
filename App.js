import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Ahmed");
  const [age, setAge] = useState(24);

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={val => setName(val)}
      />
      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={val => setAge(val)}
      />
      <Text>
        Your name {name}, age:{age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 200,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    margin: 10
  }
});
