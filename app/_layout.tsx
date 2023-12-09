import ThemeProvider from "../src/context/theme";
import { Stack } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { Link } from "expo-router";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ED9E26",
          },
          headerTintColor: "#fff",
          header:() => {
            return(
               <View style={{height:100,backgroundColor:"#ED9E26",justifyContent:"center",alignItems:"center"}}>
                <Link 
                href={{
                pathname: "/",
                }} >
                <Image source={require("../assets/Poezja.png")} style={{marginTop:30,width:75,height:45}}/></Link>
              </View>
            )
          }
        }}
      />
    </ThemeProvider>
  );
}
