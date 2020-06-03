import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Header from './components/Header';
import Game from './components/Game';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
