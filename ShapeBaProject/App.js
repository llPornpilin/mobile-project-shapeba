import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

// Navigate
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import TestNavigator from './src/navigation/Navigator';
import StartNavigator from './src/navigation/StartNavigation';
import AppNavigator from './src/navigation/AppNavigation';
import { useState } from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import InformationScreen from "./src/screens/Profile/InformationScreen";

// Page


export default function App() {
  // return (
  //   <TestNavigator />
  // )
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }} >
        <BottomSheetModalProvider>

          <AppNavigator />

        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  )
  // return (
  //   <InformationScreen/>
  // )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


