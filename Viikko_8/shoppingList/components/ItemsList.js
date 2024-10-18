import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function ItemsList({removeItem, items}) {
  console.log("Items: ", items)
  return (
    <ScrollView style={styles.list}>
        {
          items.length > 0 ? items.map(item => (
            <View key={item.id} style={styles.press}>
                <Text>{item.item}</Text>
                <Ionicons name="trash" size={24} color="black" onPress={() => removeItem(item.id)}/>
            </View>
          )) : <Text style={styles.noItems}>No items</Text>
        }
    </ScrollView>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      noItems: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
      }
});