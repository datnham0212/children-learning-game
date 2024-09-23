import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { renderQuestion, renderResult, handleAnswer } from './Game1Logic';

// Generate questions with 4 options
const generateQuestions = (numQuestions : number) => {
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Cyan", "Magenta"];
    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
        const correctColor = colors[Math.floor(Math.random() * colors.length)];
        const options = [correctColor];

        while (options.length < 4) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            if (!options.includes(randomColor)) {
                options.push(randomColor);
            }
        }

        // Shuffle options
        const shuffledOptions = options.sort(() => Math.random() - 0.5);

        questions.push({
            question: "Which color is this?",
            image: '', // Update with actual image if available
            options: shuffledOptions,
            correctAnswer: correctColor,
        });
    }
    return questions;
};

const questions = generateQuestions(10); // Generate 10 random questions

export function ByFlagGuessing() {
    const { themeStyles } = useTheme();
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isQuizComplete, setIsQuizComplete] = React.useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            {!isQuizComplete
                ? (
                    <>
                        <View style={styles.question}>
                            <Text style={[styles.questionText, { color: themeStyles.textColor }]}>
                                {currentQuestion.question}
                            </Text>
                            <Image source={{ uri: currentQuestion.image }} style={styles.image} />
                        </View>
                        <View style={styles.answers}>
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.answer} onPress={() => handleAnswer("option1", currentQuestion, setScore, setCurrentQuestionIndex, setIsQuizComplete, currentQuestionIndex, questions.length)}>
                                    <Text style={[styles.answerText, { color: themeStyles.textColor }]}>
                                        {currentQuestion.options[0]}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.answer} onPress={() => handleAnswer("option2", currentQuestion, setScore, setCurrentQuestionIndex, setIsQuizComplete, currentQuestionIndex, questions.length)}>
                                    <Text style={[styles.answerText, { color: themeStyles.textColor }]}>
                                        {currentQuestion.options[1]}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.answer} onPress={() => handleAnswer("option3", currentQuestion, setScore, setCurrentQuestionIndex, setIsQuizComplete, currentQuestionIndex, questions.length)}>
                                    <Text style={[styles.answerText, { color: themeStyles.textColor }]}>
                                        {currentQuestion.options[2]}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.answer} onPress={() => handleAnswer("option4", currentQuestion, setScore, setCurrentQuestionIndex, setIsQuizComplete, currentQuestionIndex, questions.length)}>
                                    <Text style={[styles.answerText, { color: themeStyles.textColor }]}>
                                        {currentQuestion.options[3]}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                )
                : renderResult(score, questions)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    question: { width: 360, height: 300, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 20 },
    questionText: { fontSize: 24, textAlign: 'center', margin: 20 },
    image: { width: 200, height: 200, borderRadius: 20, margin: 10 },
    answers: { flex: 0.7, marginTop: 20 },
    row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
    answer: { width: 150, height: 80, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
    answerText: { fontSize: 24, textAlign: 'center' },
    result: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    resultText: { fontSize: 24 },
});
