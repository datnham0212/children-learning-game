import React from 'react';
import { GameTab } from './GameTab';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function DefaultScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.half}>
        <Pressable onPress={() => navigation.navigate("Game1")} style={styles.button}>
          <Text style={styles.text}>Game 1</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game2")} style={styles.button}>
          <Text style={styles.text}>Game 2</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game3")} style={styles.button}>
          <Text style={styles.text}>Game 3</Text>
        </Pressable>
      </View>
      <View style={styles.half}>
        <Pressable onPress={() => navigation.navigate("Game4")} style={styles.button}>
          <Text style={styles.text}>Game 4</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game5")} style={styles.button}>
          <Text style={styles.text}>Game 5</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Game6")} style={styles.button}>
          <Text style={styles.text}>Game 6</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },

  half: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    backgroundColor: 'orange',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    margin: 20,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }

});
