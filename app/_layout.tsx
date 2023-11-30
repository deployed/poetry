import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ED9E26",
        },
        headerTintColor: "#fff",
        title: "Poezja",
      }}
    />
  );
}
