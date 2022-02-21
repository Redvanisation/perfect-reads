import { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ searchTerm, setSearchTerm }: any) {
  
  const handleChange = (text: string) => {
      setSearchTerm(text)
  }
  
  return (
    <TextInput
      style={styles.input}
      onChangeText={(text) => handleChange(text)}
      placeholder='Search available books...'
      placeholderTextColor='#999'
      value={searchTerm}
    />
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    textAlign: 'center',
  }
});