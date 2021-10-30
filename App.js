import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Loading from './src/navigator/Loading';

export default function App() {
  return (
    <View style={Styles.container}>
      <StatusBar/>
      <Loading />
    </View>

  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})