import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTheme } from './ThemeContext';

export function GameScreen3({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Schulte Table</Text>
      <Button title="Start Game" onPress={() => {
        navigation.navigate('SchulteTable');
      }} />
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
