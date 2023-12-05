import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Poem = () => {
  const { id } = useLocalSearchParams();
  console.log("slug ... ", id);
  return (
    <View>
      <Text>Poem</Text>
    </View>
  );
};

export default Poem;
