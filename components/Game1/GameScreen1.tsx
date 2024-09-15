import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useTheme } from '../ThemeContext';

export function GameScreen1({ navigation }: { navigation: any }) {

  const { isDarkMode, toggleTheme, themeStyles } = useTheme();
  const [ selection, setSelection ] = useState('ShapeGuessing'); 
  
  return (
    <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
      {/* <Text style={[styles.text, {color: themeStyles.textColor}]}>Picture Guessing</Text>
      <Text style={[styles.text, {color: themeStyles.textColor}]}>(Select one below)</Text> */}
      <View style={styles.main}>
      
      <View style={styles.half}>
      
        </View>
        
        <View style={styles.half}>
          
        </View>
      </View>
      <Button color={isDarkMode ? "#09ad50" : "black"} title="Start Game" onPress={() => navigation.navigate(selection)} />
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
    flexDirection: 'column',
    width: '100%',
    flex: 0.7,
    top: -50,
  },

  half: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },

  // button: {
  //   width: 150,
  //   height: 150,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 20,
  //   margin: 25,
  // },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
