import React, { FC, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Quiz from '../../components/quiz/quiz';
import { Outlet, useParams } from 'react-router-dom';
import { useGetQuizzesQuery } from '../../redux/slices/quizzesApiSlice';
import { IQuiz } from '../../types/types';

const QuizPage: FC = () => {

    const mdTheme = createTheme();
    const params = useParams();
    const { data: quizzes } = useGetQuizzesQuery();
    const [quiz, setQuiz] = useState<IQuiz>();

    useEffect(() => {
        const quizIndex = quizzes?.findIndex(q => q.quizId === params.quizId);
        if (quizIndex != undefined && quizIndex > -1 && quizzes != undefined) {
            setQuiz(quizzes[quizIndex]);
        }
    })

    return (
        <ThemeProvider theme={mdTheme}>
            {quiz
                ? <Quiz quiz={quiz} />
                : <Outlet />
            }
        </ThemeProvider>
    );
}

export default QuizPage;
