import React from 'react';
import { Text, View, Image, StyleSheet, Platform , TouchableOpacity} from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { renderQuestion, renderResult, handleAnswer } from './Game1Logic';

const questions = [
    {
        question: "Which color is this?",
        image: '',
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Blue",
    },

    {
        question: "Which color is this?",
        image: '',
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Green",
    }

];

export function ByFlagGuessing() {
    const { themeStyles } = useTheme();
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isQuizComplete, setIsQuizComplete] = React.useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            {!isQuizComplete
                ? renderQuestion(currentQuestion, (option) => handleAnswer(option, currentQuestion, setScore, setCurrentQuestionIndex, setIsQuizComplete, currentQuestionIndex, questions.length))
                : renderResult(score, questions)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center'},
    question: { width: 360, height: 300, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 20 },
    questionText: { fontSize: 24, textAlign: 'center', margin: 20 },
    image: { width: 200, height: 200, borderRadius: 20, margin: 10},
    answers: { flex: 0.7 , marginTop: 20 },
    answer: { width: 300, height: 80, borderWidth: 1, borderRadius: 20, margin: 10, justifyContent: 'center' },
    answerText: { fontSize: 24, textAlign: 'center', margin: 10 },
    result: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    resultText: { fontSize: 24 }
});