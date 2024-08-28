import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTheme } from './ThemeContext';

export function GameScreen3({ navigation }: { navigation: any }) {
  
  const { isDarkMode, toggleTheme, themeStyles } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
      <Text style={[styles.text, {color: themeStyles.textColor}]}>Schulte Table</Text>
      <Button color="black" title="Start Game" onPress={() => {
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
