import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Alert
} from "react-native";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function Form({ add }) {
  const [todo, setTodo] = useState("");
  const [createTodo, { _ }] = useMutation(ADD_TODO);

  const handlePress = () => {
    if (todo.trim() !== "" && todo.length > 8) {
      createTodo({
        variables: { text: todo },
        update(proxy, result) {
          const data = proxy.readQuery({
            query: FETCH_TODOS
          });

          data.getTodos = [result.data.createTodo, ...data.getTodos];
          proxy.writeQuery({ query: FETCH_TODOS, data });
        }
      });
      setTodo("");
    } else {
      Alert.alert("Ops", "Todo must not be empty", [
        {
          text: "Wagdta"
        }
      ]);
    }
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
    borderRadius: 4
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
const ADD_TODO = gql`
  mutation createTodo($text: String!) {
    createTodo(text: $text) {
      id
      text
      created
    }
  }
`;

const FETCH_TODOS = gql`
  {
    getTodos {
      id
      text
      created
    }
  }
`;
