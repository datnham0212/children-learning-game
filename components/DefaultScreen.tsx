import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTheme } from '@/components/ThemeContext'; 
export function DefaultScreen({ navigation }: { navigation: any }) {

  const { isDarkMode, toggleTheme, themeStyles } = useTheme();

  return (
    <View style={[styles.container, , { backgroundColor: themeStyles.bgColor }]}>
      <Pressable onPress={() => navigation.navigate("Options")} style={styles.option}>
        <TabBarIcon name={'menu'} color = {isDarkMode ? '#fff' : '#000'} size={45} />  
      </Pressable>
      
    
    <View style={styles.main}>
      <View style={styles.half}>
        <Pressable onPress={() => navigation.navigate("Game1")} style={styles.button}>
          <Text style={styles.text}>Simon Says</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game2")} style={styles.button}>
          <Text style={styles.text}>Picture Guessing</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game3")} style={styles.button}>
          <Text style={styles.text}>Schulte Table</Text>
        </Pressable>
      </View>
      <View style={styles.half}>
        <Pressable onPress={() => navigation.navigate("Game4")} style={styles.button}>
          <Text style={styles.text}>Math</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game5")} style={styles.button}>
          <Text style={styles.text}>Game 5</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game6")} style={styles.button}>
          <Text style={styles.text}>Game 6</Text>
        </Pressable>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    flexDirection: 'row',
    flex: 1
  },

  half: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    backgroundColor: '#09ad50',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // borderWidth: 2,
    margin: 25,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  option: {
    width: 45,
    height: 45,
    margin: 6,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
