import AuthorInfo from "@/components/AuthorInfo/AuthorInfo";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import {AuthorInfoProps, PoemInfo} from "@/types/types";
import SearchBar from "@/components/SearchBar/SearchBar";


const App = () => {
  const [getDatabase, setDatabase] = useState<PoemInfo[]>([])
  const [getSorted, setSorted] = useState<boolean>(false)
  const fetchPoems = () => {
    return fetch('https://poetrydb.org/author/Andrew%20Marvell' )
      .then(response => response.json())
      .then(json => {
        setDatabase(json)
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {fetchPoems();}, [] )
  return (
    <View>
      <SearchBar setter={setDatabase} />
      <Pressable style={{padding: 20}}  onPress={() => {setSorted( !getSorted )} }>
  <Text>Sorted: {getSorted.toString()}</Text>
</Pressable>
      <FlatList 
      ItemSeparatorComponent={() =>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    
  }}
/>
      }
data={getDatabase}
renderItem={({item, index}) => (
<Link 
  href={{
  pathname: "/poem",
  params:{
    title: item.title,
    prevTitle: index === 0 ? undefined : getDatabase[index-1].title,
    nextTitle: index === getDatabase.length-1 ? undefined :getDatabase[index+1].title
  }
  }} >
<AuthorInfo title={item.title} author={item.author} linecount={item.linecount}  lines={item.lines} />
</Link>
)
}
/>
    </View>
  );
};

export default App;

