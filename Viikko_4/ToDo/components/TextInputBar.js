import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function TextInputBar({ items, setItems }) {
  const [textItem, setTextItem] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        mode="contained"
        backgroundColor="white"
        underlineColor='transparent'

        style={styles.input}
        value={textItem}
        onChangeText={text => setTextItem(text)}
        placeholder="Enter task"
      />
      <Button
        mode="contained"
        buttonColor="white"
        textColor='blue'
        onPress={() => {
            if (textItem.length > 0) {
            const itemExists = items.some(item => item.itemName === textItem);
            if (itemExists) {
              alert('Item already exists');
            } else {
              setItems([...items, { itemName: textItem, isDone: false }]);
              setTextItem('');
            }
            }
        }}
      > Save
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width
    },
    input: {
        width: Dimensions.get('window').width - 100,
        height: 40,
        margin: 10,
        
    },
})