import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';

// Navigation Rooting
import Rooter from './src/rootNavigation/NavigationRooter';

export default function App() {
  
  return (
    <Rooter/>
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
