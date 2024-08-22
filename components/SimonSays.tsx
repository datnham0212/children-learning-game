import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export function SimonSays() {

    return (
        <View style={styles.container}>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    circle: {
        width: 360,
        height: 360,
        borderRadius: 180,
        overflow: 'hidden',
        position: 'relative',
    },

    upper: {
        flex: 1,
        flexDirection: 'row',
    },

    lower: {
        flex: 1,
        flexDirection: 'row',
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


