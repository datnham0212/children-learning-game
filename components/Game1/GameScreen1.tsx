import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useTheme } from '../ThemeContext';

export function GameScreen1({ navigation }: { navigation: any }) {

  const { isDarkMode, toggleTheme, themeStyles } = useTheme();
  const [ selection, setSelection ] = useState('ShapeGuessing'); 
  
  return (
    <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
      <View style={styles.main}>
      
        <View style={styles.half}>
          <Pressable 
            onPress={() => setSelection('ByNameGuessing')} 
            style={[
              styles.button, 
              {backgroundColor: '#2098b2'},
              selection === 'ByNameGuessing' && styles.selectedButton
            ]}
          >
            <Text style={[styles.text, {color: themeStyles.textColor}]}>ANSWER BY NAME</Text>
          </Pressable>
        </View>
        
        <View style={styles.half}>
          <Pressable 
            onPress={() => setSelection('ByFlagGuessing')} 
            style={[
              styles.button, 
              {backgroundColor: '#2098b2'},
              selection === 'ByFlagGuessing' && styles.selectedButton
            ]}
          >
            <Text style={[styles.text, {color: themeStyles.textColor}]}>ANSWER BY FLAG</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.start}>
        <Button color={isDarkMode ? "#09ad50" : "black"} title="Start Game" onPress={() => navigation.navigate(selection)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    flexDirection: 'row',
    width: '100%',
    flex: 0.7,
  },

  half: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  start: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 180,
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 25,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  selectedButton: {
    backgroundColor: 'orange',
  },
});
