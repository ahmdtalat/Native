import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";

export default function Form({ add }) {
  const [todo, setTodo] = useState("");

  const handlePress = () => {
    add(todo);
    setTodo("");
  };

  return (
    <View style={s.form}>
      <TextInput
        style={s.input}
        placeholder="enter a todo"
        value={todo}
        onChangeText={val => setTodo(val)}
      />
      <TouchableOpacity style={s.btn} onPress={handlePress}>
        <Text style={s.btnText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  form: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    justifyContent: "space-between"
  },
  input: {
    width: "70%",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: "#fff"
  },
  btn: {
    width: "30%",
    backgroundColor: "#88f",
    borderRadius: 4
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: "15%",
    letterSpacing: 1
  }
});
