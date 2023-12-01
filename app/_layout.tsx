import useTheme from "../src/hooks/useTheme";
import ThemeProvider from "../src/context/theme";
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ED9E26",
          },
          headerTintColor: "#fff",
          title: "Poezja",
        }}
      />
    </ThemeProvider>
  );
}
