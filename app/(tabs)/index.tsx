import { DefaultScreen } from '@/components/DefaultScreen';
import { GameScreen1 } from '@/components/GameScreen1';
import { GameScreen2 } from '@/components/GameScreen2';
import { GameScreen3 } from '@/components/GameScreen3';
import { GameScreen4 } from '@/components/GameScreen4';
import { GameScreen5 } from '@/components/GameScreen5';
import { GameScreen6 } from '@/components/GameScreen6';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/components/ThemeContext';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SimonSays } from '@/components/SimonSays';
import OptionsScreen from './explore';
import { PictureGuessing } from '@/components/PictureGuessing';

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
            <Stack.Screen name="Game1" component={GameScreen1} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor } }} />
            <Stack.Screen name="Game2" component={GameScreen2} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor }}} />
            <Stack.Screen name="Game3" component={GameScreen3} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor }}} />
            <Stack.Screen name="Game4" component={GameScreen4} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor }}} />
            <Stack.Screen name="Game5" component={GameScreen5} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor }}} />
            <Stack.Screen name="Game6" component={GameScreen6} options={{ headerShown: true, title: '' , headerStyle: { backgroundColor: themeStyles.bgColor }}} />

            <Stack.Screen name="SimonSays" component={SimonSays} options={{ headerShown: false,  presentation: 'modal', animation: 'fade' }} />
            <Stack.Screen name="PictureGuessing" component={PictureGuessing} options={{ headerShown: false,  presentation: 'modal', animation: 'fade' }} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}
