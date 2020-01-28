import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <View style={styles.btn}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button
          title="-"
          onPress={() => {
            setCount(count - 1);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
