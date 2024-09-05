import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTheme } from '../../components/ThemeContext';

export function GameScreen1({ navigation }: { navigation: any }) {

  const { isDarkMode, toggleTheme, themeStyles } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
      <Text style={[styles.text, {color: themeStyles.textColor}]}>Simon Says</Text>
      <Button color={isDarkMode ? "#09ad50" : "black"} title="Start Game" onPress={() => {
        navigation.navigate('SimonSays');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
