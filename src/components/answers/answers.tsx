import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { FC } from 'react';
import CheckboxGroup from '../checkbox-group/checkbox-group';
import RadioButtonGroup from '../radiobutton-group/radiobutton-group';

export interface IAnswer {
    id: string;
    text: string;
}

interface AnswersProps {
    answers: IAnswer[];
    multipleChoice: boolean;
    questionId: string;
    quizId: string;
}

const Answers: FC<AnswersProps> = ({ answers, questionId, multipleChoice, quizId }) => {
    return (
        <>
            {multipleChoice ? <CheckboxGroup key={nanoid()} answers={answers} questionId={questionId} quizId={quizId} /> :
                <RadioButtonGroup key={nanoid()} answers={answers} questionId={questionId} quizId={quizId} />}
        </>
    );
};

export default Answers;
