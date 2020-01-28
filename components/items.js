import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default function Items({ data }) {
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 50,
    marginTop: 40
  },
  item: {
    borderWidth: 1,
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 14
  }
});
