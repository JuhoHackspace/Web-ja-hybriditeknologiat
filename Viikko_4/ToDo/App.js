import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import TextInputBar from './components/TextInputBar';
import ToDoList from './components/ToDoList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('items');
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error('Failed to load items from storage', error);
      }
    };

    loadItems();
  }, []);

  useEffect(() => {
    const saveItems = async () => {
      try {
        await AsyncStorage.setItem('items', JSON.stringify(items));
      } catch (error) {
        console.error('Failed to save items to storage', error);
      }
    };

    saveItems();
  }, [items]);

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Todo List</Text>
        <TextInputBar items={items} setItems={setItems}/>
        <ToDoList items={items} setItems={setItems}/>    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  }
});