import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const App = () => {
  return (
    <View>
      <Link
        href={{
          pathname: "/poem/123",
        }}
      >
        View user
      </Link>
    </View>
  );
};

export default App;
