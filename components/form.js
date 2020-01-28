import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Form({ add }) {
  const [todo, setTodo] = useState("");
  const handlePress = () => {
    console.log(todo);
    add(todo);
    setTodo("");
  };

  return (
    <View style={s.container}>
      <TextInput
        style={s.form}
        placeholder="enter a todo"
        value={todo}
        onChangeText={val => setTodo(val)}
      />
      <Button style={s.btn} title="Add" onPress={handlePress} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  form: {
    flex: 4,
    width: "80%",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  },
  btn: {
    marginVertical: "auto"
  }
});
