import Poem from "@/components/Poem/Poem";
import { useLocalSearchParams } from "expo-router";
import React, {useState, useEffect} from "react";
import { View } from "react-native";

const PoemView = () => {
  const { title,prevTitle,nextTitle } = useLocalSearchParams();
  const [getDatabase, setDatabase] = useState(undefined)
  const fetchPoems = () => {
    return fetch('https://poetrydb.org/title/'+title)
      .then(response => response.json())
      .then(json => {
        setDatabase(json)
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {fetchPoems();}, [] )
  if(!getDatabase)
  {
    return null
  }
  return (
    <View style={{backgroundColor:"#eeefea", flex:1}}>
      <Poem author={getDatabase[0].author} title={getDatabase[0].title} content={getDatabase[0].lines} prevTitle={prevTitle}
      nextTitle={nextTitle}/>
    </View>
  );
};

export default PoemView;
