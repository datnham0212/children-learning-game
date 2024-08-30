import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/ThemeContext'; 


const shuffledPieces = (array : any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export function Puzzle() {
    const { isDarkMode, toggleTheme, themeStyles } = useTheme();
    const [pieces, setPieces] = useState([]);
    useEffect(() => {
        const initialPosition = Array.from({ length: 9 }, (_, index) => index + 1);
        setPieces(shuffledPieces(initialPosition));
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            <View style={styles.table}>
                {pieces.map((piece, index) => (
                    <TouchableOpacity style={[styles.cell, { borderColor: themeStyles.borderColor}]} key={index}><Text style={[styles.text, { color: themeStyles.textColor}]}>{piece}</Text></TouchableOpacity>
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
