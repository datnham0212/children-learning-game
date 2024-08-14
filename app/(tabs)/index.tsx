import { HelloWave } from '@/components/HelloWave';
import { GameTab } from '@/components/GameTab';
import React from 'react';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.half}>
        <GameTab/>
        <GameTab/>
        <GameTab/>
      </View>
      <View style={styles.half}>
        <GameTab/>
        <GameTab/>
        <GameTab/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    // borderWidth: 2,
    // borderStyle: 'solid',
    // borderColor: 'cyan',
    // padding: 'auto',
  },

  half: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }});