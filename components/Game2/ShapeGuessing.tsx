import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { game2styles } from './Game2Style';
import { renderQuestion, renderResult, handleAnswer } from './Game2Logic';

const questions = [
    { question: "Which shape is this?", image: require('@/assets/images/shapes/circle.png'), options: ["Circle", "Square", "Triangle"], correctAnswer: "Circle" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/square.png'), options: ["Rectangle", "Square", "Hexagon"], correctAnswer: "Square" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/triangle.png'), options: ["Circle", "Pentagon", "Triangle"], correctAnswer: "Triangle" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/diamond.png'), options: ["Square", "Diamond", "Triangle"], correctAnswer: "Diamond" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/heart.png'), options: ["Heart", "Circle", "Hexagon"], correctAnswer: "Heart" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/oval.png'), options: ["Circle", "Triangle", "Oval"], correctAnswer: "Oval" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/pentagon.png'), options: ["Rectangle", "Square", "Pentagon"], correctAnswer: "Pentagon" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/plus.png'), options: ["Rectangle", "Plus", "Hexagon"], correctAnswer: "Plus" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/star.png'), options: ["Plus", "Star", "Triangle"], correctAnswer: "Star" },
    { question: "Which shape is this?", image: require('@/assets/images/shapes/rectangle.png'), options: ["Heart", "Star", "Rectangle"], correctAnswer: "Rectangle" },
];

export function ShapeGuessing() {
    const { themeStyles } = useTheme();
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isQuizComplete, setIsQuizComplete] = React.useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={[game2styles.container, { backgroundColor: themeStyles.bgColor }]}>
            {!isQuizComplete
                ? renderQuestion(currentQuestion, (option) => handleAnswer(option, currentQuestion, setScore, setCurrentQuestionIndex, setIsQuizComplete, currentQuestionIndex, questions.length))
                : renderResult(score, questions)}
        </View>
    );
}

