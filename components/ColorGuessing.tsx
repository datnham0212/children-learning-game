import React from 'react';
import { Text, View, Image, StyleSheet, Platform , TouchableOpacity} from 'react-native';
import { useTheme } from '@/components/ThemeContext';

const questions = [
    {
        question: "Which color is this?",
        image: require('@/assets/images/colours/blue.jpg'),
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Blue",
    },

    {
        question: "Which color is this?",
        image: require('@/assets/images/colours/green.jpg'),
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Green",
    }

];

export function ColorGuessing() {
    const { themeStyles } = useTheme();
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isQuizComplete, setIsQuizComplete] = React.useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (selectedOption : any) => {
        if (selectedOption === currentQuestion.correctAnswer) setScore(score + 1);
        setCurrentQuestionIndex((prevIndex) => (prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex));
        if (currentQuestionIndex >= questions.length - 1) setIsQuizComplete(true);
    };

    const renderQuestion = () => (
        <View style={styles.question}>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            <Image source={currentQuestion.image} style={styles.image} />
            <View style={styles.answers}>
                {currentQuestion.options.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.answer} onPress={() => handleAnswer(option)}>
                        <Text style={styles.answerText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    const renderResult = () => (
        <View style={styles.result}>
            <Text style={styles.resultText}>Quiz Complete! Your Score: {score}/{questions.length}</Text>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            {!isQuizComplete ? renderQuestion() : renderResult()}
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