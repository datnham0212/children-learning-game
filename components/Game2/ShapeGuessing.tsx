import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { game2styles } from './Game2Style';
import { renderQuestion, renderResult, handleAnswer } from './Game2Logic';

const questions = [
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Circle", "Square", "Triangle"], correctAnswer: "Circle" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Rectangle", "Square", "Hexagon"], correctAnswer: "Square" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Circle", "Pentagon", "Triangle"], correctAnswer: "Triangle" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Square", "Diamond", "Triangle"], correctAnswer: "Diamond" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Heart", "Circle", "Hexagon"], correctAnswer: "Heart" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Circle", "Triangle", "Oval"], correctAnswer: "Oval" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Rectangle", "Square", "Pentagon"], correctAnswer: "Pentagon" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Rectangle", "Plus", "Hexagon"], correctAnswer: "Plus" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Plus", "Star", "Triangle"], correctAnswer: "Star" },
    { question: "Which shape is this?", /*image: require(''),*/ options: ["Heart", "Star", "Rectangle"], correctAnswer: "Rectangle" },
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

