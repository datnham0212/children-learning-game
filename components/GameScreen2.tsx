import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useTheme } from './ThemeContext';

export function GameScreen2({ navigation }: { navigation: any }) {

  const { isDarkMode, toggleTheme, themeStyles } = useTheme();
  const [ selection, setSelection ] = useState('ShapeGuessing'); 
  
  return (
    <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
      <Text style={[styles.text, {color: themeStyles.textColor}]}>Picture Guessing</Text>
      <Text style={[styles.text, {color: themeStyles.textColor}]}>(Select one below)</Text>
      <View style={styles.main}>
        <View style={styles.half}>
          <Pressable 
            onPress={() => setSelection('ShapeGuessing') } 
            style={[styles.button, { backgroundColor: selection === 'ShapeGuessing' ? 'orange' : '#09ad50' }]}
          >
            <Text style={styles.text}>Shapes</Text>
          </Pressable>

          <Pressable 
            onPress={() => setSelection('ColorGuessing')} 
            style={[styles.button, { backgroundColor: selection === 'ColorGuessing' ? 'orange' : '#09ad50' }]}
          >
            <Text style={styles.text}>Colors</Text>
          </Pressable>
        </View>

        <View style={styles.half}>
          <Pressable 
            onPress={() => setSelection('AnimalGuessing')} 
            style={[styles.button, { backgroundColor: selection === 'AnimalGuessing' ? 'orange' : '#09ad50' }]}
          >
            <Text style={styles.text}>Animals</Text>
          </Pressable>

          <Pressable 
            onPress={() => setSelection('FruitGuessing')} 
            style={[styles.button, { backgroundColor: selection === 'FruitGuessing' ? 'orange' : '#09ad50' }]}
          >
            <Text style={styles.text}>Fruits</Text>
          </Pressable>
        </View>
      </View>
      <Button title="Start Game" onPress={() => navigation.navigate(selection)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    flexDirection: 'row',
    flex: 0.7
  },

  half: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 25,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
