import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Index from './src/navigator/Index'

export default function App() {
  return (
    <View style={Styles.container}>
      <StatusBar/>
      <Index />
    </View>

  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})