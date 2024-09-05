import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, Platform, TouchableOpacity, Pressable } from 'react-native';
import { useTheme } from '@/components/ThemeContext'; 

const sourceImage = require('@/assets/images/nemo.jpg');


export function Puzzle() {
    const { themeStyles } = useTheme();
    const [pieces, setPieces] = useState<number[]>([]);
    const [rotationAngles, setRotationAngles] = useState<number[]>([]); // Rotation angles state

    useEffect(() => {
        const initialPosition = Array.from({ length: 9 }, (_, index) => index + 1);
        setPieces(initialPosition);
        
        const initialRotations = Array.from({ length: 9 }, () => {
            const rotations = [0, 90, 180, 270];
            return rotations[Math.floor(Math.random() * rotations.length)];
        });
        setRotationAngles(initialRotations);
    }, []);

    const handlePress = (index: number) => {
        setRotationAngles((prevAngles) => {
            const newAngles = [...prevAngles];
            newAngles[index] = (newAngles[index] + 90) % 360; // Rotate by 90 degrees
            return newAngles;
        });
    };

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            <View style={styles.table}>
                {pieces.map((piece, index) => (
                    <Pressable
                        style={[styles.cell, { borderColor: themeStyles.borderColor }]}
                        key={index}
                        onPress={() => handlePress(index)} // Rotate on press
                    >
                        <Text style={[styles.text, { color: themeStyles.textColor }]}>
                            {piece}
                        </Text>
                        <Image
                            source={sourceImage}
                            style={[
                                styles.image,
                                {
                                    left: -(index % 3) * 110, // Adjust based on the image width
                                    top: -Math.floor(index / 3) * 110, // Adjust based on the image height
                                    transform: [{ rotate: `${rotationAngles[index]}deg` }], // Apply rotation
                                },
                            ]}
                            resizeMode="cover"
                        />
                    </Pressable>
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
        width: 330,
        height: 330,
    },

    cell: {
        width: 110,
        height: 110,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    image: {
        position: 'absolute',
        width: 330,
        height: 330,
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
