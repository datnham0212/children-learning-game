import React from 'react';
import { Button, Text, View, Image, StyleSheet, Platform, Pressable } from 'react-native';

export function GameTab(props: any) {
    const { onPress, title = 'Game' } = props;
    return (
    <Pressable onPress={() => console.log('Pressed')} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
    );
}

const styles = StyleSheet.create({
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
    },
});