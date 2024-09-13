import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { game2styles } from "./Game2Style";

export const renderQuestion = (currentQuestion: { question: any; image: any; options: any; correctAnswer?: string; }, handleAnswer: { (option: any): void; (option: any): void; (arg0: any): void; }) => (
    <View style={game2styles.question}>
        <Text style={game2styles.questionText}>{currentQuestion.question}</Text>
        {/* <Image source={currentQuestion.image} style={game2styles.image} /> */}
        <View style={game2styles.answers}>
            {currentQuestion.options.map((option: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                <TouchableOpacity key={index} style={game2styles.answer} onPress={() => handleAnswer(option)}>
                    <Text style={game2styles.answerText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

export const handleAnswer = (selectedOption: any, currentQuestion: { question?: string; image?: any; options?: string[]; correctAnswer: any; }, setScore: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: (prevScore: any) => any): void; }, setCurrentQuestionIndex: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: (prevIndex: any) => any): void; }, setIsQuizComplete: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }, currentQuestionIndex: number, totalQuestions: number) => {
    if (selectedOption === currentQuestion.correctAnswer) setScore(prevScore => prevScore + 1);
    setCurrentQuestionIndex((prevIndex) => (prevIndex < totalQuestions - 1 ? prevIndex + 1 : prevIndex));
    if (currentQuestionIndex >= totalQuestions - 1) setIsQuizComplete(true);
};

export const renderResult = (score: number, questions: any[]) => (
    <View style={game2styles.result}>
        <Text style={game2styles.resultText}>Quiz Complete! Your Score: {score}/{questions.length}</Text>
    </View>
);