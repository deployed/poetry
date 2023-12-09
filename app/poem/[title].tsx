import { PoemInfo } from "@/types/types";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Poem = () => {
  const { title } = useLocalSearchParams();
  console.log("slug ... ", title);
  const [getPoem, setPoem] = useState<PoemInfo[]>([])
  const fetchPoems = () => {
    return fetch('https://poetrydb.org/title/'+{title})
      .then(response => response.json())
      .then(json => {
        setPoem(json)
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {fetchPoems(); console.log(getPoem) }, [] )
  console.log(getPoem)
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Poem;
