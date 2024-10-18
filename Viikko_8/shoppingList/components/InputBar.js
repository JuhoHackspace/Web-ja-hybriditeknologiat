import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function InputBar({text, setText, addItem}) {
    return (
        <View style={styles.inputBar}>
            <TextInput 
                style={styles.input} 
                value={text} 
                onChangeText={text => setText(text)} 
                placeholder='Add new...'
            />
            <TouchableOpacity 
                style={styles.button} 
                onPress={addItem}
            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      marginTop: 20,
      height: 50,
    },
    input: {
      padding: 5,
      fontSize: 18,
    },
    button: {
      backgroundColor: 'white',
      padding: 10,
    },
    buttonText: {
      color: 'blue',
      fontSize: 18,
    },
  });