import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "bla", key: 1 },
    { name: "blb", key: 2 },
    { name: "blc", key: 3 },
    { name: "bld", key: 4 },
    { name: "bld", key: 6 },
    { name: "bld", key: 5 },
    { name: "bld", key: 66 },
    { name: "bld", key: 46 }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {people.map(man => (
            <View key={man.key}>
              <Text style={styles.item}>name:{man.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
    fontSize: 20,
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: "#333"
  }
});
