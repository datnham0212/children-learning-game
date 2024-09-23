import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { game2styles } from './Game1Style';
import { renderQuestion, renderResult, handleAnswer } from './Game1Logic';

// Define possible shapes and their correct answers
const shapes = [
    { name: "Circle", image: require('../../assets/images/flags_of_the_world/tn_ac-flag.gif') },
    { name: "Square", image: require('../../assets/images/flags_of_the_world/tn_ae-flag.gif') },
    { name: "Triangle", image: require('../../assets/images/flags_of_the_world/tn_af-flag.gif') },
    { name: "Rectangle", image: require('../../assets/images/flags_of_the_world/tn_ag-flag.gif') },
    { name: "Diamond", image: '' },
    { name: "Pentagon", image: '' },
    { name: "Hexagon", image: '' },
    { name: "Star", image: '' },
    { name: "Heart", image: '' },
    { name: "Oval", image: '' },
    { name: "Plus", image: '' },
];

const generateQuestions = (numQuestions : number) => {
    const questions = [];
    for (let i = 0; i < numQuestions; i++) {
        // Randomly select a shape as the correct answer
        const correctShape = shapes[Math.floor(Math.random() * shapes.length)];
        
        // Create a list of options including the correct answer and three random wrong answers
        const options = [correctShape.name];
        while (options.length < 4) {  // Change to 4 choices
            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
            if (!options.includes(randomShape.name)) {
                options.push(randomShape.name);
            }
        }

        // Shuffle options
        const shuffledOptions = options.sort(() => Math.random() - 0.5);

        questions.push({
            question: "Which shape is this?",
            image: correctShape.image, // Update with actual image path if available
            options: shuffledOptions,
            correctAnswer: correctShape.name,
        });
    }
    return questions;
};

const questions = generateQuestions(10); // Generate 10 random questions

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
