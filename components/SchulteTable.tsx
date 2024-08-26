import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';

export function SchulteTable() {

    // useEffect(() => {
    //     const shuffled = shuffledNumbers(1, 25);
    // }, []);

    return (
        <View style={styles.container}>
            
            <View style={styles.table}>
                {Array.from({length: 25}, (_ ,index) => (
                    <View key={index} style={styles.cell}>
                        <Text style={styles.text}>{index + 1}</Text>
                    </View>
                ))}
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

    table: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 350,
        // height: 350,
        // borderWidth: 1,
    },

    cell: {
        width: 70,
        height: 70,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // row: {
    //     borderWidth: 1,
    //     width: 350,
    //     height: 70,
    // },

    // col: {
    //     borderWidth: 1,
    //     width: 70,
    //     height: 350,
    // },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});