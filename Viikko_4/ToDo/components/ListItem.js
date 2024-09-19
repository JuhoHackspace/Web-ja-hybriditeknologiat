import React, { useState } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

export default function ListItem( { key, itemObject, toggleDone } ) {
    return (
        <Pressable key={key} style={styles.itemInList} onPress={() => toggleDone(itemObject.itemName)}>
            <Text style={itemObject.isDone ? styles.done : styles.notDone }>{itemObject.itemName}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    itemInList: {
        marginLeft: 24,
        marginTop: 12,
    },
    done : {
        textDecorationLine: 'line-through',
        fontSize: 20
    },
    notDone : {
        textDecorationLine: 'none',
        fontSize: 20
    }

})
