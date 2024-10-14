import { Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function ItemsList({removeTodo, todos}) {
  return (
    <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item, index }) => (
        <Pressable style={styles.press} onPress={() => removeTodo(index)}>
            <Text>{item}</Text>
        </Pressable>
    )}/>
  )
}

const styles = StyleSheet.create({
    list: {
        width: '90%',
        marginTop: 20,
      },
      press: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      }
});