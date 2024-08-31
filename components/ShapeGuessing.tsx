import React from 'react';
import { Text, View, Image, StyleSheet, Platform, Pressable } from 'react-native';
import { useTheme } from '@/components/ThemeContext';

export function ShapeGuessing() {

    const { isDarkMode, toggleTheme, themeStyles } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            <View style={styles.question} />

            <View style={styles.answers}>
                <Pressable style={styles.answer} />
                <Pressable style={styles.answer} />
                <Pressable style={styles.answer} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 30,
    },

    question: {
        width: 360,
        height: 300,
        borderWidth: 1,
        borderRadius: 20,
    },

    answers: {
        flex: 0.5
    },

    answer: {
        width: 300,
        height: 80,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
    }
    

});