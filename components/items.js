import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";

export default function Items({ updateTodo }) {
  const { data, loading } = useQuery(FETCH_TODOS);

  const todos = data ? data.getTodos : [];
  const hanglePress = key => {
    updateTodo(key);
  };
  return (
    <View style={styles.list}>
      {loading && <Text style={styles.loading}>Loading ...</Text>}
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => hanglePress(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
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
