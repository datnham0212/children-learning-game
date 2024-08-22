import React, { createContext, useState, useContext } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  themeStyles: { textColor: '#000' }, // Default text color for light theme
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = {
    textColor: isDarkMode ? '#fff' : '#000', // White text in dark mode, black text in light mode
    menuIcon: isDarkMode ? '#fff' : '#000', // White icon in dark mode, black icon in light mode
    // backgroundColor: isDarkMode ? '#333' : '#fff', // Dark background in dark mode, light background in light mode

  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeStyles }}>
      <NavigationThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
        {children}
      </NavigationThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
