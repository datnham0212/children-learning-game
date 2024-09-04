import React from 'react';
import { Text, View, Image, StyleSheet, Platform, Pressable, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/ThemeContext';


const questions = [
    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/circle.png'),
        options: ["Circle", "Square", "Triangle"],
        correctAnswer: "Circle",
    },
    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/square.png'),
        options: ["Rectangle", "Square", "Hexagon"],
        correctAnswer: "Square",
    },
    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/triangle.png'),
        options: ["Circle", "Pentagon", "Triangle"],
        correctAnswer: "Triangle",
    },
////////////////////////////
    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/diamond.png'),
        options: ["Square", "Diamond", "Triangle"],
        correctAnswer: "Diamond",
    },
    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/heart.png'),
        options: ["Heart", "Circle", "Hexagon"],
        correctAnswer: "Heart",
    },
    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/oval.png'),
        options: ["Circle", "Triangle", "Oval"],
        correctAnswer: "Oval",
    },
///////////////////////////////////

    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/pentagon.png'),
        options: ["Rectangle", "Square", "Pentagon"],
        correctAnswer: "Pentagon",
    },
    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/plus.png'),
        options: ["Rectangle", "Plus", "Hexagon"],
        correctAnswer: "Plus",
    },
    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/star.png'),
        options: ["Plus", "Star", "Triangle"],
        correctAnswer: "Star",
    },

    {
        question: "Which shape is this?",
        image: require('@/assets/images/shapes/rectangle.png'),
        options: ["Heart", "Star", "Rectangle"],
        correctAnswer: "Rectangle",
    },
];


export function ShapeGuessing() {

    const { isDarkMode, toggleTheme, themeStyles } = useTheme();

    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isQuizComplete, setIsQuizComplete] = React.useState(false);

    const handleAnswer = (selectedOption: string) => {
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
    
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizComplete(true);
        }
    };


    const currentQuestion = questions[currentQuestionIndex];

    return (
        <View style={[styles.container, { backgroundColor: themeStyles.bgColor }]}>
            {!isQuizComplete ? (
                <>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>{currentQuestion.question}</Text>
                        <Image source={currentQuestion.image} style={styles.shapeImage} />
                    </View>
                    <View style={styles.answers}>
                        {currentQuestion.options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.answer}
                                onPress={() => handleAnswer(option)}
                            >
                                <Text style={styles.answerText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </>
            ) : (
                <View style={styles.result}>
                    <Text style={styles.resultText}>Quiz Complete! Your Score: {score}/{questions.length}</Text>
                </View>
            )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 30,
    },

    question: {
        width: 360,
        height: 300,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    questionText: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
    },

    shapeImage: {
        width: 200,
        height: 200,
        borderRadius: 20,
        margin: 10,
    },

    answers: {
        flex: 0.7
    },

    answer: {
        width: 300,
        height: 80,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
    },

    answerText: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
    },

    result: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    resultText: {
        fontSize: 24,
    }
    

});