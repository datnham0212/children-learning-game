import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { Text, View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '@/components/ThemeContext';

export default function OptionsScreen() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const toggleSound = () => setIsSoundEnabled(previousState => !previousState);

  const { isDarkMode, toggleTheme, themeStyles } = useTheme();

  const [isLanguageSwitched, setIsLanguageSwitched] = useState(false);
  const toggleLanguage = () => setIsLanguageSwitched(previousState => !previousState);

  const [questionQuantity, setQuestionQuantity] = useState(10);
  const [timer, setTimer] = useState("Off");
  const timerOptions = ["Off", "10", "20", "30", "40", "50", "60"];

  const buttonStyle = {
    backgroundColor: '#09ad50',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  };

  const buttonTextStyle = {
    color: '#fff',
    fontSize: 20,
  };

  const toggleStyle = (isEnabled: boolean): ViewStyle => ({
    backgroundColor: isEnabled ? '#09ad50' : '#767577',
    borderRadius: 20,
    padding: 10,
    width: 60,
    alignItems: 'center',
  });

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
          maximumTrackTintColor={isDarkMode ? "#ffffff" : "#000000"}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Sound</Text>
        <TouchableOpacity style={toggleStyle(isSoundEnabled)} onPress={toggleSound}>
          <Text style={buttonTextStyle}>{isSoundEnabled ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Dark Mode</Text>
        <TouchableOpacity style={toggleStyle(isDarkMode)} onPress={toggleTheme}>
          <Text style={buttonTextStyle}>{isDarkMode ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Language</Text>
        <TouchableOpacity style={toggleStyle(isLanguageSwitched)} onPress={toggleLanguage}>
          <Text style={buttonTextStyle}>{isLanguageSwitched ? 'Vi' : 'En'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Number of questions:</Text>
        <View style={styles.counter}>
          <TouchableOpacity style={buttonStyle} onPress={() => setQuestionQuantity(prev => Math.max(10, prev - 5))}>
            <Text style={buttonTextStyle}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.counterText, { color: themeStyles.textColor }]}>{questionQuantity}</Text>
          <TouchableOpacity style={buttonStyle} onPress={() => setQuestionQuantity(prev => Math.min(30, prev + 5))}>
            <Text style={buttonTextStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>Set timer (seconds):</Text>
        <View style={styles.counter}>
          <TouchableOpacity style={buttonStyle} onPress={() => {
            const currentIndex = timerOptions.indexOf(timer);
            const newIndex = Math.max(0, currentIndex - 1);
            setTimer(timerOptions[newIndex]);
          }}>
            <Text style={buttonTextStyle}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.counterText, { color: themeStyles.textColor }]}>{timer}</Text>
          <TouchableOpacity style={buttonStyle} onPress={() => {
            const currentIndex = timerOptions.indexOf(timer);
            const newIndex = Math.min(timerOptions.length - 1, currentIndex + 1);
            setTimer(timerOptions[newIndex]);
          }}>
            <Text style={buttonTextStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  paragraph: {
    fontSize: 20,
    marginRight: 15,
    flex: 1,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  counterText: {
    fontSize: 25,
    marginHorizontal: 15,
    fontWeight: '500',
  },
});
