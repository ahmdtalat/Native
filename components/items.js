import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";

export default function Items() {
  const { data, loading } = useQuery(FETCH_TODOS);
  const todos = data ? data.getTodos : [];

  const [deleteTodo, { _ }] = useMutation(DELETE_TODO);

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
  );
}

const styles = StyleSheet.create({
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

const FETCH_TODOS = gql`
  {
    getTodos {
      id
      text
      created
    }
  }
`;
const DELETE_TODO = gql`
  mutation deleteTodo($todoId: ID!) {
    deleteTodo(todoId: $todoId)
  }
`;
