import React, {FC} from 'react';
import QuizElement from '../quiz-item/quiz-item';

import Typography from '@mui/material/Typography';
import {IQuiz} from "../../types/types";
import {nanoid} from "@reduxjs/toolkit";

interface QuizProps {
    quiz: IQuiz;
}

const Quiz: FC<QuizProps> = ({quiz}) => {
    return (
        <>
            <Typography variant="h5">{quiz.name}</Typography>
            {quiz.items.map(item =>
                <QuizElement
                    key={nanoid()}
                    answers={item.answers}
                    question={item.question}
                    quizId={quiz.id}
                />
            )}
        </>
    );
};

export default Quiz;
