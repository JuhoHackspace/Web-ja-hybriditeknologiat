import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useReducer, useState } from 'react';
import InputBar from './components/InputBar';
import ItemsList from './components/ItemsList';

const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((todo, index) => index !== action.index);
    default:
      throw new Error("Invalid action type");
  }
}

export default function App() {
  const [text, setText] = useState('');
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'add', payload: text });
      setText('');
    }
  }

  const removeTodo = (index) => {
    dispatch({ type: 'remove', index });
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Todo List</Text>
        <InputBar text={text} setText={setText} addTodo={addTodo}/>
        <ItemsList removeTodo={removeTodo} todos={todos}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
