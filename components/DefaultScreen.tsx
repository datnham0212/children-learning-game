import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTheme } from '@/components/ThemeContext'; 
import { SafeAreaView } from 'react-native-safe-area-context';
export function DefaultScreen({ navigation }: { navigation: any }) {

  const { isDarkMode, themeStyles } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
      <Pressable onPress={() => navigation.navigate("Options")} style={styles.option}>
        <TabBarIcon name={'menu'} color = {isDarkMode ? '#fff' : '#000'} size={45} />  
      </Pressable>
      
    
    <View style={styles.main}>
      <View style={styles.half}>
        <Pressable onPress={() => navigation.navigate("Game1")} style={[styles.button, {backgroundColor: themeStyles.gameTabColor}]}>
          <Text style={[styles.text, {color: themeStyles.textColor}]}>Trivia</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game2")} style={[styles.button, {backgroundColor: themeStyles.gameTabColor}]}>
          <Text style={[styles.text, {color: themeStyles.textColor}]}>Multiple choices</Text>
        </Pressable>

      </View>
      <View style={styles.half}>
        <Pressable onPress={() => navigation.navigate("Game4")} style={[styles.button, {backgroundColor: themeStyles.gameTabColor}]}>
          <Text style={[styles.text, {color: themeStyles.textColor}]}>True/False</Text>
        </Pressable>

      </View>
    </View>
    </SafeAreaView>
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
    backgroundColor: '#fff',
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
    color: '#000',
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
