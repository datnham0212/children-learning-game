import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { game2styles } from './Game1Style';
import { renderQuestion, renderResult, handleAnswer } from './Game1Logic';
// image: require(''),
const questions = [
    { question: "Which shape is this?", image: require('../../assets/images/flags_of_the_world/tn_ac-flag.gif'), options: ["Circle", "Square", "Triangle"], correctAnswer: "Circle" },
    { question: "Which shape is this?", image: '', options: ["Rectangle", "Square", "Hexagon"], correctAnswer: "Square" },
    { question: "Which shape is this?", image: '', options: ["Circle", "Pentagon", "Triangle"], correctAnswer: "Triangle" },
    { question: "Which shape is this?", image: '', options: ["Square", "Diamond", "Triangle"], correctAnswer: "Diamond" },
    { question: "Which shape is this?", image: '', options: ["Heart", "Circle", "Hexagon"], correctAnswer: "Heart" },
    { question: "Which shape is this?", image: '', options: ["Circle", "Triangle", "Oval"], correctAnswer: "Oval" },
    { question: "Which shape is this?", image: '', options: ["Rectangle", "Square", "Pentagon"], correctAnswer: "Pentagon" },
    { question: "Which shape is this?", image: '', options: ["Rectangle", "Plus", "Hexagon"], correctAnswer: "Plus" },
    { question: "Which shape is this?", image: '', options: ["Plus", "Star", "Triangle"], correctAnswer: "Star" },
    { question: "Which shape is this?", image: '', options: ["Heart", "Star", "Rectangle"], correctAnswer: "Rectangle" },
];

export function ByNameGuessing() {
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

