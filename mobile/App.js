import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDo from './src/Page/ToDo';
import AppStack from './src/route/AppStack';

export default function App() {
  return (
      <>
      <AppStack/>
      <StatusBar style="dark" />
      </>
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
