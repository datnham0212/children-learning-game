import { DefaultScreen } from '@/components/DefaultScreen';
import OptionsScreen from './settings';

import { GameScreen2 } from '@/components/Game2/GameScreen2';

import { GameScreen1 } from '@/components/Game1/GameScreen1';
import { ByFlagGuessing } from '@/components/Game1/ByFlagGuessing';
import { ByNameGuessing } from '@/components/Game1/ByNameGuessing';

import { GameScreen3 } from '@/components/Game3/GameScreen3';

import { GameScreen4 } from '@/components/Game4/GameScreen4';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
            <Stack.Screen name="Options" component={OptionsScreen} options={{ headerShown: true, title: '', headerStyle: { backgroundColor: themeStyles.bgColor } }} />

            <Stack.Screen name="Home" component={DefaultScreen} options={{ headerShown: false }} />

            <Stack.Screen name="Game4" component={GameScreen4} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor }}} />

            <Stack.Screen name="Game1" component={GameScreen1} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor } }} />
            
            <Stack.Screen name="Game2" component={GameScreen2} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor }}} />
            <Stack.Screen name="ByNameGuessing" component={ByNameGuessing} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor },  presentation: 'modal', animation: 'fade' }} />
            <Stack.Screen name="ByFlagGuessing" component={ByFlagGuessing} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor },  presentation: 'modal', animation: 'fade' }} />
            
            <Stack.Screen name="Game3" component={GameScreen3} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor }}} />
         
          
          
          </Stack.Navigator>
    </NavigationContainer>
  );
}
