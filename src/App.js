import React, { useState } from "react";
import { TouchableOpacity, TouchableHighlight, Text, View } from "react-native";

function App() {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);
  const onReset = () => setCount(0);

  return (
    <View
      style={{
        flex: 1,
        margin: 40,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: "30px" }}>Count: {count}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          onPress={onIncrement}
          style={{
            color: "white",
            backgroundColor: "green",
            margin: 20,
            padding: 20
          }}
        >
          <Text style={{ color: "white", fontSize: "22px" }}>Increment</Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={onDecrement}
          style={{
            backgroundColor: "red",
            margin: 20,
            padding: 20
          }}
        >
          <Text style={{ color: "white", fontSize: "22px" }}>Decrement</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onReset}
          style={{
            backgroundColor: "dodgerblue",
            margin: 20,
            padding: 20
          }}
        >
          <Text style={{ color: "white", fontSize: "19px" }}>Reset</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default App;
