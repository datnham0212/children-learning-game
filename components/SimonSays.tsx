import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SimonSays() {

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Simon Says fuck you!!!</Text>
        {/* Add your game components and logic here */}
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',  // This makes the screen feel separate and immersive
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',  // Match text color to the immersive screen style
  },
});
