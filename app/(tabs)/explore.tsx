import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { Switch, Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@/components/ThemeContext'; 

export default function OptionsScreen() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const toggleSound = () => setIsSoundEnabled(previousState => !previousState);

  const { isDarkMode, toggleTheme, themeStyles } = useTheme();

  const [isLanguageSwitched, setIsLanguageSwitched] = useState(false);
  const toggleLanguage = () => setIsLanguageSwitched(previousState => !previousState);

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Volume</Text>
        <Slider
          style={{ width: 230, height: 50 }}
          minimumValue={0}
          maximumValue={100}
          value={50}
          thumbTintColor='#0fdb68'
          minimumTrackTintColor="#09ad50"
          maximumTrackTintColor= { isDarkMode ? "#ffffff" : "#000000" }
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Sound</Text>
        <Switch
          style={styles.soundSwitch}
          trackColor={{ false: '#767577', true: '#09ad50' }}
          thumbColor={isSoundEnabled ? '#0fdb68' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSound}
          value={isSoundEnabled}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Dark Mode</Text>
        <Switch
          style={styles.darkModeSwitch}
          trackColor={{ false: '#767577', true: '#09ad50' }}
          thumbColor={isDarkMode ? '#0fdb68' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Language</Text>
        <Switch
          style={styles.languageSwitch}
          trackColor={{ false: '#767577', true: '#09ad50' }}
          thumbColor={isLanguageSwitched ? '#0fdb68' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleLanguage}
          value={isLanguageSwitched}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 50,
    display: 'flex',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  paragraph: {
    fontSize: 25,
    marginRight: 30,
  },
  soundSwitch: {
    paddingLeft: 190,
  },
  darkModeSwitch: {
    paddingRight: 140,
  },
  languageSwitch: {
    paddingRight: 150,
  },
});
