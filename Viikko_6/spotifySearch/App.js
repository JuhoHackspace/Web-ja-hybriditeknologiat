import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';;
import { useState, useRef, useEffect } from 'react';
import UseAbortableAxios from './hooks/UseAbortableAxios';
import ScrollViewList from './components/ScrollViewList';
import SearchBar from './components/SearchBar';

const URL = 'https://api.spotify.com/v1/search'

export default function App() {
  const [ phrase, setPhrase ] = useState('');
  const urlRef = useRef();
  const {data, loading, error} = UseAbortableAxios(urlRef.current);  
  
  const searchItems = (text) => {
    setPhrase(text);
    const address = `${URL}?q=artist:${text}&type=artist`;
    urlRef.current = address;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search artists</Text>
      <SearchBar phrase={phrase} searchItems={searchItems} />
      <ScrollViewList data={data} loading={loading} err={error} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
