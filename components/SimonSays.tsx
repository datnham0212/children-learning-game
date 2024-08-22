import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function SimonSays() {

    return (
        <View style={styles.container}>
          <View style={styles.circle}>
            <View style={styles.upper}>  
              <Pressable style={styles.yellow} onPress={() => {console.log('Yellow pressed!')}}/>
              <Pressable style={styles.blue} onPress={() => {console.log('Blue pressed!')}}/>
            </View>

            <View style={styles.lower}>
              <Pressable style={styles.red} onPress={() => {console.log('Red pressed!')}}/>
              <Pressable style={styles.green} onPress={() => {console.log('Green pressed!')}}/>
            </View>
          </View>
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

  circle: {
    width: 360,
    height: 360,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 180,
  },

  upper: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
  },

  lower: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 180,
  },

  yellow: {
    flex: 0.5,
    width: 180,
    height: 180,
    backgroundColor: 'yellow',
    borderTopLeftRadius: 180,
  },

  blue: {
    flex: 0.5,
    width: 180,
    height: 180,
    backgroundColor: 'blue',
    borderTopRightRadius: 180,
  },

  red: {
    flex: 0.5,
    width: 180,
    height: 180,
    backgroundColor: 'red',
    borderBottomLeftRadius: 180,
  },

  green: {
    flex: 0.5,
    width: 180,
    height: 180,
    backgroundColor: 'green',
    borderBottomRightRadius: 180,
  }
});
