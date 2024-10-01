import React from 'react'
import { View, Text } from 'react-native'
import { Image, StyleSheet } from 'react-native'
import icon from '../assets/icon.png'

export default function ItemDisplay({ image_url, name, genres }) {
    return (
        <View style={styles.container}>
            <Image
                source={image_url ? { uri: image_url } : icon}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.genres}>{genres.join(', ')}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    genres: {
        fontSize: 14,
        color: '#666',
    },
})

