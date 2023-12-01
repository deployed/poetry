import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const App = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.push("poem");
        }}
      >
        <Text>Index</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
