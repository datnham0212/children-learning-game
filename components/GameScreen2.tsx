import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export function GameScreen2({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Picture Guessing</Text>
      <Button title="Start Game" onPress={() => navigation.navigate("PictureGuessing")} />
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
