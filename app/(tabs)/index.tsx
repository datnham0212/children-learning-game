import { DefaultScreen } from '@/components/DefaultScreen';
import { GameScreen1 } from '@/components/GameScreen1';
import { GameScreen2 } from '@/components/GameScreen2';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();


export default function HomeScreen() {
  const { isDarkMode, themeStyles } = useTheme();

  useEffect(() => {
    StatusBar.setHidden(true);

    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <NavigationContainer independent={true} theme={isDarkMode ? DarkTheme : DefaultTheme}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={DefaultScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Game1" component={GameScreen1} options={{ headerShown: false }} />
            <Stack.Screen name="Game2" component={GameScreen2} options={{ headerShown: false }} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}
