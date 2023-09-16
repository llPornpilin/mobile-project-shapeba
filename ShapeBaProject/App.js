import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Navigate
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import TestNavigator from './src/navigation/Navigator';
import StartNavigator from './src/navigation/StartNavigation';
import AppNavigator from './src/navigation/AppNavigation';
import { useState } from 'react';

// Page


export default function App() {
  // return (
  //   <TestNavigator />
  // )
  return (
    <AppNavigator />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


