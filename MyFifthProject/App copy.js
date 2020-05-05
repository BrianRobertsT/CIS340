import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.yellow}>Yellow text!</Text>
      <Text style = {styles.largeGreen}>This is Large Green</Text>
      <Text style = {[styles.yellow, styles.largeGreen]}>Yellow, then big green</Text>
      <Text style = {[styles.largeGreen, styles.yellow]}>Big green, then yellow</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 60,
  },
  largeGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  yellow: {
    color: 'yellow',
    fontSize: 20,
  } 
}
);
