import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "black", id: "1" },
    { name: "black1", id: "122" },
    { name: "black2", id: "12" },
    { name: "black3", id: "3" },
    { name: "black4", id: "4" },
    { name: "black5", id: "5" },
    { name: "black6", id: "6" },
    { name: "black7", id: "7" },
    { name: "black8", id: "8" },
    { name: "black9", id: "9" }
  ]);
  const handlePress = id => {
    console.log(id);
    const newPeople = people.filter(item => item.id !== id);
    setPeople(newPeople);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item: { name, id } }) => (
          <TouchableOpacity onPress={() => handlePress(id)}>
            <Text style={styles.item}>name: {name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20
  },
  item: {
    borderWidth: 1,
    backgroundColor: "#333",
    fontSize: 20,
    padding: 18,
    marginVertical: 20
  }
});
