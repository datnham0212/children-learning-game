import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';

export default function TabTwoScreen() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.section}>
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
      <Text style={styles.paragraph}>Normal checkbox</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
