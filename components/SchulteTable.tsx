import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/ThemeContext'; 

const shuffledNumbers = (array : any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function SchulteTable() {
    const { isDarkMode, toggleTheme, themeStyles } = useTheme();
    const [numbers, setNumbers] = useState([]);
    useEffect(() => {
        const initialNumbers = Array.from({ length: 25 }, (_, index) => index + 1);
        setNumbers(shuffledNumbers(initialNumbers));
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            <View style={styles.table}>
                {numbers.map((number, index) => (
                    <TouchableOpacity style={[styles.cell, { borderColor: themeStyles.borderColor}]} key={index}>
                        <Text style={[styles.text, { color: themeStyles.textColor}]}>
                            {number}
                        </Text>
                    </TouchableOpacity>
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
    },

    cell: {
        width: 70,
        height: 70,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});


