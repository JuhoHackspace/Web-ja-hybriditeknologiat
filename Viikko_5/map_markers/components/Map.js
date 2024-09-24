import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Platform, StyleSheet } from 'react-native'
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function Map() {
    const [location, setLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    
    const [markers, setMarkers] = useState([]);

    const addMarker = (e, color, title) => {
        setMarkers([...markers, {latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude, color: color, title: `${title} ${markers.length + 1}`}]);
    }

    const getUserPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    try {
        if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
        }
        const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
        setLocation({"latitude": location.coords.latitude, "longitude": location.coords.longitude, "latitudeDelta": 0.0922, "longitudeDelta": 0.0421});
    } catch (error) {
        console.log(error);
    }
    }

    useEffect(() => {
        (async () => {getUserPosition()})();
    }, []);

    return (
        <MapView
            style={styles.map}
            region={location}
            showsUserLocation={true}
            onLongPress={ e => addMarker(e, 'red', 'My Marker') }
        >
            {markers.length > 0 && markers.map((marker, index) => (
                <Marker
                    title={marker.title}
                    key={index}
                    pinColor= {marker.color}
                    coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                />
            ))}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight * 1.5 : 0
    }
})