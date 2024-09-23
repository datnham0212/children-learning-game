import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext<{ questionQuantity: number; setQuestionQuantity: React.Dispatch<React.SetStateAction<number>> } | null>(null);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questionQuantity, setQuestionQuantity] = useState(10);

  return (
    <QuizContext.Provider value={{ questionQuantity, setQuestionQuantity } as any}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === null) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
