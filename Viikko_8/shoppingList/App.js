import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useEffect ,useState } from 'react';
import InputBar from './components/InputBar';
import ItemsList from './components/ItemsList';
import { db, collection, shoppingList, addDoc, query, onSnapshot, deleteDoc, doc } from './firebase/Config';

export default function App() {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    const q = query(collection(db, shoppingList))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempItems = []
      querySnapshot.forEach((doc) => {
        tempItems.push({...doc.data(), id: doc.id })
      })
      setItems(tempItems)
      items.map(item => {console.log("Item id: ", item.id, "Item: ", item.item)})
    })
    return () => {unsubscribe()}
  }, [])
  

  const addItem = async () => {
    const docRef = await addDoc(collection(db, shoppingList), {
      item: text
    })
    setText('')
  }

  const removeItem = async (id) => {
    try {
      const docRef = doc(db, shoppingList, id)
      await deleteDoc(docRef)
    }catch(e){
      console.error("Error removing document: ", e)
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Shopping List</Text>
        <InputBar text={text} setText={setText} addItem={addItem}/>
        <ItemsList removeItem={removeItem} items={items}/>
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
    color: 'blue'
  }
});
