import React from 'react';
import { Text, View, Image, StyleSheet, Platform, Pressable, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/ThemeContext';

export function ShapeGuessing() {

    const { isDarkMode, toggleTheme, themeStyles } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            <View style={styles.question}>
                
            </View>

            <View style={styles.answers}>
                <TouchableOpacity style={styles.answer} />
                <TouchableOpacity style={styles.answer} />
                <TouchableOpacity style={styles.answer} />
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
        flex: 0.7
    },

    answer: {
        width: 300,
        height: 80,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
    }
    

});