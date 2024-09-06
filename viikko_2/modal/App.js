import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>This is modal...</Text>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.textStyle, styles.closeStyle]}>Close</Text>
            </Pressable>
          </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 120,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 150,
  },
  textStyle: {
    fontSize: 17,
  },
  closeStyle: {
    fontWeight: 'bold',
  },
});
