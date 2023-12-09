import { PoemInfo } from '@/types/types';
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
interface SearchBar {setter: React.Dispatch<React.SetStateAction<PoemInfo[]>>}



const SearchBar = ({setter}) => {
  const [text, onChangeText] = React.useState('');

  const getPoemByTitle = () => {
    fetch('https://poetrydb.org/author,title/Andrew%20Marvell;'+text )
    .then(response => response.json())
    .then(json => {
      setter(json)
    })
    .catch(error => {
      console.error(error);
    });
  
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {onChangeText(text); getPoemByTitle()}}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;