import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@/components/ThemeContext';

export function SimonSays() {

    const { isDarkMode, toggleTheme, themeStyles } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor } ]}>
            <View style={styles.circle}>
                <View style={styles.upper}>
                    <View style={styles.quarterContainer}>
                        <TouchableOpacity style={styles.yellow} onPress={() => { console.log('Yellow pressed!') }} />
                    </View>
                    <View style={styles.quarterContainer}>
                        <TouchableOpacity style={styles.blue} onPress={() => { console.log('Blue pressed!') }} />
                    </View>
                </View>

                <View style={styles.lower}>
                    <View style={styles.quarterContainer}>
                        <TouchableOpacity style={styles.red} onPress={() => { console.log('Red pressed!') }} />
                    </View>
                    <View style={styles.quarterContainer}>
                        <TouchableOpacity style={styles.green} onPress={() => { console.log('Green pressed!') }} />
                    </View>
                </View>

                <View style={[styles.middle, { backgroundColor: themeStyles.bgColor} ]}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    circle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 360,
        height: 360,
        borderRadius: 180,
        overflow: 'hidden',
        position: 'relative',
        // borderColor: 'white',
        // borderWidth: 1,
    },

    upper: {
        flex: 1,
        flexDirection: 'row',
    },

    middle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        zIndex: 10,
        top: -120,
    },

    lower: {
        flex: 1,
        flexDirection: 'row',
        zIndex: -1,
        top: 60,
    },

    quarterContainer: {
        width: 180,
        height: 180,
        overflow: 'hidden',
    },

    yellow: {
        width: 360,
        height: 360,
        backgroundColor: 'yellow',
        borderTopLeftRadius: 180,
        position: 'absolute',
        top: 0,
        left: 0,
    },

    blue: {
        width: 360,
        height: 360,
        backgroundColor: 'blue',
        borderTopRightRadius: 180,
        position: 'absolute',
        top: 0,
        right: 0,
    },

    red: {
        width: 360,
        height: 360,
        backgroundColor: 'red',
        borderBottomLeftRadius: 180,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },

    green: {
        width: 360,
        height: 360,
        backgroundColor: 'green',
        borderBottomRightRadius: 180,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
});


