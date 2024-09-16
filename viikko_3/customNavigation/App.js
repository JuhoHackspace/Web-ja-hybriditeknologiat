import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApplicationBar from "./components/ApplicationBar";
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <ApplicationBar {...props} />,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

