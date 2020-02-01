import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";

import Form from "./form";
import { ADD_TODO, DELETE_TODO, FETCH_TODOS } from "./util";

export default function Items() {
  const { data, loading } = useQuery(FETCH_TODOS);
  const todos = data ? data.getTodos : [];

  const [createTodo] = useMutation(ADD_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const add = todo => {
    if (todo.trim() !== "" && todo.length > 8) {
      createTodo({
        variables: { text: todo },
        update(proxy, result) {
          const data = proxy.readQuery({
            query: FETCH_TODOS
          });
          data.getTodos = [result.data.createTodo, ...data.getTodos];
          proxy.writeQuery({
            query: FETCH_TODOS,
            data
          });
        }
      });
    } else {
      Alert.alert("Ops", "Todo must not be empty or less than 8 letters", [
        {
          text: "Wagata"
        }
      ]);
    }
  };
  const hanglePress = key => {
    deleteTodo({
      variables: { todoId: key },
      update(proxy) {
        const data = proxy.readQuery({
          query: FETCH_TODOS
        });
        data.getTodos = data.getTodos.filter(todo => todo.id !== key);
        proxy.writeQuery({ query: FETCH_TODOS, data });
      }
    });
  };
  return (
    <View style={styles.container}>
      <Form add={todo => add(todo)} />
      <View style={styles.list}>
        {loading && (
          <View style={styles.loading}>
            <Text> Loading ...</Text>
          </View>
        )}
        {todos && (
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => hanglePress(item.id)}>
                <Text style={styles.item}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    paddingHorizontal: 20
  },
  item: {
    borderWidth: 1,
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 14
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
