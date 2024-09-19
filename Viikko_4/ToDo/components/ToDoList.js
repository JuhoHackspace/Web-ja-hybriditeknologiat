import React from 'react'
import { ScrollView } from 'react-native'
import ListItem from './ListItem'

export default function ToDoList({ items, setItems }) {
  
  const toggleDone = (name) => {
    const updatedItems = items.map(item => 
      item.itemName === name ? { ...item, isDone: !item.isDone } : item
    );
    setItems(updatedItems);
  }

  return (
    <ScrollView>
        {items.length > 0 && items.map((item) => (
            <ListItem key={item.itemName} itemObject={item} toggleDone={toggleDone} />
        ))}
    </ScrollView>
  )
}
