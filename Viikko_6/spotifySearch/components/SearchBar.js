import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function SearchBar({phrase, searchItems}) {
  return (
      <TextInput
        style={styles.input}
        value={phrase}
        placeholder="Search for artist"
        onChangeText={text => searchItems(text)}
      ></TextInput>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 10,
  },
})