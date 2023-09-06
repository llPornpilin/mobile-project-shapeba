import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Navigate
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// Page
import TestNavigator from './navigation/Navigator';


export default function App() {
  
  return (
    <TestNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


