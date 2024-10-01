import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';;
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * This component is responsible for fetching the Spotify API token.
 * The client_id and client_secret should be provided here.
 */

export default function getToken() {
    const [token, setToken] = useState(null)

    const getToken = async () => {
      try {
        const response = await axios.post('https://accounts.spotify.com/api/token', {
          grant_type: 'client_credentials',
          client_id: 'replace provided client_id',
          client_secret: 'replace provided client_secret'
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        });

        setToken(response.data.access_token)
        console.log('Token:', response.data.access_token)
      } catch (error) {
          console.error('Error fetching token from Spotify API', error)
        
      }
    }

    useEffect(() => {
        getToken()
    }, [])
   

    return {token}
}
