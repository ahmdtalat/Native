import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";

export default function Items({ data, updateTodo }) {
  const hanglePress = key => {
    updateTodo(key);
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
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
    paddingHorizontal: 20
  },
  item: {
    borderWidth: 1,
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 14
  }
});
