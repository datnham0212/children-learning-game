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

        <Pressable onPress={() => navigation.navigate("Game1")} style={[styles.button, {backgroundColor: '#20B2AA'}]}>
          <Text style={[styles.text, {color: themeStyles.textColor}]}>MULTIPLE CHOICES</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game2")} style={[styles.button, {backgroundColor: '#F08080'}]}>
          <Text style={[styles.text, {color: themeStyles.textColor}]}>TRUE / FALSE</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game3")} style={[styles.button, {backgroundColor: '#FFFF66'},]}>
          <Text style={[styles.text, {color: themeStyles.textColor}]}>TRIVIA</Text>
        </Pressable>
        
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#fff',
    width: 340,
    height: 140,
    justifyContent: 'center',
    borderRadius: 20,
    margin: 30,
  },

  text: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
    marginLeft: 20,
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
