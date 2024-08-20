import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export function GameScreen4({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
