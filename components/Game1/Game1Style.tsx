import { StyleSheet } from 'react-native';

export const game2styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center'},
    question: { width: 360, height: 300, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 20 },
    questionText: { fontSize: 24, textAlign: 'center', margin: 20 },
    image: { width: 300, height: 220, borderRadius: 20, margin: 10},
    answers: { flex: 0.7 , marginTop: 20 },
    answer: { width: 300, height: 80, borderWidth: 1, borderRadius: 20, margin: 10, justifyContent: 'center' },
    answerText: { fontSize: 24, textAlign: 'center', margin: 10 },
    result: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    resultText: { fontSize: 24 }
});