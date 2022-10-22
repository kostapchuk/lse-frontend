import React, { FC } from 'react';
import QuizElement from '../quiz-item/quiz-item';

import Typography from '@mui/material/Typography';
import { IQuiz } from "../../types/types";
import { nanoid } from "@reduxjs/toolkit";
import { Button } from '@mui/material';
import { store } from '../../redux/store/store';
import { useSubmitResultMutation } from '../../redux/slices/resultsApiSlice';
import { useSelector } from 'react-redux';

interface QuizProps {
    quiz: IQuiz;
}

const Quiz: FC<QuizProps> = ({ quiz }) => {
    const [submitResult] = useSubmitResultMutation();
    const userId = useSelector((state: any) => state.auth.id);
    const userType = useSelector((state: any) => state.auth.userType);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const results = store.getState().results.results;
        const resIndex = results.findIndex(res => res.quizId == quiz.quizId);
        if (resIndex != -1) {
            const payload = { quizResult: results[resIndex], userId: userId, userType: userType };
            submitResult(payload).unwrap()
                .then((res) => {
                    console.log(res)
                    // get score res == score
                })

        }
    }

    return (
        <>
            <Typography variant="h5">{quiz.quizName}</Typography>
            {quiz.quizItems.map(item =>
                <QuizElement
                    key={nanoid()}
                    answers={item.answers}
                    question={item.question}
                    quizId={quiz.quizId}
                />
            )}
            <Button onClick={handleSubmit}
                style={{ backgroundColor: '#1976d2' }}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Отправить
            </Button>
        </>
    );
};

export default Quiz;
